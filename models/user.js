const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: {type: String, required: true, unique: true},
  userEmail: Schema.Types.Mixed,
  name: Schema.Types.Mixed,
  homeAddress: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;