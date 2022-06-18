import { Container, Box, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function () {
  return (
    <Container>
      <Box
        borderRadius={"lg"}
        bg="red"
        p={3}
        textAlign="center"
        color={"white"}
      >
        Hello, I&apos;m a mobile app developer base in phnom penh, cambodia!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as={"h2"} variant="page-title">
            Roth Dev
          </Heading>
          <p>React Native developer (android / ios) </p>
        </Box>
      </Box>
    </Container>
  );
}
