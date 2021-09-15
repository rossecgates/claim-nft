/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import EmailContext from '../../contexts/EmailContext';
import DataContext from '../../contexts/DataContext';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ReferrStatistic from '../../components/ReferrStatistic';
import Prize from '../../components/Prize';
import Share from '../../components/Share';
import ShareSocial from '../../components/ShareSocial';
import Loader from '../../components/Loader';
import { signInUp } from '../../utils/queryApi';

const SignIn = () => {
  const [loader, setLoader] = useState(true);

  console.log('URL: ', document.URL);

  const dataInLocalStorage = localStorage.data
    ? JSON.parse(localStorage.data)
    : {};

  const history = useHistory();
  const { submitData } = useContext(EmailContext);
  const { email } = submitData;

  const { setData } = useContext(DataContext);

  useEffect(async () => {
    if (!dataInLocalStorage.registered_email && !email) {
      history.push('/');
    }

    const dataResponse = email
      ? await signInUp(email, 'sign-up')
      : await signInUp(dataInLocalStorage.registered_email, 'sign-in');

    if (dataResponse) {
      localStorage.setItem('data', JSON.stringify(dataResponse));
      setData(dataResponse);
      setLoader(false);
    } else {
      localStorage.removeItem('data');
      setLoader(false);
      history.push('/');
    }
  }, []);

  return (
    <>
      <Loader className={`${loader && 'sign-in__loader'}`} />
      <div className="sign-in">
        <Header />
        <div className="sign-in__data">
          <div>
            <ReferrStatistic />
            <Footer className="sign-in__footer" />
          </div>
          <main>
            <Share />
            <ShareSocial className="sign-in__share-social" />
            <Prize />
          </main>
        </div>
      </div>
    </>
  );
};

export default SignIn;
