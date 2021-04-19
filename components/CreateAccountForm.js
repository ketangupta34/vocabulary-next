import React from 'react';
import { useRouter } from 'next/router';

function CreateAccountForm({ createAccountButton }) {
  const router = useRouter();

  const createNewAccount = async (e) => {
    e.preventDefault();
    const username = document.querySelector('#newAccUsername').value;
    const email = document.querySelector('#newAccEmail').value;
    const password = document.querySelector('#newAccPassword').value;
    const comparePassword = document.querySelector('#newAccComparePassword')
      .value;

    const body = {
      username,
      email,
      password,
      comparePassword,
    };

    console.log('New Account', body);

    await fetch('/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status) {
          router.push(`/${res.data.username}`);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex justify-between items-center flex-col w-2/3 h-2/3 text-white">
      <div className="w-full">
        <h1 className="font-bold text-4xl">Create a new Account</h1>
        <h1 className="font-bold text-6xl">To start Vocabulated</h1>
      </div>

      <form
        onSubmit={(e) => createNewAccount(e)}
        className="flex flex-col justify-center my-10 w-96"
      >
        <input
          id="newAccUsername"
          className="bg-transparent border-b-4 py-3 font-semibold text-3xl focus:outline-none mb-4"
          type="text"
          placeholder="UserName"
        />
        <input
          id="newAccEmail"
          className="bg-transparent border-b-4 py-3 font-semibold text-3xl focus:outline-none mb-4"
          type="text"
          placeholder="Email"
        />
        <input
          id="newAccPassword"
          className="bg-transparent border-b-4 py-3 font-semibold text-3xl focus:outline-none mb-4"
          type="password"
          placeholder="Password"
        />
        <input
          id="newAccComparePassword"
          className="bg-transparent border-b-4 py-3 font-semibold text-3xl focus:outline-none mb-7"
          type="password"
          placeholder="Confirm Password"
        />
        <button
          className=" border-white border-4 font-bold text-2xl py-2 focus:outline-none hover:bg-white hover:text-purple-600 "
          type="submit"
        >
          Create Account
        </button>
      </form>

      <div className="w-96 flex items-center">
        <span className="flex-1 h-1 bg-white"></span>
        <p className="text-lg mx-2">or</p>
        <span className="flex-1 h-1 bg-white"></span>
      </div>

      <button
        onClick={createAccountButton}
        className=" border-white border-4 font-bold text-2xl py-2 w-96 mt-6 focus:outline-none hover:bg-white hover:text-purple-600 "
      >
        Sign In
      </button>
    </div>
  );
}

export default CreateAccountForm;
