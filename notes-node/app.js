console.log('Starting App');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(notes.add(9, -2));

// const user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, err => {
//   if(err) console.error('Unable to write file!');
// });