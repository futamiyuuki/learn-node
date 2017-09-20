const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(result => console.log(result));

Todo.findByIdAndRemove('59c1f5a41b26ce05b30e2362').then(todo => {
  console.log(todo);
});