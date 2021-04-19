export default function Animation3({ nextAnimation }) {
  return (
    <div className=" bg-white w-screen h-screen flex justify-center items-center">
      <div className="h-2/3 w-2/3 text-purple-600 flex justify-between flex-col">
        <div>
          <h1 className=" text-8xl font-bold">Start playing.</h1>
          <h1 className=" text-8xl font-bold">We’ll get to know you.</h1>

          <p className="text-2xl mt-10">
            As you play Vocabulated, we figure out which words you know and
            which ones you need a little help with. We keep practicing with you
            until you master the tough ones. Let us know which words you want to
            focus on, and we’ll prioritize those.
          </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={nextAnimation}
            className="float-right border-4 border-purple-600 hover:bg-purple-600 hover:text-white rounded-xl text-3xl focus:outline-none font-bold py-3 w-36"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
