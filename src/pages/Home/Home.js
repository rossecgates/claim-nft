import React from 'react';
import Prize from '../../components/Prize';
import SignForm from '../../components/SignForm';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const Home = () => {
  localStorage.referralLink = document.URL;

  return (
    <div className="home twitter">
      <Header className="home__header" />
      <div className="home__data">
        <Footer />
        <main>
          <div className="home__title">
            <span className="home__title-earn">Then</span> join the conference
          </div>
          <Prize className="home__prize" />
          <SignForm />
        </main>
      </div>
    </div>
  );
};

export default Home;
