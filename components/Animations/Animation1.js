import { useEffect, useState } from 'react';

export default function Animation1({ nextAnimation }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    console.log('Mounting 1');

    setAnimate(true);

    setTimeout(() => {
      document.querySelector('#buttonAnimate1').classList.remove('delay-700');
    }, 700);
  }, []);

  const changePage = () => {
    console.log('unmounting 1');
    document.querySelector('#buttonAnimate1').classList.add('delay-500');
    setAnimate(false);
    setTimeout(() => {
      document.querySelector('#bgChange1').classList.remove('bg-purple-700');
      document.querySelector('#bgChange1').classList.add('bg-black');
    }, 900);
    setTimeout(() => {
      nextAnimation();
    }, 1200);
  };

  return (
    <div
      id="bgChange1"
      className=" bg-purple-700 transition-all duration-300 w-screen h-screen flex justify-center items-center"
    >
      <div className="h-2/3 w-11/12 sm:w-10/12 lg:w-2/3 text-white flex justify-between flex-col">
        <div>
          <h1
            className={
              'text-5xl md:text-7xl font-bold transition-all duration-500 delay-100' +
              (!animate
                ? ' transform translate-x-3 opacity-0'
                : ' transform translate-x-0 opacity-100')
            }
          >
            The
          </h1>
          <h1
            className={
              'text-6xl sm:text-8xl md:text-9xl font-bold transition-all duration-500 delay-200' +
              (!animate
                ? ' transform translate-x-3 opacity-0'
                : ' transform translate-x-0 opacity-100')
            }
          >
            Vocabulary
          </h1>
          <h1
            className={
              'text-5xl md:text-7xl font-bold transition-all duration-500 delay-300' +
              (!animate
                ? ' transform translate-x-3 opacity-0'
                : ' transform translate-x-0 opacity-100')
            }
          >
            App
          </h1>

          <p
            className={
              'text-xl mt-20 transition-all duration-500 delay-500' +
              (!animate
                ? ' transform -translate-x-10 opacity-0'
                : ' transform translate-x-0 opacity-100')
            }
          >
            Look up a word, learn it forever.
          </p>
          <p
            className={
              'text-xl sm:text-2xl transition-all duration-500 delay-500' +
              (!animate
                ? ' transform translate-x-10 opacity-0'
                : ' transform translate-x-0 opacity-100')
            }
          >
            Get the lowdown on every word.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            id="buttonAnimate1"
            onClick={changePage}
            className={
              'float-right border-3 border-white hover:bg-white hover:text-purple-600 rounded-xl text-2xl md:text-3xl focus:outline-none font-bold py-2 w-40 transition-all duration-200 delay-700 ' +
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
