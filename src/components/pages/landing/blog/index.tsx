import React from 'react';
import { motion } from 'framer-motion';

type BlogSectionProps = {};

const BlogSection: React.FC<BlogSectionProps> = (props: BlogSectionProps) => {
  const blogList = [
    {
      title: 'Oh look a blog',
      publishedAt: 'May 22, 2022',
      topics: ['Typescript', 'Framer Motion', 'Tailwindcss'],
      blurb:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec sodales dolor, sit amet semper tellus. Duis interdum elit sit amet varius vehicula. Aliquam nec ex nibh. Duis bibendum vel sapien eget vulputate.',
    },
    {
      title: 'Oh look another blog',
      publishedAt: 'May 22, 2022',
      topics: ['Typescript', 'Tailwindcss'],
      blurb:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec sodales dolor, sit amet semper tellus. Duis interdum elit sit amet varius vehicula. Aliquam nec ex nibh. Duis bibendum vel sapien eget vulputate.',
    },
    {
      title: 'and another one',
      publishedAt: 'May 22, 2022',
      topics: ['React'],
      blurb:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec sodales dolor, sit amet semper tellus. Duis interdum elit sit amet varius vehicula. Aliquam nec ex nibh. Duis bibendum vel sapien eget vulputate.',
    },
  ];
  return (
    <>
      <div
        className="mt-96 flex w-full flex-col items-center justify-center gap-16"
        id="blog"
      >
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [30, 0], opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="flex w-2/3 justify-center lg:w-1/2"
        >
          <p className="mb-5 w-full text-justify text-2xl font-light text-white md:mb-6 lg:mb-7 lg:w-2/3 lg:text-3xl">
            Sometimes I write about what I am learning or the things I have
            made.
          </p>
        </motion.div>
        {blogList.map((blog, key) => {
          return (
            <motion.div
              key={key}
              className="flex min-h-[200px] w-10/12 flex-col items-center justify-center gap-y-1 overflow-hidden rounded-[20px]
                         bg-primaryDark dark:bg-primary md:w-1/2 xl:w-[800px]"
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: [50, 0], opacity: 1 }}
              viewport={{ once: true, margin: '-150px' }}
              transition={{ duration: 1 }}
            >
              <div className="mt-6 flex w-10/12 flex-col items-start justify-between gap-y-2 lg:flex-row lg:gap-y-0">
                <h2 className="text-xl font-bold text-white md:text-3xl">
                  {blog.title}
                </h2>
                <p className="text-sm font-light text-white md:text-base">
                  {blog.publishedAt}
                </p>
              </div>
              <div className="mt-4 mb-6 flex w-10/12 flex-col-reverse gap-y-6 lg:flex-col lg:gap-y-2">
                <div className="mb-3 flex flex-wrap gap-5">
                  {blog.topics.map((topic, key) => {
                    return (
                      <p
                        key={key}
                        className="overflow-hidden rounded-3xl bg-primary px-2 py-1 text-xs text-white dark:bg-primaryDark"
                      >
                        {topic}
                      </p>
                    );
                  })}
                </div>
                <p className="text-sm text-white md:text-base">{blog.blurb}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default BlogSection;
