import { MDXComponents } from 'mdx/types';

const MDXComponents: MDXComponents = {
  p: (props: any) => <p className="text-lg" {...props} />,
};

export default MDXComponents;
