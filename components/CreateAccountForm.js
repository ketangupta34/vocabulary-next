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
    <div className="w-80 sm:w-96 h-4/5 md:h-2/3 p-5 bg-white rounded-lg shadow-lg text-purple-600">
      <div
        id="createAccForm"
        className="transition-all duration-500 flex flex-col justify-between items-center h-full w-full opacity-0"
      >
        <div className="w-full">
          <h1 className="font-bold text-xl">Start by </h1>
          <h1 className="font-bold text-3xl sm:text-4xl">Creating an Account</h1>
        </div>

        <form
          onSubmit={(e) => createNewAccount(e)}
          className="flex flex-col justify-center my-10 w-full"
        >
          <input
            id="newAccUsername"
            className="bg-transparent border-b-3 py-2 font-semibold text-xl outline-none focus:border-purple-600 transition-all mb-2"
            type="text"
            placeholder="UserName"
            autoComplete="off"
            required="required"
          />
          <input
            id="newAccEmail"
            className="bg-transparent border-b-3 py-2 font-semibold text-xl outline-none focus:border-purple-600 transition-all mb-2"
            type="email"
            placeholder="Email"
            autoComplete="off"
            required="required"
          />
          <input
            id="newAccPassword"
            className="bg-transparent border-b-3 py-2 font-semibold text-xl outline-none focus:border-purple-600 transition-all mb-2"
            type="password"
            placeholder="Password"
            required="required"
          />
          <input
            id="newAccComparePassword"
            className="bg-transparent border-b-3 py-2 font-semibold text-xl outline-none focus:border-purple-600 transition-all mb-2"
            type="password"
            placeholder="Confirm Password"
            required="required"
          />
          <button
            className=" border-purple-600 border-2 font-bold rounded-lg text-xl py-2 focus:outline-none hover:bg-purple-600 hover:text-white transition-all"
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

        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-lg font-medium mb-2">Already have an account?</p>
          <button
            onClick={changeForm}
            className=" border-purple-600 border-2 font-bold rounded-lg text-xl py-2 w-full focus:outline-none hover:bg-purple-600 hover:text-white transition-all"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountForm;
