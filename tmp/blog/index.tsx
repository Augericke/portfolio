import type { NextPage } from 'next';
import Head from 'next/head';
import Blog from '../../src/components/pages/blog';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const blogDir = path.join(process.cwd(), 'src/pages/blog');
  const dirFiles = fs.readdirSync(blogDir, {
    withFileTypes: true,
  });
  const blogModules = await Promise.all(
    dirFiles.map(async (file) => {
      return import(`./${file.name}`);
    })
  );
  const blogs = blogModules
    .map((blog) => (blog.meta ? blog.meta : null))
    .filter((meta) => meta);

  // TODO: add slugs in dynamically
  return {
    props: {
      blogs,
    },
  };
}

const BlogPage: NextPage<any> = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Blog | All Posts</title>
        <meta
          name="description"
          content="I write about what I am learning and the things I have made."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Blog blogs={blogs} />
    </>
  );
};

export default BlogPage;
