import { Stack, Heading } from "@chakra-ui/react";
import type { NextPage } from 'next';
import Authentication, { QUERY } from "../components/Authentication";
import useMatchQuery from "../hooks/useMatchQuery";

const Home: NextPage = () => {
  const isRegistering = useMatchQuery(QUERY);
  return (
    <Stack alignSelf="center" marginTop="30%" spacing="1rem" width="60%">
      <Heading textAlign="center">{isRegistering ? "Log in with" : "Sign in with"}</Heading>
      <Authentication />
    </Stack>
  );
};

export default Home;
