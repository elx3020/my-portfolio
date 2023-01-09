import { useEffect } from "react";

export default function useLoading(handleFunction: Function) {
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
