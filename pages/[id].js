import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/main/Header';
import MidDetails from '../components/main/MidDetails';
import WordDetail from '../components/main/WordDetail';
import AddWord from '../components/main/AddWord';

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    document.querySelector('#mainPage').classList.remove('opacity-0');
    document.querySelector('#mainPage').classList.add('opacity-100');
  }, []);

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    words: [],
  });
  const [searchTerm, setSearchTerm] = useState('');

  const getData = async () => {
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
            words: res.data.words,
          });
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log(id);
    getData();
  }, [id]);

  return (
    <div
      id="mainPage"
      className="bg-purple-600 w-screen min-h-screen flex flex-col items-center opacity-0 transition-all font-sans duration-500"
    >
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
                  username={userData.username}
                  word={data.word}
                  defination={data.defination}
                  refreshData={getData}
                />
              ))}
          </div>
        )}

        <AddWord username={userData.username} refreshData={getData} />
      </div>
    </div>
  );
}
