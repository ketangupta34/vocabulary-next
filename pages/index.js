import { useEffect, useState } from 'react';
import Head from 'next/head';

import LoginForm from '../components/LoginForm';
import CreateAccountForm from '../components/CreateAccountForm';
import Animation1 from '../components/Animations/Animation1';
import Animation2 from '../components/Animations/Animation2';
import Animation3 from '../components/Animations/Animation3';

export default function Home() {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [createAccount, setCreateAccount] = useState(false);

  const nextAnimation = () => {
    setCurrentAnimation(currentAnimation + 1);
  };

  const createAccountButton = () => {
    setCreateAccount(!createAccount);
  };

  const getAnimation = () => {
    switch (currentAnimation) {
      case 0:
        return <Animation1 nextAnimation={nextAnimation} />;
      case 1:
        return <Animation2 nextAnimation={nextAnimation} />;
      case 2:
        return <Animation3 nextAnimation={nextAnimation} />;
      case 3:
        return !createAccount ? (
          <LoginForm createAccountButton={createAccountButton} />
        ) : (
          <CreateAccountForm createAccountButton={createAccountButton} />
        );
    }
  };

  useEffect(() => {
    getAnimation();
  }, [currentAnimation]);

  return (
    <div>
      <Head>
        <title>Vocabulated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" bg-purple-700 w-screen h-screen flex justify-center items-center">
        {getAnimation()}
      </div>
    </div>
  );
}
