const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) return console.log('Unable to connect to MongoDB server');
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59b9de0ce1efb18559600607')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(result => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59b8d6de0803760c6edb356b')
  }, {
    $inc: {
      age: 1
    },
    $set: {
      name: 'Dahyun'
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result);
  })

  // db.close();
});