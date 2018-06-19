console.log("In controllers/cityRestrController.js");
const db = require("../models");

// Defining CRUD methods for the CityWateringRest database in the cityRestrController
module.exports = {
  findAll: function(req, res) {
    db.CityWateringRest
      .find(req.query)
      .sort({ date: -1 })
      // .then(dbWateringZone => {const x = res.json(dbWateringZone);
      //   console.log('dbWateringZone = ', dbWateringZone); return x})
      .then(dbCityWateringRest => res.json(dbCityWateringRest))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.CityWateringRest
      .findById(req.params.id)
      .then(dbCityWateringRest => res.json(dbCityWateringRest))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("In cityRestrController.js/create req.data: ", req);
    const CityWateringRest = {
      _id: req.data._id,
      // day0: req.data.forecast.simpleforecast.forecastday[0].date.weekday_short,
      // tempHigh0: req.data.forecast.simpleforecast.forecastday[0].high.fahrenheit
    
      // day0: req.data.forecast.simpleforecast.forecastday[0].date.weekday_short,
      // timedate0: req.data.forecast.simpleforecast.forecastday[0].date.pretty,
      // tempHigh0: req.data.forecast.simpleforecast.forecastday[0].high.farenheit,
      // tempLow0: req.data.forecast.simpleforecast.forecastday[0].low.farenheit,
      // conditions0: req.data.forecast.simpleforecast.forecastday[0].conditions,
      // conditions_url0: req.data.forecast.simpleforecast.forecastday[0].icon_url,
      // avghum0: req.data.forecast.simpleforecast.forecastday[0].avehumidity,
      // pop0: req.data.forecast.simpleforecast.forecastday[0].pop,

      // day1: req.data.forecast.simpleforecast.forecastday[1].date.weekday_short,
      // timedate1: req.data.forecast.simpleforecast.forecastday[1].date.pretty,
      // tempHigh1: req.data.forecast.simpleforecast.forecastday[1].high.farenheit,
      // tempLow1: req.data.forecast.simpleforecast.forecastday[1].low.farenheit,
      // conditions1: req.data.forecast.simpleforecast.forecastday[1].conditions,
      // conditions_url1: req.data.forecast.simpleforecast.forecastday[1].icon_url,
      // avghum1: req.data.forecast.simpleforecast.forecastday[1].avehumidity,
      // pop1: req.data.forecast.simpleforecast.forecastday[1].pop

      // day0: req[0].date.weekday_short,
      // timedate0: req[0].date.pretty,
      // tempHigh0: req[0].high.farenheit,
      // tempLow0: req[0].low.farenheit,
      // conditions0: req[0].conditions,
      // conditions_url0: req[0].icon_url,
      // avghum0: req[0].avehumidity,
      // pop0: req[0].pop,

      // day1: req[1].date.weekday_short,
      // timedate1: req[1].date.pretty,
      // tempHigh1: req[1].high.farenheit,
      // tempLow1: req[1].low.farenheit,
      // conditions1: req[1].conditions,
      // conditions_url1: req[1].icon_url,
      // avghum1: req[1].avehumidity,
      // pop1: req[1].pop

    };
    console.log("In cityRestrController.js/create CityWateringRest: ", CityWateringRest);
    db.CityWateringRest
      .create(CityWateringRest)
      .then(dbCityWateringRest => res.json(dbCityWateringRest))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.CityWateringRest
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbCityWateringRest => res.json(dbCityWateringRest))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.CityWateringRest
      .findById({ _id: req.params.id })
      .then(dbCityWateringRest => dbCityWateringRest.remove())
      .then(dbCityWateringRest => res.json(dbCityWateringRest))
      .catch(err => res.status(422).json(err));
  },
  removeDB: function(req, res) {
    db.CityWateringRest
      .find()
      .remove()
      .then (dbCityWateringRest => console.log("In cityRestrController.js/removeDB"))
       // .db.CityWateringRest.drop()
      // .then (dbCityWateringRest => db.CityWateringRest.drop())
      .catch(err => res.status(422).json(err));
  }
};
