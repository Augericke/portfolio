module.exports = {
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [require('remark-prism')],
            rehypePlugins: [],
          },
        },
      ],
    });

    return config;
  },
  webpack5: true,
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};
