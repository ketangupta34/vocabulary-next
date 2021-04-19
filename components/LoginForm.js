import { useState } from 'react';
import { useRouter } from 'next/router';

function LoginForm({ createAccountButton }) {
  const router = useRouter();

  const [error, setErrorState] = useState('');
  const setError = (error) => {
    setErrorState(error);
    setTimeout(() => {
      setErrorState('');
    }, 2500);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const username = document.querySelector('#loginUsername').value;
    const password = document.querySelector('#loginPassword').value;

    if (username.length === 0) {
      setError('Add Username');
      return;
    }
    if (password.length === 0) {
      setError('Add Password');
      return;
    }

    const body = {
      username,
      password,
    };

    console.log('Login User', body);

    await fetch('/api/loginUser', {
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
        } else {
          setError(`${res.data.message}`);
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="flex justify-between items-center flex-col w-2/3 h-2/3 text-white">
      <div className="w-full">
        <h1 className="font-bold text-4xl">Sign In to</h1>
        <h1 className="font-bold text-7xl">Vocabulated</h1>
      </div>

      <form
        onSubmit={(e) => loginUser(e)}
        className="flex flex-col justify-center my-10 w-96"
      >
        <input
          id="loginUsername"
          className="bg-transparent border-b-4 py-3 font-semibold text-3xl focus:outline-none"
          type="text"
          placeholder="UserName"
        />
        <input
          id="loginPassword"
          className="bg-transparent border-b-4 py-3 font-semibold text-3xl focus:outline-none my-7"
          type="password"
          placeholder="Password"
        />
        <button
          className=" border-white border-4 font-bold text-2xl py-2 focus:outline-none hover:bg-white hover:text-purple-600 "
          type="submit"
        >
          Login
        </button>

        <p className="cursor-pointer font-semibold text-lg opacity-80 hover:opacity-100 mt-2">
          forgot Password?
        </p>
        <p className="w-full text-center text-red-600 text-xl">{error}</p>
      </form>

      <div className="w-96 flex items-center">
        <span className="flex-1 h-1 bg-white"></span>
        <p className="text-lg mx-2">or</p>
        <span className="flex-1 h-1 bg-white"></span>
      </div>

      <button
        onClick={createAccountButton}
        className=" border-white border-4 font-bold text-2xl py-2 w-96 focus:outline-none hover:bg-white hover:text-purple-600 "
      >
        Create New Account
      </button>
    </div>
  );
}

export default LoginForm;
