import React from "react";

function CreateAccountForm({ createAccountButton }) {
  return (
    <div className="flex justify-center items-center flex-col w-72">
      <h1 className="text-white font-bold text-4xl">Sign Up</h1>
      <form className="flex flex-col justify-center my-10 w-full">
        <input
          className="text-white bg-transparent border-b-2  mb-2 py-2 focus:outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="text-white bg-transparent border-b-2  mb-2 py-2 focus:outline-none"
          type="text"
          placeholder="UserName"
        />
        <input
          className="text-white bg-transparent border-b-2  mb-2 py-2 focus:outline-none"
          type="text"
          placeholder="Email"
        />
        <input
          className="text-white bg-transparent border-b-2 mb-2 py-2 focus:outline-none"
          type="password"
          placeholder="Password"
        />
        <input
          className="text-white bg-transparent border-b-2 mb-4 py-2 focus:outline-none"
          type="password"
          placeholder="Confirm Password"
        />
        <button
          onClick={createAccountButton}
          className="text-white border-white border-2 py-1 w-full hover:bg-white hover:text-purple-700 font-bold focus:outline-none"
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccountForm;
