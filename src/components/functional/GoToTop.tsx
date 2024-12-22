import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GoToTop() {
  const routePath = useLocation();
  const onTop = () => {
    // fade-in class is used to animate the page content
    const el = document.querySelector(".page-content");
    if (el) {
      el?.classList.remove("fade-in");
      el?.classList.add("fade-in");
    }
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return null;
}
