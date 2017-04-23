// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');


var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to Mongodb server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(result => {
  //   console.log(result);
  // })
  // deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Eath lunch'
  // }).then(result => {console.log(result)});
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result => {
  //   console.log(result);
  // }))

  // db.collection('Users').deleteMany({name: 'Andrew'});
  // db.collection('Users').findOneAndDelete({_id: new ObjectId("")})
  db.close();
})
