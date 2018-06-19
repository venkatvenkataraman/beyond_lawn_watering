//prod.js - production keys

module.exports = {
	//google info
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

	//weather_underground info
	wuAPIkey: process.env.WU_API_KEY,

	//watson info
	watsonAPIkey: process.env.WATSON_API_KEY,
	watsonVersion: process.env.WATSON_VERSION,
	
	//mongo info
	mongoURI: process.env.MONGO_URI,

	//cookie info
	cookieKey: process.env.COOKIE_KEY,

	//domain info
	redirectDomain: process.env.REDIRECT_DOMAIN
}