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
      className=" bg-purple-600  min-h-screen flex flex-col items-center opacity-0 transition-all duration-500"
    >
      <Header username={userData.username} />

      <MidDetails username={userData.username} length={userData.words.length} />

      <div className="w-5/6 flex-1 flex flex-col items-center bg-white rounded-lg p-3 mb-10 md:mb-2">
        <div className="w-full flex items-center justify-end border-b-2 border-gray-300 mb-2 pb-3">
          <input
            className=" max-w-full bg-transparent font-medium text-xl border-2 py-1 px-4 rounded-full border-gray-300 hover:border-purple-600 focus:border-purple-600 outline-none transition-all"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

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
