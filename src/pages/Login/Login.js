import React from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SignForm from '../../components/SignForm';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const Login = () => {
  const isLoginPage = true;

  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  return (
    <div className="login">
      <Helmet>
        <title>
          GEN C Crypto Marketing Conference &amp; Contest | login and win prize
        </title>
      </Helmet>
      <Header className="login__header" />
      <div className="login__data">
        <Footer />
        <main>
          <p className="login__title">Enter your email to login</p>
          <SignForm isLoginPage={isLoginPage} />
          <p className="home__statistic">
            New Here?&nbsp;
            <button
              type="button"
              onClick={goHome}
              className="home__statistic-status"
            >
              Make an account
            </button>
          </p>
        </main>
      </div>
    </div>
  );
};

export default Login;
