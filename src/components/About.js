import {
  Text,
  VStack,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import React from "react";

function About() {
  return (
    <VStack alignItems="flex-start">
      <Heading>Hello!👋</Heading>
      <Text>
        Hey, my name is Sanit Bandekar. I'm an Android developer & Full-stack
        developer from India. I enjoy creating things with new technologies that
        live on the Internet, and I’m always curious to learn more!
      </Text>
      <Text>Here are a few technologies I’ve been working with recently:</Text>
      <HStack
        justifyContent="space-around"
        width="100%"
        alignItems="flex-start"
      >
        <VStack>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Android
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Java
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Kotlin
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Figma
            </ListItem>
          </List>
        </VStack>
        <VStack>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              React
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Node.js
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              JavaScript (ES6+)
            </ListItem>
            {/* You can also use custom icons from react-icons */}
          </List>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default About;
