import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function CreateAccountForm({ createAccountButton }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.querySelector('#createAccForm').classList.remove('opacity-0');
    document.querySelector('#createAccForm').classList.add('opacity-100');
  }, []);

  const [error, setErrorState] = useState('');
  const setError = (error) => {
    setErrorState(error);
    setTimeout(() => {
      setErrorState('');
    }, 2500);
  };

  const createNewAccount = async (e) => {
    e.preventDefault();
    const username = document.querySelector('#newAccUsername').value;
    const email = document.querySelector('#newAccEmail').value;
    const password = document.querySelector('#newAccPassword').value;
    const comparePassword = document.querySelector('#newAccComparePassword')
      .value;

    if (username.length === 0) {
      setError('Add Username');
      return;
    }
    if (email.length === 0) {
      setError('Add email');
      return;
    }
    if (password.length === 0) {
      setError('Add Password');
      return;
    }
    if (password !== comparePassword) {
      setError('Password Dont Match');
      return;
    }

    setLoading(true);
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
        } else {
          setError(`${res.data.message}`);
        }
        setLoading(true);
      })
      .catch((e) => {
        console.log(e);
        setLoading(true);
      });
  };

  const changeForm = () => {
    document.querySelector('#createAccForm').classList.add('opacity-0');
    setTimeout(() => {
      createAccountButton();
    }, 210);
  };

  return (
    <div
      id="createAccForm"
      className="opacity-0 transition-all duration-200 flex justify-between items-center flex-col w-2/3 h-2/3 text-white"
    >
      <div>
        <h1 className="font-bold text-3xl">Start by </h1>
        <h1 className="font-bold text-5xl">Creating an Account</h1>
      </div>

      <form
        onSubmit={(e) => createNewAccount(e)}
        className="flex flex-col justify-center my-10 w-96"
      >
        <input
          id="newAccUsername"
          className="bg-transparent focus:bg-transparent border-b-3 py-2 font-semibold text-2xl focus:outline-none mb-2"
          type="text"
          placeholder="UserName"
        />
        <input
          id="newAccEmail"
          className="bg-transparent focus:bg-transparent border-b-3 py-2 font-semibold text-2xl focus:outline-none mb-2"
          type="text"
          placeholder="Email"
        />
        <input
          id="newAccPassword"
          className="bg-transparent focus:bg-transparent border-b-3 py-2 font-semibold text-2xl focus:outline-none mb-2"
          type="password"
          placeholder="Password"
        />
        <input
          id="newAccComparePassword"
          className="bg-transparent focus:bg-transparent border-b-3 py-2 font-semibold text-2xl focus:outline-none mb-4"
          type="password"
          placeholder="Confirm Password"
        />
        <button
          className=" border-white border-3 rounded-md transition-all font-bold text-2xl py-2 focus:outline-none hover:bg-white hover:text-purple-600 "
          type="submit"
        >
          {loading ? (
            <Image src="/loading.gif" width={30} height={30} />
          ) : (
            'LOGIN'
          )}
        </button>
        <p className="w-full text-center text-red-600 text-xl">{error}</p>
      </form>

      <div className=" w-96 flex flex-col justify-center items-center">
        <p className="text-lg font-medium mb-2">Already have an account?</p>
        <button
          onClick={changeForm}
          className=" border-white border-3 rounded-md transition-all w-full font-bold text-2xl py-2 focus:outline-none hover:bg-white hover:text-purple-600 "
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default CreateAccountForm;
