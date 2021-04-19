import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/main/Header';
import MidDetails from '../components/main/MidDetails';
import WordDetail from '../components/main/WordDetail';
import AddWord from '../components/main/AddWord';

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    words: [],
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(async () => {
    console.log(id);

    await fetch('/api/getUserData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: id }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status) {
          setUserData({
            username: res.data.username,
            email: res.data.email,
            words: [
              {
                word: 'Ketan',
                defination: 'doibfovnsfo',
              },
              {
                word: 'Ketan',
                defination: 'doibfovnsfo',
              },
              {
                word: 'Ketan',
                defination: 'doibfovnsfo',
              },
            ],
          });
        }
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="bg-purple-600 w-screen min-h-screen flex flex-col items-center">
      <Header setSearchTerm={setSearchTerm} />

      <MidDetails username={userData.username} length={userData.words.length} />

      <div className="w-5/6 flex-1 flex flex-col items-center bg-white rounded-lg p-3">
        {userData.words.length === 0 ? (
          <div className="w-full flex-1 flex justify-center items-center">
            <h1>Start Adding New Words</h1>
          </div>
        ) : (
          <div className="w-full">
            {userData.words
              .filter((val) => {
                if (searchTerm === '') {
                  return val;
                } else if (
                  val.word.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((data, index) => (
                <WordDetail
                  key={index}
                  word={data.word}
                  defination={data.defination}
                  // update={updateList}
                />
              ))}
          </div>
        )}

        <AddWord />
      </div>
    </div>
  );
}
