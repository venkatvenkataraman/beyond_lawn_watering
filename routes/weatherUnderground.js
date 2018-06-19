console.log("In routes/weatherUnderground.js");
// const router = require("express").Router();
const weatherUndergroundController = require("../controllers/weatherUndergroundController");
//dependencies
const passport = require('passport');

///////////////////////

module.exports = (app) => {

// Matches with "/api/weatherForecast"
app
  .route("/api/weatherUndergroundForecast")
  .get(weatherUndergroundController.getWeatherForecast);

// app
//   .route("/api/weatherForecast")
//   .get(weatherUndergroundController.getWeatherForecast);

}
// module.exports = router;
