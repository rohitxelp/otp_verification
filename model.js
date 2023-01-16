const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  DEVICEID: {
    type: String,
    required: false,
  },
  
  created: {
    type: String,
    default: new Date().toISOString(),
  },
 
  
  otp: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);