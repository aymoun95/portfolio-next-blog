import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);

export const AnimatedFlex = ({ children, ...props }) => {
  return <MotionFlex {...props}>{children}</MotionFlex>;
};
