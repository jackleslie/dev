module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/japan2026',
        destination: 'https://docs.google.com/document/d/15RRmzpQb8byk-89Ai7pt1-4O7w86IQL7mDi_xVfmRjk/edit?usp=sharing',
        basePath: false,
        permanent: false,
      }
    ]
  }
};