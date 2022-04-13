import { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start, domRef) {
  useEffect(() => {
    if (!start) return;

    // const scrollEl = document.querySelector("#main-container");
    const locoScroll = new locomotiveScroll({
      el: domRef.current,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
      repeat: true,
      mobile: {
        breakpoint: 0,
        smooth: false,
        getDirection: true,
        multiplier: 3,
      },
      tablet: {
        breakpoint: 0,
        smooth: true,
        getDirection: true,
      },
    });

    return function clean() {
      // cleaning scroll
      locoScroll.destroy();
    };
  }, [start]);
}
