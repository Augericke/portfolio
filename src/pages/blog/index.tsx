import type { NextPage } from 'next';
import Head from 'next/head';

const BlogPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="blog"
          content="I write about what I am learning or the things I have made."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="h-40 bg-red-300">placeholder</p>
    </>
  );
};

export default BlogPage;
