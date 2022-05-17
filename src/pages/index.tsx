import type { NextPage } from 'next';
import Head from 'next/head';

const LandingPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="home" content="portfolio site for augericke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>gm world</p>
      <h1 className="text-3xl">
        Hello world!
      </h1>
    </div>
  );
};

export default LandingPage;
