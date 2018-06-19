const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeRainBarrelSchema = new Schema({
  id: {type: Number, unique: true},
  capacity:  { type: Number},
  percentFull:  {type: Number}
  
});

const HomeRainBarrel = mongoose.model("HomeRainBarrel", homeRainBarrelSchema);

module.exports = HomeRainBarrel;