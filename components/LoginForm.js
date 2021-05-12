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
    <div className="w-80 sm:w-96 h-4/5 md:h-2/3 p-5 bg-white rounded-lg shadow-lg text-purple-600">
      <div
        id="loginForm"
        className="transition-all duration-500 flex flex-col justify-between items-center h-full w-full opacity-0"
      >
        <div className="w-full">
          <h1 className="font-bold text-xl">Sign In to</h1>
          <h1 className="font-bold text-4xl">Vocabulated</h1>
        </div>

        <form
          onSubmit={(e) => loginUser(e)}
          className="flex flex-col justify-center my-12 w-full"
        >
          <input
            id="loginUsername"
            className="bg-transparent border-b-3 py-2 font-semibold text-xl outline-none focus:border-purple-600 transition-all"
            type="text"
            placeholder="UserName"
            autoComplete="off"
            required="required"
          />
          <input
            id="loginPassword"
            className="bg-transparent border-b-3 py-2 font-semibold text-xl outline-none focus:border-purple-600 transition-all my-7"
            type="password"
            placeholder="Password"
            required="required"
          />
          <button
            disabled={loading}
            className=" border-purple-600 border-2 font-bold rounded-lg text-xl py-2 focus:outline-none hover:bg-purple-600 hover:text-white transition-all"
            type="submit"
          >
            {loading ? (
              <Image src="/loading.gif" width={30} height={30} />
            ) : (
              'LOGIN'
            )}
          </button>

          <p className="cursor-pointer font-semibold text-base opacity-50 hover:opacity-100 transition-all mt-2">
            forgot Password?
          </p>
          <p className="w-full text-center text-red-600 text-xl">{error}</p>
        </form>

        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-lg font-medium mb-2">New Here?</p>
          <button
            onClick={changeForm}
            className=" border-purple-600 border-2 font-bold rounded-lg text-xl py-2 w-full focus:outline-none hover:bg-purple-600 hover:text-white transition-all"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
