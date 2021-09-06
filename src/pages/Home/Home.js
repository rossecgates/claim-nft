import React from 'react';
import Prize from '../../components/Prize';
import SignUp from '../../components/SignUp';

const Home = () => (
  <main>
    <div className="home__title">
      <span className="home__title-earn">Earn rewards</span> by referring the
      <br />
      best marketing agencies
    </div>
    <Prize />
    <SignUp />
    <p className="home__statistic">
      Already joined?&nbsp;
      <span className="home__statistic-status">Check your status</span>
    </p>
  </main>
);

export default Home;
