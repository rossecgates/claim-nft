/* eslint-disable no-console */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Prize from '../../components/Prize';
import SignForm from '../../components/SignForm';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const Home = () => {
  const history = useHistory();

  const checkStatus = () => {
    history.push('/login');
  };

  console.log('api key = ', process.env.REACT_APP_API_KEY);
  localStorage.referralLink = document.URL;

  return (
    <div className="home">
      <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nytimes" />
        <meta name="twitter:creator" content="@SarahMaslinNir" />
        <meta
          name="twitter:title"
          content="Parade of Fans for Houston’s Funeral"
        />
        <meta
          name="twitter:description"
          content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here."
        />
        <meta
          name="twitter:image"
          content="https://genc.win/images/logo-background.png"
        />
      </Helmet>
      <Header className="home__header" />
      <div className="home__data">
        <Footer />
        <main>
          <div className="home__title">
            <span className="home__title-earn">Earn rewards</span> by referring
            the&nbsp;
            <br /> best marketing agencies
          </div>
          <Prize className="home__prize" />
          <p className="home__sign-up-text">Signup below and start referring</p>
          <SignForm />
          <p className="home__statistic">
            Already joined?&nbsp;
            <button
              type="button"
              onClick={checkStatus}
              className="home__statistic-status"
            >
              Check your status
            </button>
          </p>
        </main>
      </div>
    </div>
  );
};

export default Home;
