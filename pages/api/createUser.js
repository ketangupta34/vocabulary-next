import { UserDB } from '../../mongodb.js';

export default async (request, response) => {
  console.log('Create User Called');

  const { username, email, password } = request.body;

  const data = {
    username,
    email,
    password,
  };

  await UserDB.findOneAndUpdate({ username }, data, {
    new: true,
    upsert: true,
  })
    .exec()
    .then((result) => {
      console.log(result);
      response.status(200).json({ status: true, data: { username, email } });
    })
    .catch((e) => {
      console.log(e);
      response.status(200).json({ status: false, data: { error: e } });
    });
};
