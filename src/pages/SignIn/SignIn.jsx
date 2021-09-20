import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import EmailContext from '../../contexts/EmailContext';
import DataContext from '../../contexts/DataContext';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ReferrStatistic from '../../components/ReferrStatistic';
import Prize from '../../components/Prize';
import Share from '../../components/Share';
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
      history.push('/');
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
      history.push('/');
    }
  }, []);

  return (
    <>
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
            <Prize />
          </main>
        </div>
      </div>
    </>
  );
};

export default SignIn;
