import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ShowDirection = 'up' | 'down' | 'left' | 'right' | 'none';

const ShowDirectionTranslateTable = {
	none: {
		x: 0,
		y: 0,
	},
	up: {
		x: 0,
		y: 10,
	},
	down: {
		x: 0,
		y: -10,
	},
	left: {
		x: 10,
		y: 0,
	},
	right: {
		x: -10,
		y: 0,
	},
} as const;

const MotionShowBox = ({
	showDirection,
	duration = 1,
	delay = 0,
	children,
}: {
	showDirection: ShowDirection;
	duration?: number;
	delay?: number;
	children: ReactNode;
}) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				translateX: ShowDirectionTranslateTable[showDirection].x,
				translateY: ShowDirectionTranslateTable[showDirection].y,
			}}
			whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
			transition={{ duration, delay: delay * 0.2 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
};

export default MotionShowBox;
