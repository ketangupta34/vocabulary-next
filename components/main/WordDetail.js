import { useState } from 'react';
import Image from 'next/image';

export default function WordDetail({
  username,
  word,
  defination,
  refreshData,
}) {
  const [wordDetailsOpen, setWordDetailsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteWordForUser = async () => {
    setLoading(true);

    await fetch('/api/user/deleteWord', {
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
        setWordDetailsOpen(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="w-full">
      <div
        onClick={() => setWordDetailsOpen(!wordDetailsOpen)}
        className="w-full bg-gray-200 mb-3 p-3 rounded-lg shadow-sm cursor-pointer"
      >
        <h2 className="font-bold text-2xl">{word}</h2>
        <p className="text-lg">{defination}</p>
      </div>

      {wordDetailsOpen && (
        <div className=" absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
          <div className="w-1/3 h-2/3 bg-white rounded-lg p-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <h2 className="font-bold text-4xl">{word}</h2>
              <p
                onClick={() => setWordDetailsOpen(!wordDetailsOpen)}
                className="cursor-pointer text-xl"
              >
                &#10006;
              </p>
            </div>

            <p className="text-2xl">{defination}</p>

            <div className="flex justify-center items-center">
              <button
                disabled={loading}
                onClick={deleteWordForUser}
                className="font-semibold text-2xl py-2 w-40 rounded-lg border-4 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white  "
              >
                {loading ? (
                  <Image src="/loading.gif" width={30} height={30} />
                ) : (
                  'Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
