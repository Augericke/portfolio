import React from 'react';
import Link from 'next/link';
import ShowOnScroll from '../../../library/animations/showOnScroll';
import BlogCard from '../../../library/blogCard';

type BlogSectionProps = {};

const BlogSection: React.FC<BlogSectionProps> = (props: BlogSectionProps) => {
  const blogList = [
    {
      title: 'Oh look a blog',
      publishedAt: 'May 22, 2022',
      tags: ['Typescript', 'Framer Motion', 'Tailwindcss'],
      slug: '/blog/oh-look-a-blog',
      abstract:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec sodales dolor, sit amet semper tellus. Duis interdum elit sit amet varius vehicula. Aliquam nec ex nibh. Duis bibendum vel sapien eget vulputate.',
    },
    {
      title: 'Oh look another blog',
      publishedAt: 'May 22, 2022',
      tags: ['Typescript', 'Tailwindcss'],
      slug: '/blog/oh-look-another-blog',
      abstract:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec sodales dolor, sit amet semper tellus. Duis interdum elit sit amet varius vehicula. Aliquam nec ex nibh. Duis bibendum vel sapien eget vulputate.',
    },
    {
      title: 'and another one',
      publishedAt: 'May 22, 2022',
      tags: ['React'],
      slug: '/blog/oh-look-another-blog',
      abstract:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec sodales dolor, sit amet semper tellus. Duis interdum elit sit amet varius vehicula. Aliquam nec ex nibh. Duis bibendum vel sapien eget vulputate.',
    },
  ];
  return (
    <>
      <div
        className="mt-96 flex w-full flex-col items-center justify-center gap-16"
        id="blog"
      >
        <ShowOnScroll customClass="flex w-2/3 justify-center lg:w-1/2">
          <p className="mb-5 w-full text-justify text-2xl font-light text-white md:mb-6 lg:mb-7 lg:w-2/3 lg:text-3xl">
            Sometimes I write about what I am learning or the things I have
            made.
          </p>
        </ShowOnScroll>
        {blogList.map((blog, key) => {
          return (
            <BlogCard
              title={blog.title}
              abstract={blog.abstract}
              publishedAt={blog.publishedAt}
              tags={blog.tags}
              slug={blog.slug}
              key={key}
            />
          );
        })}
        <ShowOnScroll customClass="flex w-2/3 justify-center lg:w-1/2">
          <Link href="/blog/">
            <a>
              <p className="mb-5 -mt-6 w-fit rounded-3xl bg-primaryDark px-8 py-2 text-center text-2xl font-light text-white shadow-lg dark:bg-primary lg:text-3xl">
                see all
              </p>
            </a>
          </Link>
        </ShowOnScroll>
      </div>
    </>
  );
};

export default BlogSection;
