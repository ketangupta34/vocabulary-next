import { UserDB } from '../../mongodb.js';

export default async (request, response) => {
  console.log('Getting User Data');

  const { username } = request.body;

  await UserDB.findOne({ username })
    .exec()
    .then((result) => {
      console.log(result);
      if (result) {
        response.status(200).json({
          status: true,
          data: {
            username: result.username,
            email: result.email,
            words: result.words,
          },
        });
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
