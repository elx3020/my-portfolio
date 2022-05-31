import { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start, domRef) {
  useEffect(() => {
    const locoScroll = new locomotiveScroll({
      el: document.querySelector("#main-container"),
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

    const timeout = setTimeout(() => {
      locoScroll.start();
    }, 3000);

    return function clean() {
      // cleaning scroll
      if (locoScroll === undefined) return;
      clearTimeout(timeout);
      locoScroll.destroy();
    };
  }, [start]);
}
