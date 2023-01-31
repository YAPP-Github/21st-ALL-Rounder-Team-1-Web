/** @type {import('next').NextConfig} */

const withImages = require("next-images");
const nextConfig = {
	
	experimental: {
		appDir: true,
	},
	compiler: {
		styledComponents: true,
	},
	swcMinify: true,
	reactStrictMode: true,
	webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
	withImages({
		images: {
		  disableStaticImages: true,
		  domains: ['https://pump-img-bucket.s3.ap-northeast-2.amazonaws.com/store/'],
		},
	  });
    return config
  },


};

module.exports = nextConfig;
