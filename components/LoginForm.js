import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function LoginForm({ createAccountButton }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.querySelector('#loginForm').classList.remove('opacity-0');
    document.querySelector('#loginForm').classList.add('opacity-100');
  }, []);

  const [error, setErrorState] = useState('');
  const setError = (error) => {
    setErrorState(error);
    setTimeout(() => {
      setErrorState('');
    }, 2500);
  };

  const changeForm = () => {
    document.querySelector('#loginForm').classList.add('opacity-0');
    setTimeout(() => {
      createAccountButton();
    }, 210);
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

    setLoading(true);
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
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };
  return (
    <div
      id="loginForm"
      className="transition-all duration-200 flex justify-between items-center flex-col w-2/3 h-2/3 text-white opacity-0"
    >
      <div>
        <h1 className="font-bold text-3xl">Sign In to</h1>
        <h1 className="font-bold text-6xl">Vocabulated</h1>
      </div>

      <form
        onSubmit={(e) => loginUser(e)}
        className="flex flex-col justify-center my-10 w-96"
      >
        <input
          id="loginUsername"
          className="bg-transparent focus:bg-transparent border-b-3 py-2 font-semibold text-2xl focus:outline-none"
          type="text"
          placeholder="UserName"
        />
        <input
          id="loginPassword"
          className="bg-transparent focus:bg-transparent border-b-3 py-2 font-semibold text-2xl focus:outline-none my-7"
          type="password"
          placeholder="Password"
        />
        <button
          disabled={loading}
          className=" border-white border-3 font-bold rounded-md text-2xl py-2 focus:outline-none hover:bg-white hover:text-purple-600 transition-all "
          type="submit"
        >
          {loading ? (
            <Image src="/loading.gif" width={30} height={30} />
          ) : (
            'LOGIN'
          )}
        </button>

        <p className="cursor-pointer font-semibold text-lg opacity-80 hover:opacity-100 transition-all mt-2">
          forgot Password?
        </p>
        <p className="w-full text-center text-red-600 text-xl">{error}</p>
      </form>

      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-lg font-medium mb-2">New Here?</p>
        <button
          onClick={changeForm}
          className=" border-white border-3 font-bold rounded-md text-2xl py-2 w-96 focus:outline-none hover:bg-white hover:text-purple-600 transition-all"
        >
          Create New Account
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
