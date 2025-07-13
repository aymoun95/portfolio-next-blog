import { Tag } from '@chakra-ui/react';

const TagComponent = ({ children, color, ...props }) => (
  <>
    <Tag
      fontSize=".9rem"
      fontWeight="600"
      color="whiteAlpha.900"
      backgroundColor={color.bgColor}
      minHeight="2rem"
      mr=".5rem"
      mb="7px"
      p=".3rem .75rem"
      cursor="pointer"
      transitionDuration="250ms"
      userSelect="none"
      _hover={{ backgroundColor: color.hover }}
      {...props}>
      {children}
    </Tag>
  </>
);

export default TagComponent;
