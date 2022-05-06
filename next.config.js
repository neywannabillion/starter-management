const path = require('path')

module.exports = {
  useFileSystemPublicRoutes: true,
  modern: true,
  experimental: { esmExternals: true },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  }
}
