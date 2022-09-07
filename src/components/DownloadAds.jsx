import React from 'react';
import AppStorePic from '../img/App Store.png';
import GoogleStorePic from '../img/Google Play.png';
const DownloadAds = () => {
  return (
    <div className="download">
      <div className="download-images">
        <img src={AppStorePic} alt="" />
        <img src={GoogleStorePic} alt="" />
      </div>
    </div>
  );
};

export default DownloadAds;
