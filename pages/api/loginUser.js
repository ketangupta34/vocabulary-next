import { UserDB } from '../../mongodb.js';

export default async (request, response) => {
  console.log('Create User Called');

  const { username, password } = request.body;

  await UserDB.findOne({ username })
    .exec()
    .then((result) => {
      console.log(result);
      if (result) {
        if (result.password === password) {
          response.status(200).json({
            status: true,
            data: { username: result.username, email: result.email },
          });
        } else {
          response
            .status(200)
            .json({ status: false, data: { message: 'Wrong Password' } });
        }
      } else {
        response
          .status(200)
          .json({ status: false, data: { message: 'No user Exists!' } });
      }
    })
    .catch((e) => {
      console.log(e);
      response
        .status(200)
        .json({ status: false, data: { message: 'Error Occured!' } });
    });
};
