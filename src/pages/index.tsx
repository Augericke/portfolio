import type { NextPage } from 'next';
import useLocalStorage from '../hooks/useLocalStorage';
import Head from 'next/head';

const LandingPage: NextPage = () => {
  const [test, setTest] = useLocalStorage('test-theme', '');

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="home" content="portfolio site for augericke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">
        {test}
      </h1>
      <button
        onClick={() => {
          setTest(!test);
          console.log(window.localStorage);
        }}
      >
        test
      </button>
    </div>
  );
};

export default LandingPage;
