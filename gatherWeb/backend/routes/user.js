const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const router = express.Router();
router.get("/signup", (req, res) => {
    res.send('signup');
});

router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash,
        team: req.body.team
      });
      user
        .save()
        .then(result => {
          res.status(201).json({
            message: "User created!",
            result: result
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    });
  });

router.post("/login", (req,res,next) => {
    let fetcheduser;
    return User.findOne({email: req.body.email }).then(user => {
        if (!user) {
            // user not found
            return res.status(401).json({
                message: "Auth Failed"
            });
        }
        // user is found
        fetcheduser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(result => {
        // if password not match
        if(!result){    
            return res.status(401).json({
                message: "Auth Failed"
            });
        }
        // password match
        const token = jwt.sign(
            {email: fetcheduser.email, userId: fetcheduser._id},
            "secret_this_should_be_longer",
            {expiresIn: '1h'}
        );
        res.status(200).json({
            token: token,
            expiresIn: 3600
        });
    }).catch(err => {
        // matching failed
        return res.status(401).json({
            message: "Auth Failed"
        });
    });
});

router.get('/init', (req, res, next) => {
  res.status(200).json(req);
});

module.exports = router;