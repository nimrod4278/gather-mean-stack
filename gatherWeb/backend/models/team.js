const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const teamSchema = mongoose.Schema({
  name: {type:Number, required:true },
  // password should be required yet causes a 500 server error - why?
  points: { type: Number, required: true},
});

teamSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Team", teamSchema);