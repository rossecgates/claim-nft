import React from 'react';
import Prize from '../../components/Prize';
import SignForm from '../../components/SignForm';

const Home = () => {
  const isSignIn = true;
  return (
    <main>
      <div className="home__title">
        <span className="home__title-earn">Earn rewards</span> by referring the
        <br />
        best marketing agencies
      </div>
      <Prize />
      <p className="home__sign-up-text">Signup below and start referring</p>
      <SignForm />
      <p className="home__statistic">
        Already joined?&nbsp;
        <span className="home__statistic-status">Check your status</span>
      </p>
      <SignForm isSignIn={isSignIn} />
    </main>
  );
};

export default Home;
