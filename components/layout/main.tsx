import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Router } from "next/router";
import Navbar from "../navbar";
interface Props {
  children: React.ReactNode;
  router: Router;
}
const Main: FunctionComponent<Props> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width initail-scale=1" />
        <title>Roth Dev - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
