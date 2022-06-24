import { MDXComponents } from 'mdx/types';

const MDXComponents: MDXComponents = {
  h1: (props: any) => (
    <h1
      className="pt-10 text-3xl font-bold text-primaryDark sm:text-4xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="pt-4 text-xl font-bold text-primaryDark sm:text-2xl"
      {...props}
    />
  ),
  p: (props: any) => <p className="py-2 text-lg" {...props} />,
};

export default MDXComponents;
