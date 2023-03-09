import {
  Box,
  HStack,
  Image,
  Text,
  // useMediaQuery,
  VStack,
  ScaleFade,
  Icon,
} from "@chakra-ui/react";

import { FaRegComment } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { SlPaperPlane } from "react-icons/sl";
import { useInViewport } from "react-in-viewport";
import React, { useRef } from "react";

function Projects() {
  // const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-100px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Box margin="0 0 5% 0">
      <ScaleFade
        initialScale={0.9}
        in={enterCount > 0}
        // whileHover={{ scale: 1 }}
      >
        <Box ref={ref}>
          <VStack alignItems="flex-start">
            <HStack mb={4}>
              <Image
                src="https://avatars.githubusercontent.com/u/80850517?s=400&u=fd88858d67342799c62e4e2a4b3ab5fe8a6d0ec3&v=4"
                alt="Sanit bandekar"
                maxW={{ base: "10vw", sm: "5vw", lg: "3vw", xl: "2vw" }}
                borderRadius="full"
              />
              <Text as="b" mb={2}>
                Sanit Bandekar
              </Text>
            </HStack>
            <Image borderRadius={4} src="https://bit.ly/dan-abramov" w="100%" />
            <HStack m={4} justifyContent="space-between" spacing={5}>
              <Icon as={FiHeart} />
              <Icon as={FaRegComment} />
              <Icon as={SlPaperPlane} />
            </HStack>
            <HStack>
              <Text as="b" fontSize="sm">
                Project Name :
              </Text>
              <Text>About Project</Text>
            </HStack>
          </VStack>
        </Box>
      </ScaleFade>
    </Box>
  );
}

export default Projects;
