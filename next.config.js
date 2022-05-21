const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  experimental: { esmExternals: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'removeViewBox',
                active: false
              }
             ]
          }
        }
      }]
    });

    return config
  }
});
