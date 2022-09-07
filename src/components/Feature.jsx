import { motion } from 'framer-motion';
import { React, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import iconn from '../img/music icon.png';

function Feature({ icon, title }) {
  const variant = {
    true: {
      transform: 'scale(1)',
    },
    false: {
      transform: 'scale(0.5)',
    },
  };
  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      // minTopValue={100}
    >
      <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
        {/* icon */}
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: 'ease-out',
          }}
          animate={`${elementIsVisible}`}
          className="icon bg-[#081730] rounded-2xl p-4"
        >
          <img src={iconn} alt="" className="w-[3rem]" />
        </motion.div>

        <span className="mt-5">{title}</span>

        <span className="text-[#707070] mt-4">
          Those who attend live concerts once a fortnight and more were the most
          likely to score their happiness and self-esteem at the highest
          level.Live music makes them feel happier.
        </span>

        <span className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer">
          Learn more
        </span>
      </div>
    </VisibilitySensor>
  );
}

export default Feature;