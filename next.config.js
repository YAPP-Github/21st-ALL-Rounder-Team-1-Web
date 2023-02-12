/** @type {import('next').NextConfig} */

const nextConfig = {
	
	experimental: {
		appDir: true,
	},
	compiler: {
		styledComponents: true,
	},
	swcMinify: true,
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pump-img-bucket.s3.ap-northeast-2.amazonaws.com',
				port: '',
				pathname: '/store/**'
			}
		]
	},
	webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
};

module.exports = nextConfig;
