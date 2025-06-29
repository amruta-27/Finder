const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  gender: String,
  birthDate: Date
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
