const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cityWateringRestSchema = new Schema({
  wateringDay1:  { type: String, enum: ['Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], required: true, unique: true},
  wateringDay2:  { type: String, enum: ['Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Null'], default: 'Null'},
  wateringDay3:  { type: String, enum: ['Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Null'], default: 'Null'},
  wateringTimes1Start: {type: String},
  wateringTimes1End: {type: String},
  wateringTimes2Start: {type: String},
  wateringTimes2End: {type: String}
  
});

const CityWateringRest = mongoose.model("CityWateringRest", cityWateringRestSchema);

module.exports = CityWateringRest;