import { useEffect, useState } from "react";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import imagesLoaded from "imagesloaded";

export default function useLocoScroll(start) {
  const [scroll, setScroll] = useState(null);
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

    setScroll(locoScroll);
    imagesLoaded(document.querySelector("#main-container"), function () {
      locoScroll.update();
    });

    return function clean() {
      // cleaning scroll
      locoScroll.destroy();
    };
  }, [start]);
  return scroll;
}
