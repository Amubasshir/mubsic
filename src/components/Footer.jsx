import { Facebook, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';

function Footer() {
  const SocialStyle = 'rounded-full border-2 border-whit p-2 mr-[5rem]';
  return (
    <div className=" footer flex flex-col items-center justify-start px-[2rem] bg-[#081730] h-[25rem] pt-[8rem] mt-[-5rem] relative z-[-1]">
      <hr />
      {/* Social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialStyle}>
          <Facebook />
        </div>{' '}
        <div className={SocialStyle}>
          <Twitter />
        </div>{' '}
        <div className={SocialStyle}>
          <YouTube />
        </div>{' '}
        <div className={SocialStyle}>
          <LinkedIn />
        </div>
      </div>
      {/* detail */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        © 2022 Mubasshir Ahmed
      </span>
    </div>
  );
}

export default Footer;
