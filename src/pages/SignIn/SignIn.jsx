import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import EmailContext from '../../contexts/EmailContext';
import DataContext from '../../contexts/DataContext';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Prize from '../../components/Prize';
import Loader from '../../components/Loader';
import { signInUp } from '../../utils/queryApi';

const SignIn = () => {
  const [loader, setLoader] = useState(true);

  const dataInLocalStorage = localStorage.data
    ? JSON.parse(localStorage.data)
    : {};

  const history = useHistory();
  const { email } = useContext(EmailContext);

  const { setData } = useContext(DataContext);

  useEffect(async () => {
    if (!dataInLocalStorage.registered_email && !email) {
      history.push('/sign-in');
    }

    const dataResponse = email
      ? await signInUp(email)
      : await signInUp(dataInLocalStorage.registered_email);

    if (dataResponse) {
      localStorage.setItem('data', JSON.stringify(dataResponse));
      setData(dataResponse);
      setLoader(false);
    } else {
      localStorage.removeItem('data');
      setLoader(false);
      history.push('/sign-in');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>
          GEN C Crypto Marketing Conference &amp; Contest | share and win prize
        </title>
      </Helmet>
      <Loader className={`${loader && 'sign-in__loader'}`} />
      <div className="sign-in">
        <Header />
        <div className="sign-in__data">
          <div>
            <Footer className="sign-in__footer" />
          </div>
          <main>
            <div className="home__title">
              <span className="home__title-earn">Then</span> join the conference
            </div>
            <Prize />
          </main>
        </div>
      </div>
    </>
  );
};

export default SignIn;
