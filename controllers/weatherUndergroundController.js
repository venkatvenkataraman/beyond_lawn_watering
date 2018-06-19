console.log("In controllers/weatherUndergroundController.js");
const axios = require("axios");
const db = require("../models");
const keys = require('./../config/keys');

// BELOW IS A TEST
// const weatherDBController = require("./weatherDBController");

// Defining methods for the weatherUndergroundController

// getWeatherForecast gets a 3-day forecast from Weather Underground API
module.exports = {
  getWeatherForecast: function(req, res) {
    const api_key = keys.wuAPIkey;
    //3-day forecast
    // const api_command = "http://api.wunderground.com/api/"+api_key+"/forecast/q/TX/Austin.json";
    //10-day forecast
    const api_command = "http://api.wunderground.com/api/"+api_key+"/forecast10day/q/TX/Austin.json"; 
    console.log("In weatherUndergroundController.js");
    // console.log(db);
    axios
         .get(api_command)
        //  .get("http://api.wunderground.com/api/90823d1fb375d595/forecast/q/TX/Austin.json")
         .then(response => {
            //  console.log(response.data.forecast.simpleforecast.forecastday[0].date.weekday_short, response.data.forecast.simpleforecast.forecastday[0].date.pretty, "Farenheit: ", response.data.forecast.simpleforecast.forecastday[0].high.fahrenheit, "\n",
            //  response.data.forecast.simpleforecast.forecastday[1].date.weekday_short, response.data.forecast.simpleforecast.forecastday[1].date.pretty, "Farenheit: ", response.data.forecast.simpleforecast.forecastday[1].high.fahrenheit);
             var alteredResponse = [];
             for (let index = 0; index < response.data.forecast.simpleforecast.forecastday.length; index++) {
               alteredResponse[index] = {
                                                   epoch:  response.data.forecast.simpleforecast.forecastday[index].date.epoch,     
                                                     day:  response.data.forecast.simpleforecast.forecastday[index].date.weekday_short,
                                                timeDate:  response.data.forecast.simpleforecast.forecastday[index].date.pretty,
                                                tempHigh:  response.data.forecast.simpleforecast.forecastday[index].high.fahrenheit,
                                                 tempLow:  response.data.forecast.simpleforecast.forecastday[index].low.fahrenheit,
                                              conditions:  response.data.forecast.simpleforecast.forecastday[index].conditions,
                                              // <img src="http://icons.wxug.com/i/c/k/clear.gif" alt=""/>
                                              // <img src="http://icons.wxug.com/i/c/k/cloudy.gif" alt=""/>
                                          //  conditionsURL:  '<img src="'+response.data.forecast.simpleforecast.forecastday[index].icon_url+'" alt=""/>',
                                           conditionsURL:  response.data.forecast.simpleforecast.forecastday[index].icon_url,
                                                  avgHum:  response.data.forecast.simpleforecast.forecastday[index].avehumidity,
                                                     pop:  response.data.forecast.simpleforecast.forecastday[index].pop
                                          };
             } //for
            console.log("____________alteredResponse____________");
            console.log(alteredResponse);
            console.log("____________alteredResponse____________");
            db.WeatherFC.create(alteredResponse); //.data.forecast.simpleforecast.forecastday 
          }) //.then
    } //getWeatherForecast
} //module.exports

// EXCESS TEST CODE BELOW
            // weatherDBController.create(alteredResponse, res);
    
            // db.WeatherFC
            //   // .find()
            //   .create(response.data.forecast);

              // .then(dbWeather =>
              //   response.data.response.docs.filter(weather =>
              //     dbWeathers.every(
              //       dbWeather => dbWeather._id.toString() !== article._id
              //     )
              //   )
              // )
              // .then(weathers => res.json(weathers))
              // .catch(err => res.status(422).json(err));

            // console.log("In weatherController.js/getWeatherForecast - Weather Forecast Data:", response.data.forecast);
            // return response;       

