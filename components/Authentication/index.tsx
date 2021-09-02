import Register from "./Register";
import googleIcon from "../../icons/g-normal.png";
import useUser, { USER_STATES } from "../../hooks/useUser";
import { loginWithGoogle } from "../../firebase";
import Image from 'next/image';
import { Button, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useEffect } from "react";
import useMatchQuery from "../../hooks/useMatchQuery";
import Login from "./Login";

export const QUERY = "registering";

const Authentication = (): JSX.Element => {
  const user = useUser();
  const { replace } = useRouter();
  
  useEffect(() => {
    user && replace("/todo");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const isRegistering = useMatchQuery(QUERY);
  return (
    <>
      {
        isRegistering ? <Register /> : <Login />
      }
      <NextLink href={{query: { registering: !isRegistering }}} passHref replace>
        <Link color="teal.400">{isRegistering ? "Already have an account?" : "New? Create an account"}</Link>
      </NextLink>
      <Button
        backgroundColor="white"
        color="black"
        colorScheme="whiteAlpha"
        isLoading={user === USER_STATES.NOT_KNOWN}
        leftIcon={<Image alt="Google" src={googleIcon} />}
        onClick={loginWithGoogle}
      >Google
      </Button>
    </>
  );
};

export default Authentication;
