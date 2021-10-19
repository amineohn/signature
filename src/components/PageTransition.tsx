import { SlideFade } from "@chakra-ui/transition";
const PageTransition = ({ children }) => {
  return <SlideFade in>{children}</SlideFade>;
};

export default PageTransition;
