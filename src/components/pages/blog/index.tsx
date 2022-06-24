import React from 'react';
import BlogCard from '../../library/blogCard';
import AnimatedTitle from '../../library/animations/animatedTitle';

type BlogProps = {
  blogs: any;
};

const Blog: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <>
      <div className="flex min-h-screen justify-center">
        <div className="mt-24 flex w-10/12 flex-col items-center gap-y-4">
          <div className="">
            <AnimatedTitle
              text={'All Posts'}
              customClassName="leading-[0px] mr-3  text-4xl font-bold text-white lg:text-5xl"
              customHeaderClass={'text-left'}
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
          </div>
          {blogs.map((blog: any, key: any) => {
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
        </div>
      </div>
    </>
  );
};

export default Blog;
