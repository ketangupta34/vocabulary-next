import { useEffect } from 'react';
export default function MidDetails({ username, length }) {
  useEffect(() => {
    document.querySelector('#progressBar').style.width = `${length}%`;
  }, [length]);

  return (
    <div className="w-5/6 flex flex-col lg:flex-row items-center mb-4">
      <div className="flex-1 h-40 w-full flex flex-col justify-between rounded-lg bg-white p-3 lg:mr-2">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl md:text-2xl">
            Good Afternoon, {username}!
          </h1>
          <p className="font-semibold text-xl md:text-2xl text-purple-600">
            Level 1
          </p>
        </div>

        <h1 className="text-gray-300 w-full text-center text-2xl md:text-4xl my-5 md:my-0 font-bold">
          Keep Adding More Words!
        </h1>
        <div>
          <p className="text-lg  text-gray-500">
            Your progress for today!{' '}
            <span className="font-bold">{length}/100 Words</span>
          </p>
          <div className="w-full bg-white h-4 border-2 border-purple-600 rounded-full">
            <div
              id="progressBar"
              className="bg-purple-600 h-full w-40 rounded-l-full"
            ></div>
          </div>
        </div>
      </div>

      <div className="flex-1 h-40 w-full flex flex-col justify-between rounded-lg bg-white p-3 mt-4 lg:mt-0 lg:ml-2">
        <div>
          <h1 className="text-xl font-medium text-gray-500">
            New word for today!
          </h1>
          <h2 className="text-2xl py-5 md:py-0 font-semibold">THISAWORD</h2>
        </div>
        <div className="flex w-full justify-around">
          <button className="border-2 border-black text-xl font-semibold py-2 w-32 rounded hover:bg-black hover:text-white">
            Explore
          </button>
          <button className="border-2 border-black text-xl font-semibold py-2 w-32 rounded hover:bg-black hover:text-white">
            New Word
          </button>
        </div>
      </div>
    </div>
  );
}
