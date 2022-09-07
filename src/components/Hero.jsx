import { motion } from 'framer-motion';
import { React, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import backgraphics from '../img/backgraphics.png';
import p1 from '../img/p 1.png';
import p2 from '../img/p 2.png';
import p3 from '../img/p 3.png';
import p4 from '../img/p 4.png';
import DownloadAds from './DownloadAds';

function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: '7rem',
    },
    false: {
      left: '19rem',
    },
  };
  const musicPlayer = {
    true: {
      left: '295px',
    },
    false: {
      left: '235px',
    },
  };
  const rect = {
    true: {
      left: '11rem',
    },
    false: {
      left: '13rem',
    },
  };
  const heart = {
    true: {
      left: '9rem',
    },
    false: {
      left: '12.5rem',
    },
  };
  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
        {/* left side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
          <span>Experience The</span>{' '}
          <span>
            <b>Best Qulaity Music</b>
          </span>
          <span className="text-[15px] text-white mt-2">
            A handful of streaming music services offer Hi-Res Audio, or HRA,
            <br />
            and these are the best for better-than-CD-quality music streams{' '}
            <br /> and a superior listening
          </span>
          {/* download ads */}
          <div>
            <span className="text-[13px] text-[#525D6E] ">
              Download now on IOS and Android
            </span>
            <DownloadAds />
          </div>
        </div>
        {/* right side */}
        <div className="images relative w-[50%]">
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: 'ease-out' }}
            src={backgraphics}
            alt=""
            className="absolute top-[-8rem] left-[19rem]"
          />
          <img
            src={p1}
            alt=""
            className="absolute top-[-15rem] h-[34rem] left-[13rem]"
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: 'ease-out',
            }}
            src={p2}
            alt=""
            className="absolute left-[235px] top-[94px] w-[175px]"
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: 'ease-out',
              duration: 1,
            }}
            src={p3}
            alt=""
            className="absolute w-[5rem] left-[13rem] top-[12rem]"
          />
          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{
              type: 'ease-out',
              duration: 1,
            }}
            src={p4}
            alt=""
            className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;
