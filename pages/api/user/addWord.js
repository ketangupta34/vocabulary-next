import { UserDB } from '../../../mongodb.js';

export default async (request, response) => {
  console.log('Adding word');
  const { username, word } = request.body;
  const { APP_ID, APP_KEY } = process.env;

  var wordsData;
  await fetch(
    `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}`,
    {
      method: 'GET',
      headers: {
        app_id: APP_ID,
        app_key: APP_KEY,
      },
      params: {
        fields: 'definitions',
        strictMatch: 'false',
      },
    },
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res.id);
      wordsData = {
        word: res.id,
        defination:
          res.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0],
      };

      console.log(wordsData);
    })
    .catch((e) => console.log('ERROR', e));

  await UserDB.findOne({ username })
    .exec()
    .then(async (result) => {
      if (result) {
        result.words = [
          ...result.words,
          { word: wordsData.word, defination: wordsData.defination },
        ];

        await result.save().then((res) => {
          console.log(res);
          response.status(200).json({ status: true });
        });
      }
    })
    .catch((e) => {
      console.log(e);
      response
        .status(200)
        .json({ status: false, data: { message: 'Error Occured!' } });
    });
};
