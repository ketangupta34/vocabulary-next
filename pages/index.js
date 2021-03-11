import { useState } from "react";
import Head from "next/head";

import LoginForm from "../components/LoginForm";
import CreateAccountForm from "../components/CreateAccountForm";

export default function Home() {
  const [createAccount, setCreateAccount] = useState(false);

  const createAccountButton = () => {
    setCreateAccount(!createAccount);
  };

  return (
    <div>
      <Head>
        <title>Vocabulated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" bg-purple-700 w-screen h-screen flex justify-center items-center">
        {!createAccount ? (
          <LoginForm createAccountButton={createAccountButton} />
        ) : (
          <CreateAccountForm createAccountButton={createAccountButton} />
        )}
      </div>
    </div>
  );
}
