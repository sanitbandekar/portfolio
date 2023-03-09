import {
  Image,
  VStack,
  IconButton,
  Heading,
  useColorMode,
  HStack,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, DownloadIcon, EmailIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Projects from "./components/Projects";
import About from "./components/About";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import resume from "./resume.pdf";

function App() {
  function getYear() {
    return new Date().getFullYear();
  }
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack>
      <VStack
        p={2}
        m="auto"
        maxW={{ base: "90vw", sm: "60vw", lg: "45vw", xl: "35vw" }}
      >
        <HStack width="100%" justifyContent="space-between">
          <Heading size="md" fontWeight="bold">
            Sanit Bandekar
          </Heading>
          <IconButton
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            isRound="true"
            size="sm"
            onClick={toggleColorMode}
          />
        </HStack>
        <VStack alignItems="flex-start">
          <Image
            borderRadius="full"
            boxSize="100px"
            src="https://avatars.githubusercontent.com/u/80850517?s=400&u=fd88858d67342799c62e4e2a4b3ab5fe8a6d0ec3&v=4"
            alt="Sanit bandekar"
          />

          <Text as="b" fontSize="xl">
            Sanit Bandekar
          </Text>

          <Text w="80%">
            I enjoy creating things with new technologies that live on Internet
            Brings ideas to life with code ✨
          </Text>
          <HStack>
            <a href={resume} target="_blank" rel="noopener noreferrer" download>
              <Button rightIcon={<DownloadIcon />}> Resume</Button>
            </a>
            <Button
              leftIcon={<EmailIcon />}
              colorScheme="blue"
              variant="solid"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:sanitbandekar@gmail.com";
              }}
            >
              Email
            </Button>
          </HStack>
        </VStack>
      </VStack>
      <Tabs
        w="100%"
        isFitted
        maxW={{ base: "90vw", sm: "60vw", lg: "45vw", xl: "35vw" }}
      >
        <TabList>
          <Tab>Projects</Tab>
          <Tab>About</Tab>
        </TabList>

        <TabPanels minHeight="55vh">
          <TabPanel>
            <Projects />
            <Projects />
          </TabPanel>
          <TabPanel>
            <About />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <VStack p={4}>
        <HStack width="100%" justifyContent="center">
          <Link href="https://www.instagram.com/sanit_bandekar/" isExternal>
            <FaInstagram />
          </Link>
          <Link href="https://github.com/sanitbandekar" isExternal>
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sanit-bandekar-4a33a97b/"
            isExternal
          >
            <FaLinkedin />
          </Link>
          <Link href="https://twitter.com/sanitbandekar">
            <FaTwitter />
          </Link>
        </HStack>
        <HStack>
          <Text>Sanit Bandekar</Text>
          <BiCopyright />
          <Text>{getYear()}</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default App;
