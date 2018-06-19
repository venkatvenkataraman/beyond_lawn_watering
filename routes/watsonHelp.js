console.log("In routes/watsonHelp.js");
const watsonHelpController = require("../controllers/watsonHelpController");
//dependencies
const passport = require('passport');

///////////////////////

module.exports = (app) => {

      // Matches with "/watsonHelp"
      app
      .route("/api/watsonHelp")
            .get(watsonHelpController.classifyAndUpdateZoneStatuses);
}
