import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HeadShot from '../../public/assets/headshot.jpg';
// import BlogSection from '../components/pages/landing/blog';
import IntroSection from '../components/pages/landing/intro';
import ProjectSection from '../components/pages/landing/project';
import ContactSection from '../components/pages/landing/contact';

const LandingPage: NextPage = () => {
  const router = useRouter();

  const meta = {
    title: 'Austin Gericke',
    // eslint-disable-next-line quotes
    description: "I'm Austin, a data engineer turned web developer",
    type: 'website',
    image: `https://www.austingericke.com${HeadShot.src}`,
    imageAlt: 'Head shot of a pretty cool dude.',
    url: `https://www.austingericke.com${router.asPath}`,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="dabitts" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={meta.imageAlt} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content={meta.imageAlt} />
        <meta name="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:site" content="@augericke" />
        <meta property="twitter:creator" content="@augericke" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroSection />
      <ProjectSection />
      {/* <BlogSection /> */}
      <ContactSection />
    </>
  );
};

export default LandingPage;
