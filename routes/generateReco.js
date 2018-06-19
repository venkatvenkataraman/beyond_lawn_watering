console.log("In routes/generateReco.js");
const generateRecoController = require("../controllers/generateRecoController");
//dependencies
const passport = require('passport');

///////////////////////

module.exports = (app) => {

      // Matches with "/generateReco"
      app
      .route("/api/generateReco")
            .get(generateRecoController.generateZoneRecos);
}
