import React from 'react';
import Head from 'next/head';
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
      <div className="flex min-h-[80vh] justify-center pt-16 md:pt-32">
        <div
          className="flex w-screen flex-col items-center justify-start bg-stone-100
                      md:w-9/12 md:rounded-xl"
        >
          <div
            className="flex w-full items-center justify-center bg-primaryDark
                      shadow-md dark:bg-primary md:rounded-t-xl"
          >
            <div className="my-8 flex h-fit w-11/12 flex-col gap-3 sm:w-10/12">
              <p className="text-sm text-white opacity-80">
                {formatDate(meta.publishedAt, 'LLL d, yyyy')}
              </p>
              <h1 className="text-4xl font-bold text-primary dark:text-primaryDark md:text-5xl">
                {meta.title}
              </h1>
              <div className="mt-3 flex flex-wrap gap-5">
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
              </div>
            </div>
          </div>
          <div className="my-10 h-fit w-11/12 sm:w-10/12">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Post;
