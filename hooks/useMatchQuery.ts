import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useMatchQuery = (match: string): boolean => {
  const { query } = useRouter();
  const [isMatch, setMatch] = useState(query[match] === "true");

  useEffect(() => {
    setMatch(query[match] === "true");
  }, [match, query]);

  return isMatch;
};

export default useMatchQuery;