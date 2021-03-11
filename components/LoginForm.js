import React from "react";

function LoginForm({ createAccountButton }) {
  return (
    <div className="flex justify-center items-center flex-col w-72">
      <h1 className="text-white font-bold text-4xl">Vocabulated</h1>
      <form className="flex flex-col justify-center my-10 w-full">
        <input
          className="text-white bg-transparent border-b-2 py-2 focus:outline-none"
          type="text"
          placeholder="UserName"
        />
        <input
          className="text-white bg-transparent border-b-2 my-3 py-2 focus:outline-none"
          type="password"
          placeholder="Password"
        />
        <button
          className="text-white border-white border-2 py-1 focus:outline-none hover:bg-white hover:text-purple-700 "
          type="submit"
        >
          Login
        </button>

        <p className="text-white cursor-pointer opacity-80 hover:opacity-100 mt-1">
          forgot Password?
        </p>
      </form>
      <button
        onClick={createAccountButton}
        className="text-white border-white border-2 py-1 w-full hover:bg-white hover:text-purple-700 font-bold"
      >
        Create New Account
      </button>
    </div>
  );
}

export default LoginForm;
