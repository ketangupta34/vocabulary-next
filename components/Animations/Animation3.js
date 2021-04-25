import { useEffect, useState } from 'react';

export default function Animation3({ nextAnimation }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    console.log('Mounting 3');
    setTimeout(() => {
      setAnimate(true);
    }, 200);

    setTimeout(() => {
      document.querySelector('#buttonAnimate3').classList.remove('delay-500');
    }, 1200);
  }, []);

  const changePage = () => {
    console.log('unmounting 3');
    document.querySelector('#buttonAnimate3').classList.add('delay-500');
    setAnimate(false);
    setTimeout(() => {
      document.querySelector('#bgChange3').classList.remove('bg-white');
      document.querySelector('#bgChange3').classList.add('bg-purple-700');
    }, 900);
    setTimeout(() => {
      nextAnimation();
    }, 1200);
  };

  return (
    <div
      id="bgChange3"
      className="bg-white transition-all duration-300 w-screen h-screen flex justify-center items-center"
    >
      <div className="h-2/3 w-2/3 text-purple-600 flex justify-between flex-col">
        <div>
          <h1
            className={
              'text-8xl font-bold transition-all duration-500 delay-100' +
              (!animate
                ? ' transform translate-x-3 opacity-0'
                : ' transform translate-x-0 opacity-100')
            }
          >
            Start playing.
          </h1>
          <h1
            className={
              'text-8xl font-bold transition-all duration-500 delay-100' +
              (!animate
                ? ' transform translate-x-3 opacity-0'
                : ' transform translate-x-0 opacity-200')
            }
          >
            We’ll get to know you.
          </h1>

          <p
            className={
              'text-2xl mt-10 transition-all duration-500 delay-500' +
              (!animate
                ? ' transform -translate-x-10 opacity-0'
                : ' transform translate-x-0 opacity-300')
            }
          >
            As you play Vocabulated, we figure out which words you know and
            which ones you need a little help with. We keep practicing with you
            until you master the tough ones. Let us know which words you want to
            focus on, and we’ll prioritize those.
          </p>
        </div>
        <div className="flex justify-end">
          <button
            id="buttonAnimate3"
            onClick={changePage}
            className={
              'float-right border-3 border-purple-600 hover:bg-purple-600 text-purple-600 hover:text-white rounded-xl text-3xl focus:outline-none font-bold py-2 w-40 transition-all duration-200 delay-500 ' +
              (!animate ? ' opacity-0' : ' opacity-100')
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
