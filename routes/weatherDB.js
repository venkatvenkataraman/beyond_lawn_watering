console.log("In routes/weatherDB.js");
// const router = require("express").Router();
const weatherDBController = require("../controllers/weatherDBController");
//dependencies
const passport = require('passport');

///////////////////////

module.exports = (app) => {

      // Matches with "/weatherDB"
      app
      .route("/api/weatherDB")
            .get(weatherDBController.findAll)
            .post(weatherDBController.create)
            .delete(weatherDBController.removeDB);

      // Matches with "/weatherDB/:id"
      app
      .route("/api/weatherDB:id")
            .get(weatherDBController.findById)
            .put(weatherDBController.update)
            .delete(weatherDBController.remove);

}

//LEARNING:
//DON'T THINK I NEED BELOW OR ANY OTHER DEFINITIONS LIKE THESE!!
//JUST NEED THE ".delete" definition for route("/") above.
// Matches with "/api/weatherDB/deleteDB"
// router
//   .route("/deleteDB")
      //BELOW TWO  does not work.
      // .then (response => {console.log("In routes/api/weatherDB.js")})
      // .delete(weatherDBController.removeDB);
  

// module.exports = router;