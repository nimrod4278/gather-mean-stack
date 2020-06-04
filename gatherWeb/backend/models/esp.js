const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const espSchema = mongoose.Schema({
  userEmail: {type:String, required:true },
  // password should be required yet causes a 500 server error - why?
  IP: { type: String, required: true},
});

espSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Esp", espSchema);