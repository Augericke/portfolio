import React from 'react';
import { motion } from 'framer-motion';
import { formatDate } from '../../../utils/dateComputer';
import Link from 'next/link';

type BlogCardProps = {
  title: string;
  abstract: string;
  publishedAt: string;
  tags: string[];
  slug: string;
};

const BlogCard: React.FC<BlogCardProps> = (props: BlogCardProps) => {
  const { title, abstract, publishedAt, tags, slug } = props;

  return (
    <>
      <Link href={slug}>
        <a className="min-h-[200px] w-10/12 rounded-[20px] md:w-2/3 xl:w-[800px]">
          <motion.div
            className="flex flex-col items-center justify-center gap-y-1 overflow-hidden rounded-[20px]
                        bg-primaryDark dark:bg-primary"
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            viewport={{ once: true, margin: '-150px' }}
            transition={{ duration: 1 }}
          >
            <div className="mt-6 flex w-10/12 flex-col items-start justify-between gap-y-2 lg:flex-row lg:gap-y-0">
              <h2 className="text-xl font-bold text-white md:text-3xl">
                {title}
              </h2>
              <p className="text-sm font-light text-white md:text-base">
                {formatDate(new Date(publishedAt), 'LLL d, yyyy')}
              </p>
            </div>
            <div className="mt-4 mb-6 flex w-10/12 flex-col-reverse gap-y-6 lg:flex-col lg:gap-y-2">
              <div className="mb-3 flex flex-wrap gap-5">
                {tags.map((tag, key) => {
                  return (
                    <p
                      key={key}
                      className="overflow-hidden rounded-3xl bg-primary px-2 py-1 text-xs text-white dark:bg-primaryDark"
                    >
                      {tag}
                    </p>
                  );
                })}
              </div>
              <p className="text-sm text-white md:text-base">{abstract}</p>
            </div>
          </motion.div>
        </a>
      </Link>
    </>
  );
};

export default BlogCard;
