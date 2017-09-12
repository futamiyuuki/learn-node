let db = require('./db');

exports.handleSignup = (email, password) => {
  db.saveUser({email, password});
};