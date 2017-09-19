const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '59c0f0667945c241837db468';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then(todo => {
//   if(!todo) return console.log('Id not found');
//   console.log('Todo By Id', todo);
// }).catch(err => console.log(err));

User.findById('59c0869854da6f375576cf28').then(user => {
  if(!user) return console.log('Id not found');
  console.log(JSON.stringify(user,undefined,2));
}).catch(err => console.log(err));