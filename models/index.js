console.log("In ./models/index.js")
module.exports = {
  User: require("./user"),
  WeatherFC: require("./weatherFC"),
  WeatherHist:require("./weatherHist"),
  WateringZone: require("./wateringZone"),
  CityWateringRest: require("./cityWateringRest"),
  HomeRainBarrel: require("./homeRainBarrel"),
  // Surveys: require("./Survey.js")
};
