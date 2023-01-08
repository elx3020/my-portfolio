import { useEffect } from "react";

export default function useLoading(handleFunction) {
  useEffect(() => {
    setTimeout(() => {
      handleFunction();
      console.log("in");
    }, 1000);
    return () => {
      handleFunction();
      console.log("out");
    };
  }, []);
}
