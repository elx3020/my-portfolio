import { useEffect, useState, useMemo } from "react";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import imagesLoaded from "imagesloaded";


type LMScrollEvent = LocomotiveScroll.OnScrollEvent & {
  direction: 'up' | 'down' | null;
}

export default function useLocoScroll(currentPage: string,scrollRef: React.RefObject<HTMLDivElement>) {
  const [scroll, setScroll] = useState<null | locomotiveScroll>(null);
  const [scrollDirection, setScrollDirection] = useState("");
  
  useEffect(() => {

    if (scroll) return;
    const locoScroll = new locomotiveScroll({
      el: scrollRef.current!,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
      repeat: true,
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
    })
    setScroll(locoScroll);

    locoScroll.on("scroll", (args) => {
      const event = args as LMScrollEvent
      const scrollHorizontal = event.direction;
      
      // ignore when the event return null
      if (scrollHorizontal === null) return;

      setScrollDirection(scrollHorizontal);
      
    });
 
  }, []);

 
 
  useEffect(() => {
    
    if (!scroll) return;

    scroll.scrollTo('top',{duration: 0,disableLerp: true})

    imagesLoaded(document.querySelector("#main-container") as ImagesLoaded.ElementSelector, function () {
      scroll.update();
    });

   
  }, [currentPage]);
  return {scroll,scrollDirection};
}
