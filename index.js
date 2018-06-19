//root file from which all other files spring//

//dependencies
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;

const keys = require('./config/keys');
require('./models/user.js');
// require('./models/Survey');
require('./services/passport');

//turning on app
const app = express();

app.use(morgan('dev'));

// Configure body parser for AJAX requests
//setting up bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//setting up cookies
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,	//Formula for turning 30 days into milliseconds
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

//routes
require('./routes/authRoutes')(app);	//user authentication
require('./routes/weatherDB')(app);	//weather DB routes
require('./routes/weatherUnderground')(app);	//DB routes
require('./routes/zoneDB')(app);	//zone DB routes
require('./routes/cityRestr')(app);	//city Restriction routes
require('./routes/watsonHelp')(app);	//watson api route
require('./routes/generateReco')(app);	//watson api route

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

//starting up server
app.listen(PORT, () => {
	console.log(`Now listening on port ${PORT}`);
});




// Here's a little custom error handling middleware
// that logs the error to console, then renders an
// error page describing the error.
app.use((error, req, res, next) => {
	console.error(error);
	res.json({
	  error
	})
  });
  
  // Set up promises with mongoose
  mongoose.Promise = global.Promise;
  // Connect to the Mongo DB
  mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/LawnWateringAdvisorDB"
	// WARNING: The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
	// ,
	// {
	//   useMongoClient: true
	// }
  );
  
  var dbase = mongoose.connection;
  
  //show any mongoose errors
  dbase.on('error', function(err){
	console.log("Mongoose Error: ", err);
  });
  
  //once logged in to the db through mongoose, log a success message
  dbase.once("open", function() {
	console.log("Mongoose connection successful.");
  });
  