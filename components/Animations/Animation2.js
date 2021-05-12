import { useEffect, useState } from 'react';

export default function Animation2({ nextAnimation }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    console.log('Mounting 2');
    setTimeout(() => {
      setAnimate(true);
    }, 200);

    setTimeout(() => {
      document.querySelector('#buttonAnimate2').classList.remove('delay-500');
    }, 1200);
  }, []);

  const changePage = () => {
    console.log('unmounting 2');
    document.querySelector('#buttonAnimate2').classList.add('delay-500');
    setAnimate(false);
    setTimeout(() => {
      document.querySelector('#bgChange2').classList.remove('bg-black');
      document.querySelector('#bgChange2').classList.add('bg-white');
    }, 900);
    setTimeout(() => {
      nextAnimation();
    }, 1200);
  };

  return (
    <div
      id="bgChange2"
      className=" bg-black transition-all duration-300 w-screen h-screen flex justify-center items-center"
    >
      <div className="h-4/5 md:h-2/3 w-11/12 sm:w-10/12 lg:w-2/3 text-white flex justify-between flex-col">
        <div>
          <h1
            className={
              'text-4xl md:text-7xl font-bold transition-all duration-500 delay-100' +
              (!animate
                ? ' transform translate-x-3 opacity-0'
                : ' transform translate-x-0 opacity-100')
            }
          >
            Don’t just memorize.
          </h1>
          <h1
            className={
              'text-4xl md:text-7xl mt-5 font-bold transition-all duration-500 delay-100' +
              (!animate
                ? ' transform translate-x-3 opacity-0'
                : ' transform translate-x-0 opacity-200')
            }
          >
            Achieve mastery.
          </h1>

          <p
            className={
              'text-lg mt-20 transition-all duration-500 delay-500' +
              (!animate
                ? ' transform -translate-x-10 opacity-0'
                : ' transform translate-x-0 opacity-300')
            }
          >
            Vocabulated teaches you words by systematically exposing you to a wide array of
            question types and activities that will help you understand all the
            meanings and nuances of every word you’re learning.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            id="buttonAnimate2"
            onClick={changePage}
            className={
              'float-right border-3 border-white hover:bg-white hover:text-black rounded-xl text-2xl md:text-3xl focus:outline-none font-bold py-2 w-40 transition-all duration-200 delay-500 ' +
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
