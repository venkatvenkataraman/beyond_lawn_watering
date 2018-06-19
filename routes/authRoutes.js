//authentication routes//

//dependencies
const passport = require('passport');

////////////////////

module.exports = (app) => {

	//google authentication

	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
	}));

	// app.get('/auth/google/callback', passport.authenticate('google', {successRedirect: '/surveys', failureRedirect: '/'}));
	app.get('/auth/google/callback', passport.authenticate('google', {successRedirect: '/Dashboard', failureRedirect: '/'}));


	//user profile
	
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

	//user logout

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	})
};