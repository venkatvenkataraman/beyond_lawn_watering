const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  epoch:  { type: Number, required: true, unique: true },
  day:  { type: String, required: true },
  timeDate: { type: String, required: true },
  tempHigh: { type: Number, required: true },
  tempLow: { type: Number, required: true },
  conditions: { type: String, required: true },
  conditionsURL: { type: String, required: true },
  avgHum: {type: Number, required: true},
  pop:  {type: Number, required: true}

});

const WeatherFC = mongoose.model("WeatherFC", weatherSchema);

module.exports = WeatherFC;
