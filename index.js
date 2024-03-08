const mongoose = require('mongoose');
const users = require('./models/Users');
const notes = require('./models/Notes');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/notes');

  const user = await users.create({name: 'Boris Yarov', email: 'example@gmail.com', data_created: Date.now()});

  const note = await notes.create({user_id: user._id, title: 'Comlite the PR', description: 'I must upload my project on github'});

  await note.deleteOne();

  await user.replaceOne({...user.toObject(), name: 'Boris Borov'});

  users.find({name: 'Boris Borov'}).then((res) => console.log(res));
}