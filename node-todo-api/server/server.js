const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// const newTodo = new Todo({
//   text: ' Edit this video'
// });

// newTodo.save().then(doc => {
//   console.log('Saved todo', doc);
// }, err => {
//   console.log('Unable to save doc', err);
// });

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// const newUser = new User({
//   email: ''
// });

const newUser = new User({
  email: 'hubert.hsiung@gmail.com'
});

newUser.save().then(doc => {
  console.log('Saved user', doc);
}, err => {
  console.log('Unable to save doc', err);
});