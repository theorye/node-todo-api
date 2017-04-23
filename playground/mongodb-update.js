// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');


var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to Mongodb server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectId('58fc04be435e9030fb30d4bd')
  }, {
    $set: {
      text: 'eat lunch'
    }
  }, {
    returnOriginal: false
  })
  .then(result => {
    console.log(result);
  })

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectId('58fc04be435e9030fb30d4bd')
  }, {
    $set: {
      text: 'eat lunch'
    }
    // $inc: {
    //   age: 1,
    // }
  }, {
    returnOriginal: false
  })
  .then(result => {
    console.log(result);
  })
  db.close();
})
