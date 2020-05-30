const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  // password should be required yet causes a 500 server error - why?
  password: { type: String, required: true},
  team: {type:Number, required:true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);