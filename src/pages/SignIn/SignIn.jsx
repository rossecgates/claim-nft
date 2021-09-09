import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ReferrStatistic from '../../components/ReferrStatistic';
import Prize from '../../components/Prize';
import Share from '../../components/Share';
import ShareSocial from '../../components/ShareSocial';

const SignIn = () => (
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
);

export default SignIn;
