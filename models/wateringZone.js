const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zoneSchema = new Schema({
  zoneNumber:  { type: Number, required: true, unique: true },
  drainage:  { type: String, enum: ['H','M', 'L'], default: 'M' },
  shade:  { type: String, enum: ['H','M', 'L'], default: 'M' },
  zoneImage: { type: String },
  zoneImageDate: { type: String },
  watsonImageClass: { type: String, enum: ['Sick','Healthy'], default: 'Healthy' },  
  zoneStatus:  { type: String, enum: ['AW','NW'], default: 'NW' },
  wateringState: { type: String, enum: ['ON', 'OFF'], default: 'OFF'},
  numbOfSprinklers: { type: Number },
  dtLastWatered: { type: Number },
  durationOfWatering: { type: Number},
  projectedNextWaterDateTime: { type: Number },
  recDurationOfWatering: { type: Number}
});

const WateringZone = mongoose.model("WateringZone", zoneSchema);

module.exports = WateringZone;
