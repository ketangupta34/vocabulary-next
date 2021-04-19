export default function MidDetails({ username, length }) {
  return (
    <div className="w-5/6 h-40 flex items-center mb-5">
      <div className="flex-1 h-full flex flex-col justify-between rounded-lg bg-white p-3 mr-2">
        <h1 className="font-semibold text-3xl">Good Afternoon, {username}!</h1>

        <h1 className="text-gray-300 w-full text-center text-4xl font-bold">
          Keep Adding More Words!
        </h1>
        <div>
          <p className="text-lg  text-gray-500">
            Your progress for today!{' '}
            <span className="font-bold">{length}/100 Words</span>
          </p>
          <div className="w-full bg-white h-4 border-2 border-purple-600 rounded-full">
            <div className="bg-purple-600 h-full w-40 rounded-l-full"></div>
          </div>
        </div>
      </div>

      <div className="flex-1 h-full flex flex-col justify-between rounded-lg bg-white p-3 ml-2">
        <div>
          <h1 className="text-xl font-medium text-gray-500">
            New word for today!
          </h1>
          <h2 className="text-2xl font-semibold">THISAWORD</h2>
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
