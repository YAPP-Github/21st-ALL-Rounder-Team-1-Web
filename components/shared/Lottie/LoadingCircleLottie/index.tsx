import React from 'react';
import loadingCircleMotionJSON from './loading-circle-motion.json';
import Lottie from 'lottie-react';

const LoadingCircleLottie = () => {
	return <Lottie animationData={loadingCircleMotionJSON} loop={true} />;
};

export default LoadingCircleLottie;
