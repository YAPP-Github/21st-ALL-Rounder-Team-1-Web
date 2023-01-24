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
	webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
	images: {
		domains: ["images.unsplash.com"],	// S3 버킷 이미지 리소스 출처 오픈 시 연결 필요
	}
};

module.exports = nextConfig;
