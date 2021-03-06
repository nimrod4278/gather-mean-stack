const express = require('express');
const axios = require('axios');

// checks for jwt and verify
const checkAuth = require('../middleware/auth-check');

const Team = require('../models/team');

const router = express.Router();

router.get('/', checkAuth, async (req ,res, next) => {
    const team = await Team.findOne({name: req.user.team});
    res.status(200).json({points: team.points});
});

module.exports = router;