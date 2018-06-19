console.log("In routes/cityRestr.js");
const cityRestrController = require("../controllers/cityRestrController");
//dependencies
const passport = require('passport');

///////////////////////

module.exports = (app) => {

      // Matches with "/cityDB"
      app
      .route("/api/cityRestr")
            .get(cityRestrController.findAll)
            .post(cityRestrController.create)
            .delete(cityRestrController.removeDB);

}
