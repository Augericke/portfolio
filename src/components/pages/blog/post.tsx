import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AnimatedTitle from '../../library/animations/animatedTitle';
import { motion } from 'framer-motion';
import { FaChevronLeft } from 'react-icons/fa';
import { formatDate } from '../../../utils/dateComputer';

type PostProps = {
  children: React.ReactElement;
  meta: any;
};

const Post: React.FC<PostProps> = ({ meta, children }) => {
  return (
    <>
      <Head>
        <title>Blog | {meta.title}</title>
        <meta name={`Blog | ${meta.title}`} content={meta.abstract} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden w-1/12 justify-center pt-24 text-3xl text-white md:flex">
        <Link href="/blog">
          <a>
            <FaChevronLeft />
          </a>
        </Link>
      </div>
      <div className="flex min-h-[80vh] justify-center pt-16 md:pt-5">
        <div
          className="flex w-screen flex-col items-center justify-start bg-stone-100
                      md:w-9/12 md:rounded-xl"
        >
          <div
            className="flex w-full items-center justify-center bg-primaryDark
                      shadow-md dark:bg-primary md:rounded-t-xl"
          >
            <div className="my-8 flex h-fit w-11/12 flex-col gap-4 sm:w-10/12">
              <p className="text-sm text-white opacity-80">
                {formatDate(meta.publishedAt, 'LLL d, yyyy')}
              </p>
              <AnimatedTitle
                text={meta.title}
                customClassName="lg leading-[0px] mt-6 md:mt-0 mr-3 text-4xl font-bold text-primary dark:text-primaryDark md:text-5xl"
                wordDelay={0.1}
                customAnimation={{
                  hidden: {
                    opacity: 0,
                    y: '0.25em',
                  },
                  visible: {
                    opacity: 1,
                    y: '0em',
                    transition: {
                      duration: 1.5,
                      ease: 'backInOut',
                    },
                  },
                }}
              />
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: [30, 0], opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 1.5, duration: 1.5, ease: 'backInOut' }}
                className="mt-3 flex flex-wrap gap-5"
              >
                {meta.tags.map((tag: string, key: number) => {
                  return (
                    <p
                      key={key}
                      className="overflow-hidden rounded-3xl bg-primary px-3 py-1 text-xs
                               text-white dark:bg-primaryDark"
                    >
                      <span className="opacity-90">{tag}</span>
                    </p>
                  );
                })}
              </motion.div>
            </div>
          </div>
          <div className="-mt-5 mb-10 h-fit w-11/12 sm:w-10/12">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Post;
