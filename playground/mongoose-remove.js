const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectId} = require('mongodb');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// })

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('58fd124d82c0e4b62fe3a7b5').then(todo => {
  console.log(todo);
});
