// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the 
// various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
	app.get('/dashboard', requireLogin, async (req, res) => {
		// const surveys = await Survey
		// 	.find({ _user: req.user.id })
		// 	.select({ recipients: false});

		// res.send(surveys);
	});
};
