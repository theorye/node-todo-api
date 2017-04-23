const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectId} = require('mongodb');
const {User} = require('./../server/models/user');


// Invalid Id
// var id = "58fcd7a938ec8a350f9dbb051";
// var id = "68fcd7a938ec8a350f9dbb05";
var id = '58fcb26b4f614a342ebae7c8';

// if(!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then(todo => {
//   console.log("todo", todo);
// })
//
// Todo.findById(id).then(todo=> {
//   if(!todo) {
//     return console.log('id not found')
//   }
//   console.log('todo by id', todo)
// }).catch( e=> console.log(e));

User.findById(id).then((user) => {
  if(!user) return console.log('unable to find user');

  console.log(JSON.stringify(user,undefined,2))
}, e => {
  console.log(e);
})
