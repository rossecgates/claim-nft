import React, { useState, useEffect } from 'react';
import ShareInput from '../ShareInput';
import ShareSocial from '../ShareSocial';

const Share = () => {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => setCopy(false), 1000);
    return () => clearTimeout(timerId);
  }, [copy]);

  return (
    <div>
      <ShareInput copy={copy} setCopy={setCopy} />
      <ShareSocial setCopy={setCopy} className="share__share-social" />
    </div>
  );
};

export default Share;
