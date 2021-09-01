import { Stack, Heading, Button } from "@chakra-ui/react";
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { loginWithGoogle } from "../firebase";
import useUser, { USER_STATES } from "../hooks/useUser";
import googleIcon from "../icons/g-normal.png";

const Home: NextPage = () => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/todo");
  }, [router, user]);

  return (
    <Stack alignSelf="center" marginTop="30%" spacing="1rem" width="60%">
      <Heading textAlign="center">Login with</Heading>
      <Button
        backgroundColor="white"
        color="black"
        colorScheme="whiteAlpha"
        isLoading={user === USER_STATES.NOT_KNOWN}
        leftIcon={<Image alt="Google" src={googleIcon} />}
        onClick={loginWithGoogle}
      >Google
      </Button>
    </Stack>
  );
};

export default Home;
