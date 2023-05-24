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
import { FaGithub } from "react-icons/fa";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Link,
} from "@chakra-ui/react";

function Projects(data) {
  // const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>{data.about}</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Box ref={ref}>
          <VStack alignItems="flex-start">
            <HStack mb={4} w="100%" justifyContent="space-between">
              <HStack>
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
              <Link href={data.github} isExternal>
                <FaGithub />
              </Link>
            </HStack>
            <Link isExternal href="https://twitter.com/sanitbandekar">
              <Image borderRadius={4} src={data.img} w="100%" />
            </Link>
            <HStack m={4} justifyContent="space-between" spacing={5}>
              <Icon as={FiHeart} />
              <Icon as={FaRegComment} />
              <Icon as={SlPaperPlane} />
            </HStack>
            <HStack>
              <Text noOfLines={1} onClick={onOpen}>
                {" "}
                <Text as="b" fontSize="sm" marginEnd={2}>
                  {data.name}
                </Text>
                {data.about}
              </Text>
            </HStack>
          </VStack>
        </Box>
      </ScaleFade>
    </Box>
  );
}

export default Projects;
