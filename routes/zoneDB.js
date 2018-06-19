console.log("In routes/zoneDB.js");
const zoneDBController = require("../controllers/zoneDBController");
//dependencies
const passport = require('passport');

///////////////////////

module.exports = (app) => {

      // Matches with "/api/zoneDB"
      app
      .route("/api/zoneDB")
            .get(zoneDBController.findAll)
            .post(zoneDBController.create)
            .delete(zoneDBController.removeDB);

      // Matches with "/api/zoneDB/:id"
      app
      .route("/api/zoneDB/:id")
                 .get(zoneDBController.findById)
                 .put(zoneDBController.update)
                 .delete(zoneDBController.remove);
     

      //FOLLOWING DOESN"T SEEM TO WORK may need to be moved up
      //for route matching - see 
      // https://stackoverflow.com/questions/17735610/node-js-express-route-naming-and-ordering-how-is-precedence-determined
      // Matches with "/api/zoneDB/:zoneNumber"
      // app
      // .route("/api/zoneDB/:zoneNumber")
            // .get(zoneDBController.findByZoneNumber)
            // .put(zoneDBController.updateZoneNumberWithImageURL)
            // .delete(zoneDBController.remove);

}
