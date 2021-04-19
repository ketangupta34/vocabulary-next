export default function Animation2({ nextAnimation }) {
  return (
    <div className=" bg-black w-screen h-screen flex justify-center items-center">
      <div className="h-2/3 w-2/3 text-white flex justify-between flex-col">
        <div>
          <h1 className=" text-8xl font-bold">Don’t just memorize.</h1>
          <h1 className=" text-8xl font-bold">Achieve mastery.</h1>

          <p className="text-2xl mt-10">
            Ditch the flash cards and stop memorizing definitions.
            Vocabulated teaches you words by systematically exposing you to a
            wide array of question types and activities that will help you
            understand all the meanings and nuances of every word you’re
            learning.
          </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={nextAnimation}
            className="float-right border-4 border-white hover:bg-white hover:text-black rounded-xl text-3xl focus:outline-none font-bold py-3 w-36"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
