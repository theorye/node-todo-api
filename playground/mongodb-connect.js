// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to Mongodb server');

  // db.collection('Todos').insertOne({
  //
  // }, (err, results) => {
  //   if(err) {
  //     return console.log('Unable to insert to do', err)
  //   }
  //
  //   console.log(JSON.stringify(results.ops, undefined, 2));
  // });

  // Insert new Doc into users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Andrew',
  //   age: 25,
  //   location: 'Philadelphia',
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
})
