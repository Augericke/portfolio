import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/layout';
import MDXComponents from '../components/pages/blog/MDXComponents';

import '../styles/globals.css';
import '../styles/prism-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </>
  );
}

export default MyApp;
