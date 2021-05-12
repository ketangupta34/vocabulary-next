import { useRef, useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header({ props, username }) {
  const router = useRouter();
  const myRef = useRef(null);

  const [userMenu, setUserMenu] = useState(false);

  useEffect(() => {
    const menu = document.querySelector('#userMenu');
    if (menu) {
      if (userMenu) menu.classList.remove('hidden');
      else menu.classList.add('hidden');
    }
  }, [userMenu]);

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setUserMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const openMenu = () => {
    setUserMenu(!userMenu);
  };

  const logUserOut = () => {
    router.push('/');
  };

  return (
    <div className="w-10/12 h-28 md:h-36 flex justify-between items-center">
      <h1 className="text-white text-4xl font-medium font-sans">
        <span className="text-5xl font-bold">V</span>ocabulated
      </h1>

      <div ref={myRef} className="inline-block relative">
        <Image
          src="/user.svg"
          width={40}
          height={40}
          className="cursor-pointer"
          onClick={openMenu}
        />
        <div
          id="userMenu"
          className="w-72 transition-all absolute top-full right-0 mr-2 bg-white rounded-md shadow-lg border-2 border-purple-600"
        >
          <ul>
            <li className="text-center text-2xl border-b-2 border-gray-300 py-3">
              {username}
            </li>
            <li className="flex justify-center">
              <button
                onClick={logUserOut}
                className="text-xl font-semibold text-red-600 py-3 focus:outline-none"
              >
                LOGOUT
              </button>
            </li>
          </ul>
        </div>
        <menu></menu>
      </div>
    </div>
  );
}
