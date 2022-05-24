import type { NextPage } from 'next';
import Head from 'next/head';
import Intro from '../components/pages/landing/intro';
// import Project from '../components/pages/landing/project';

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="home" content="portfolio site for augericke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      {/* <Project /> */}
      <div className="h-[10000px]"></div>
    </>
  );
};

export default LandingPage;
