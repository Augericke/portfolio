import React from 'react';

type LogoProps = {};

const Logo: React.FC<LogoProps> = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 99 45"
        width={110}
        height={110}
        className="transition-all duration-[1s] dark:rotate-180"
      >
        <path
          className={
            'fill-primaryDark transition-all duration-[1s] dark:fill-white'
          }
          d="M6.6,21.1L0,37.9h5.3l0.8-2.3h5.6l0.8,2.3H18l-6.6-16.8C11.4,21.1,6.6,21.1,6.6,21.1z M9,27.3l1.3,4H7.6L9,27.3
        z M30,37.9V25.8h-5.1v6.5c0,0.9-0.4,1.3-1.1,1.3c-0.6,0-1-0.5-1-1.3v-6.5h-5.1v7.9c0,2.8,1.5,4.6,4,4.6c1.4,0,2.5-0.6,3.2-1.8v1.4
        H30z M35.6,33.7c1.1,0.2,1.3,0.3,1.3,0.5s-0.2,0.3-0.6,0.3c-1.4,0-3.1-0.5-4.4-1.2l-1.6,3.8c1.6,0.8,3.9,1.2,5.8,1.2
        c3.7,0,5.9-1.6,5.9-4.3c0-2.3-1.4-3.2-4.6-3.9c-1.1-0.2-1.4-0.2-1.4-0.5c0-0.2,0.2-0.3,0.7-0.3c1.2,0,2.6,0.4,3.9,1.1l1.3-3.8
        c-1.7-0.7-3.7-1-5.2-1c-3.6,0-5.7,1.7-5.7,4.3C30.9,31.9,32,33,35.6,33.7z M48.8,29.8h2.7v-4h-2.7v-3.4h-5v3.4h-1.6v4h1.6v3.6
        c0,3,1.8,4.8,4.6,4.8c1.5,0,2.5-0.3,3.1-0.6v-4.2c-0.4,0.2-0.8,0.4-1.2,0.4c-0.9,0-1.4-0.4-1.4-1.5L48.8,29.8L48.8,29.8z M57.3,37.9
        V25.8h-5.1v12.1H57.3z M58.2,25.8v12.1h5.1v-6.5c0-0.9,0.4-1.3,1.1-1.3c0.6,0,1,0.5,1,1.3v6.5h5.1V30c0-2.8-1.6-4.6-4-4.6
        c-1.4,0-2.6,0.6-3.2,1.8v-1.4H58.2z"
        />
        <path
          className={
            'fill-white transition-all duration-[1s] dark:fill-primary'
          }
          d="M81.7,19.7c1.4,2.8,4.5,4.4,8.1,4.4c4.9,0,9-3.9,9-8.8s-4.1-8.8-9-8.8s-8.7,3.8-8.7,8.4v1.9h9.2v-4.1h-3.6
        c0.5-0.8,1.6-1.3,3.1-1.3c2.1,0,3.7,1.8,3.7,4c0,2.1-1.6,3.8-3.7,3.8c-1.4,0-2.7-0.6-3.3-1.8L81.7,19.7z M72.5,11.5
        c0.4-0.6,0.8-0.9,1.6-0.9c0.9,0,1.6,0.4,1.7,1.2h-8c0,0.3-0.1,0.6-0.1,0.9c0,4.2,2.6,6.7,6.5,6.7c3.7,0,6.6-2.7,6.6-6.4
        c0-3.8-2.7-6.4-6.7-6.4c-2.8,0-4.9,1.2-5.9,3.3L72.5,11.5z M74.2,15.6c-0.9,0-1.5-0.4-1.6-1.1h3.1C75.7,15.2,75.1,15.6,74.2,15.6z
        M58.2,19.3c0.2,0,0.4,0.1,0.7,0.1c1.5,0,2.5-0.7,3.2-2.1v1.8h5V7h-5v4c0,2.1-1,3.2-2.7,3.2c-0.4,0-0.8,0-1.2-0.3
        C58.2,13.9,58.2,19.3,58.2,19.3z M52.2,7v12.1h5.1V7H52.2z M51.9,22.4c0,1.5,1.3,2.8,2.8,2.8s2.8-1.3,2.8-2.8s-1.3-2.8-2.8-2.8
        S51.9,20.9,51.9,22.4z M51.5,13c0-3.9-2.7-6.4-6.3-6.4c-0.9,0-1.9,0.2-2.9,0.7v4.5c0.6-0.4,1.2-0.6,1.9-0.6c1.2,0,2.1,0.7,2.1,1.9
        S45.4,15,44.2,15c-0.7,0-1.3-0.2-1.9-0.6v4.5c0.8,0.4,1.9,0.6,2.8,0.6C48.9,19.5,51.5,16.8,51.5,13z M33.5,19.1l2.9-3.8v8.5h5V7h-5
        v4.4l-3-4.4h-6l4.6,6.5l-4.4,5.6H33.5z M21.1,11.5c0.4-0.6,0.8-0.9,1.6-0.9c0.9,0,1.6,0.4,1.7,1.2h-8c0,0.3-0.1,0.6-0.1,0.9
        c0,4.2,2.6,6.7,6.5,6.7c3.7,0,6.6-2.7,6.6-6.4c0-3.8-2.7-6.4-6.7-6.4c-2.8,0-4.9,1.2-5.9,3.3L21.1,11.5z M22.8,15.6
        c-0.9,0-1.5-0.4-1.6-1.1h3.1C24.3,15.2,23.7,15.6,22.8,15.6z"
        />
      </svg>
    </div>
  );
};

export default Logo;
