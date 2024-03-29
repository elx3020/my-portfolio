import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useCurrentPage(handleFunction: Function) {
  const currentPage = useLocation();
  useEffect(() => {
    handleFunction(currentPage.pathname);
  }, []);
}
