import { Stack, Heading, Button } from "@chakra-ui/react";
import type { NextPage } from 'next';
import { useRouter } from "next/router";
import Image from 'next/image';
import googleIcon from "../icons/g-normal.png";
const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <Stack alignSelf="center" marginTop="30%" spacing="1rem" width="60%">
      <Heading textAlign="center">Login with</Heading>
      <Button
        backgroundColor="white"
        color="black"
        colorScheme="whiteAlpha"
        leftIcon={<Image alt="Google" src={googleIcon} />}
        onClick={(): void =>{ push("/todo"); }}
      >Google
      </Button>
    </Stack>
  );
};

export default Home;
