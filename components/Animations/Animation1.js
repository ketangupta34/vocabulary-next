export default function Animation1({ nextAnimation }) {
  return (
    <div className=" bg-purple-700 w-screen h-screen flex justify-center items-center">
      <div className="h-2/3 w-2/3 text-white flex justify-between flex-col">
        <div>
          <h1 className=" text-9xl font-bold">The</h1>
          <h1 className=" text-9xl font-bold">Vocabulary</h1>
          <h1 className=" text-9xl font-bold">App</h1>

          <p className="text-4xl mt-10">Look up a word, learn it forever.</p>
          <p className="text-3xl">Get the lowdown on every word.</p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={nextAnimation}
            className="float-right border-4 border-white hover:bg-white hover:text-purple-600 rounded-xl text-3xl focus:outline-none font-bold py-3 w-36"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
