import { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start, domRef, state) {
  useEffect(() => {
    if (!start) return;

    // const scrollEl = document.querySelector("#main-container");
    const locoScroll = new locomotiveScroll({
      el: domRef.current,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
      repeat: false,
      getDirection: true,
      reloadOnContextChange: true,
      mobile: {
        smooth: false,
        getDirection: true,
        repeat: false,
      },
      tablet: {
        smooth: false,
        getDirection: true,
      },
    });
    state(locoScroll);

    return function clean() {
      // cleaning scroll
      state(null);
      locoScroll.destroy();
    };
  }, [start]);
}
