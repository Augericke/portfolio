import type { NextPage } from 'next';
import Head from 'next/head';
import useDarkMode from '../hooks/useDarkMode';
import { FaMoon, FaSun } from 'react-icons/fa';

const LandingPage: NextPage = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleDarkModeToggle = () => setDarkTheme(!darkTheme);

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="home" content="portfolio site for augericke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span onClick={handleDarkModeToggle}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    </div>
  );
};

export default LandingPage;
