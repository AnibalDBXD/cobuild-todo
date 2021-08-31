import { Stack, Heading, Button } from "@chakra-ui/react";
import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <Stack>
      <Heading>Login with</Heading>
      <Button>Google</Button>
    </Stack>
  );
};

export default Home;
