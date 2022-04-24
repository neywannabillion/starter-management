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
    config.resolve.alias['@components'] = path.join(__dirname, 'components')
    config.resolve.alias['@static'] = path.join(__dirname, '/public/static')
    config.resolve.alias['@libs'] = path.join(__dirname, 'libs')
    config.resolve.alias['@store'] = path.join(__dirname, 'store')
    config.resolve.alias['@styles'] = path.join(__dirname, '/public/static/css')
    return config
  }
}
