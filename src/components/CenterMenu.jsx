import React from 'react';
const liStyle = 'mr-[3rem] hover:cursor-pointer';

const CenterMenu = () => {
  return (
    <div className="menu flex ">
      <ul className="flex w-[100%] justify-between">
        <li className={liStyle}>Home</li>
        <li className={liStyle}>About</li>
        <li className={liStyle}>Preformer</li>
        <li className={liStyle}>Event Shedule</li>
      </ul>
    </div>
  );
};

export default CenterMenu;
