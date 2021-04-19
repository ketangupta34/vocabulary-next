import { useState } from 'react';
import Image from 'next/image';

export default function AddWord({ username, refreshData }) {
  const [wordAdder, setwordAdder] = useState(false);
  const [loading, setLoading] = useState(false);

  const addWordToDatabase = async () => {
    setLoading(true);
    const word = document.querySelector('#wordInput').value;
    console.log(word);

    await fetch('/api/user/addWord', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, word: word }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        refreshData();
        setLoading(false);
        setwordAdder(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div
        className=" fixed bottom-10 right-56 bg-purple-600 rounded-full w-20 h-20 flex justify-center items-center z-10 cursor-pointer"
        onClick={() => setwordAdder(!wordAdder)}
      >
        <p className="text-white text-3xl">&#10010;</p>
      </div>

      {wordAdder && (
        <div className=" absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
          <div className="w-1/3 h-1/3 bg-white rounded-lg p-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <h2 className="font-bold text-4xl">Add Word</h2>
              <p
                onClick={() => setwordAdder(!wordAdder)}
                className="cursor-pointer text-xl"
              >
                &#10006;
              </p>
            </div>

            <input
              type="text"
              id="wordInput"
              placeholder="word"
              className="text-3xl border-b-4 border-purple-400 hover:border-purple-600 focus:outline-none"
            />

            <div className="flex justify-center items-center">
              <button
                disabled={loading}
                onClick={addWordToDatabase}
                className="font-semibold text-2xl py-2 w-40 rounded-lg border-4 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white  "
              >
                {loading ? (
                  <Image src="/loading.gif" width={25} height={25} />
                ) : (
                  'Add'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
