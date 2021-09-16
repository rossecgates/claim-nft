import React from 'react';
import SignForm from '../../components/SignForm';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const Login = () => {
  const isLoginPage = true;

  return (
    <div className="login">
      <Header className="login__header" />
      <div className="login__data">
        <Footer />
        <main>
          <p className="login__title">Enter your email to login</p>
          <SignForm isLoginPage={isLoginPage} />
        </main>
      </div>
    </div>
  );
};

export default Login;
