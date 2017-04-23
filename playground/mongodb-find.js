// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');


var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to Mongodb server');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  // db.collection('Todos').find({
  //   _id: new ObjectId("58fc0a4082c0e4b62fe36c75"),
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   // console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  })

  db.close();
})
