//passport user authentication

//dependencies
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;

const mongoose = require('mongoose');
const keys = require('./../config/keys');

//mongoDB user import
const User = mongoose.model('User');

passport.serializeUser((user, done) => {
	done(null, user.id);
})

passport.deserializeUser((id, done) => {
	User
		.findById(id)
		.then(user => {
			done(null, user);
		});
});

//google passport authentication
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		}, 
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id })				
			if (existingUser) {
				//login to existing account
				return done(null, existingUser);
			}

			//create new account
			const user = await new User({
				googleId: profile.id,
				userEmail: profile.emails[0].value,
				name: {"firstName" : profile.name.givenName, "lastName" : profile.name.familyName}
			}).save();
			done(null, user);
		}
	)
);

