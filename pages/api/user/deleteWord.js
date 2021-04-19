import { UserDB } from '../../../mongodb.js';

export default async (request, response) => {
  console.log('Deleting word');
  const { username, word } = request.body;

  await UserDB.findOne({ username })
    .exec()
    .then(async (result) => {
      result.words = result.words.filter((cur) => cur.word !== word);

      await result.save().then((res) => {
        console.log(res);
        response.status(200).json({ status: true });
      });
    })
    .catch((e) => {
      console.log(e);
      response
        .status(200)
        .json({ status: false, data: { message: 'Error Occured!' } });
    });
};
