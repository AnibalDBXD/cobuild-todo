import { useEffect, useState } from "react";
import { onAuthStateChanged } from "../firebase";
import { useRouter } from "next/router";

type IUser = string | null | undefined;

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser(): IUser  {
  const [user, setUser] = useState<IUser>(USER_STATES.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged((user) => setUser(user));
  }, []);

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/");
  }, [router, user]);

  return user;
}
