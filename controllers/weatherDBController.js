console.log("In controllers/weatherDBController.js");
const db = require("../models");

// Defining CRUD methods for the WeatherFC database in the weatherDBController
module.exports = {
  findAll: function(req, res) {
    db.WeatherFC
      .find(req.query)
      .sort({epoch: 1 })
      .then(dbWeatherFC => res.json(dbWeatherFC))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.WeatherFC
      .findById(req.params.id)
      .then(dbWeatherFC => res.json(dbWeatherFC))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("In weatherDBController.js/create req.data: ", req);
    const WeatherFC = {
      // _id: req.data._id,
      day0: req.data.forecast.simpleforecast.forecastday[0].date.weekday_short,
      tempHigh0: req.data.forecast.simpleforecast.forecastday[0].high.fahrenheit
    
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
    console.log("In weatherDBController.js/create WeatherFC: ", WeatherFC);
    db.WeatherFC
      .create(WeatherFC)
      .then(dbWeatherFC => res.json(dbWeatherFC))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.WeatherFC
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbWeatherFC => res.json(dbWeatherFC))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.WeatherFC
      .findById({ _id: req.params.id })
      .then(dbWeatherFC => dbWeatherFC.remove())
      .then(dbWeatherFC => res.json(dbWeatherFC))
      .catch(err => res.status(422).json(err));
  },
  removeDB: function(req, res) {
    db.WeatherFC
      .find()
      .remove()
      .then (dbWeatherFC => console.log("In weatherDBController.js/removeDB"))
       // .db.WeatherFC.drop()
      // .then (dbWeatherFC => db.WeatherFC.drop())
      .catch(err => res.status(422).json(err));
  }
};
