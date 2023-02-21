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
			},
			{
				protocol: 'https',
				hostname: 'pump-img-bucket.s3.ap-northeast-2.amazonaws.com',
				port: '',
				pathname: '/**'
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
	env: {
		NTS_API_BASE_URL: process.env.NTS_API_BASE_URL,
		NTS_API_KEY: process.env.NTS_API_KEY,
		S3_UPLOAD_KEY: process.env.S3_UPLOAD_KEY,
		S3_UPLOAD_URL: process.env.S3_UPLOAD_URL,
		S3_UPLOAD_SECRET: process.env.S3_UPLOAD_SECRET,
		S3_UPLOAD_BUCKET: process.env.S3_UPLOAD_BUCKET,
    	S3_UPLOAD_REGION: process.env.S3_UPLOAD_REGION,
		API_BASE_URL: process.env.API_BASE_URL,
		KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
		KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
		KAKAO_MAP_REST_KEY: process.env.KAKAO_MAP_REST_KEY,
		NAVER_CLIENT_ID: process.env.NAVER_CLIENT_ID,
		NAVER_CLIENT_SECRET: process.env.NAVER_CLIENT_SECRET,
		BASE_URL: process.env.BASE_URL,
	}
};

module.exports = nextConfig;
