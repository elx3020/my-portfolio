import { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#main-container");
    const locoScroll = new locomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
      repeat: true,
      mobile: {
        breakpoint: 0,
        smooth: true,
        getDirection: true,
        touchMultiplier: 2,
      },
      tablet: {
        breakpoint: 0,
        smooth: false,
        getDirection: true,
        touchMultiplier: 2,
      },
    });

    return function clean() {
      // cleaning scroll
      // locoScroll.destroy();
    };
  }, [start]);
}
