const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherHistSchema = new Schema({
  epoch:  { type: Number, required: true, unique: true },
  day:  { type: String, required: true },
  timeDate: { type: String, required: true },
  tempHigh: { type: Number, required: true },
  tempLow: { type: Number, required: true },
  precipitation:  {type: Number, required: true}
  
});

const WeatherHist = mongoose.model("WeatherHist", weatherHistSchema);

module.exports = WeatherHist;
