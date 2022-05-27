import type { NextPage } from 'next';
import Head from 'next/head';
import BlogSection from '../components/pages/landing/blog';
import IntroSection from '../components/pages/landing/intro';
import ProjectSection from '../components/pages/landing/project';

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="home" content="portfolio site for augericke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroSection />
      <ProjectSection />
      <BlogSection />
      <div className="h-[10000px]"></div>
    </>
  );
};

export default LandingPage;
