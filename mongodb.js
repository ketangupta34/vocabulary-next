import mongoose, { connect, connection, model } from 'mongoose';

const { MONGODB_URI } = process.env;

connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then((res) => {
    console.log('Mongodb connected');
  })
  .catch((e) => console.log(e));

const db = connection;
db.on('error', (e) => {
  console.log('Mongodb connection failed', e);
});
db.once('open', () => {
  console.log('mongoDB connection successful');
});

const { Schema } = mongoose;

const User = new Schema({
  username: { type: String, unique: true, required: true },
  email: String,
  password: String,
  words: [],
});

let UserDB;
try {
  UserDB = model('UserDB');
} catch (error) {
  UserDB = model('UserDB', User);
}

const _UserDB = UserDB;
export { _UserDB as UserDB };
