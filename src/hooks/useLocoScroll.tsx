import { useEffect, useState } from "react";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import imagesLoaded from "imagesloaded";

export default function useLocoScroll(currentPage: string) {
  const [scroll, setScroll] = useState<null | locomotiveScroll>(null);
  useEffect(() => {
    const locoScroll = new locomotiveScroll({
      el: document.querySelector("#main-container") as HTMLElement,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
      repeat: false,
      getDirection: true,
      reloadOnContextChange: true,
      smartphone: {
        smooth: false,
      },
      tablet: {
        breakpoint: 10,
        smooth: false,
        direction: "vertical"

      },
    });

    setScroll(locoScroll);
    imagesLoaded(document.querySelector("#main-container") as ImagesLoaded.ElementSelector, function () {
      locoScroll.update();
    });

    return function clean() {
      // cleaning scroll
      locoScroll.destroy();
    };
  }, [currentPage]);
  return scroll;
}
