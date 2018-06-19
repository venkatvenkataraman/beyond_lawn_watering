console.log("In controllers/zoneDBController.js");
const db = require("../models");

// Defining CRUD methods for the WateringZone database in the zoneDBController
module.exports = {
  findAll: function(req, res) {
    db.WateringZone
      .find(req.query)
      .sort({zoneNumber: 1 })
      .then(dbWateringZone => res.json(dbWateringZone))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.WateringZone
      .findById(req.params.id)
      .then(dbWateringZone => res.json(dbWateringZone))
      .catch(err => res.status(422).json(err));
  },

  //FOLLOWING DOESN'T SEEM TO WORK
  findByZoneNumber: function(req, res) {
    console.log("In zoneDBController.js/findByZoneNumber");
    console.log("req.params: ", req.params);
    db.WateringZone
      .findOne({ zoneNumber: req.params.zoneNumber })
      .then(dbWateringZone => res.json(dbWateringZone))
      .catch(err => res.status(422).json(err));
  },

  // TO BE EXPANDED IN THE NEAR/DISTANT FUTURE
  create: function(req, res) {
    console.log("In zoneDBController.js/create req.data: ", req);
    const WateringZone = {

  // CODE SIMILAR TO BELOW FOR ZONE
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


    console.log("In zoneDBController.js/create WateringZone: ", WateringZone);
    db.WateringZone
      .create(WateringZone)
      .then(dbWateringZone => res.json(dbWateringZone))
      .catch(err => res.status(422).json(err));
  },


  update: function(req, res) {
    console.log("In zoneDBController.js/update (by id");
    console.log("req.params: ", req.params);
    db.WateringZone
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbWateringZone => res.json(dbWateringZone))
      .catch(err => res.status(422).json(err));
  },

  //FOLLOWING DOES NOT YET WORK; Anyway, looks like this needs to turn into req, res
  // updateZoneNumberWithImageURL: function(zoneNumber, imageURL) {
  //   console.log("In zoneDBController.js/updateZoneNumberWithImageURL");
  //   console.log("zoneNumber: ", zoneNumber, "imageURL: ", imageURL);
  //   db.WateringZone.update({"zoneNumber": zoneNumber}, {$set: {"zoneImage": imageURL}}, function(err, raw){
  //     if (err) { console.log("database call failed during update of zoneImage with error:", err)}
  //     else {console.log ("database call succeeded with zoneNumber, zoneImage and raw = ",zoneNumber, raw)}
  //   });
  // },

  remove: function(req, res) {
    db.WateringZone
      .findById({ _id: req.params.id })
      .then(dbWateringZone => dbWateringZone.remove())
      .then(dbWateringZone => res.json(dbWateringZone))
      .catch(err => res.status(422).json(err));
  },
  removeDB: function(req, res) {
    db.WateringZone
      .find()
      .remove()
      .then (dbWateringZone => console.log("In zoneDBController.js/removeDB"))
       // .db.WateringZone.drop()
      // .then (dbWateringZone => db.WateringZone.drop())
      .catch(err => res.status(422).json(err));
  }
};
