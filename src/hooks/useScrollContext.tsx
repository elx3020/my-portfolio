import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import  { createContext, useContext, useEffect, useMemo, useState } from "react";

import imagesLoaded from "imagesloaded";

export type ScrollContextType = {
  scroll: LocomotiveScroll;
  scrollDirection: string;
}

type LMScrollEvent = LocomotiveScroll.OnScrollEvent & {
    direction: 'up' | 'down' | null;
  }


const ScrollProvider = createContext({} as ScrollContextType);



const ScrollStateProvider = (props: { children: any, scrollElementRef: React.RefObject<HTMLDivElement>, currentPage: string }) => {
    const [scroll, setScroll] = useState<locomotiveScroll>({} as locomotiveScroll);
    const [scrollDirection, setScrollDirection] = useState("");

 
  const { children, scrollElementRef,currentPage } = props;
  
  useEffect(() => {
    
    const locoScroll = new locomotiveScroll({
      el: scrollElementRef.current!,
      smooth: true,
      multiplier: 1,
      touchMultiplier: 2,
      class: "is-reveal",
      repeat: true,
      getDirection: true,
      reloadOnContextChange: true,
      smartphone: { 
        direction: "vertical",
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
    
    if (Object.keys(scroll).length === 0) return;

    scroll.scrollTo('top',{duration: 0,disableLerp: true})

    imagesLoaded(document.querySelector("#main-container") as ImagesLoaded.ElementSelector, function () {
      scroll.update();
    });

   
  }, [currentPage]);

  

    
    const memo = useMemo(() => ({ scroll, scrollDirection }), [scroll, scrollDirection]);

    return <ScrollProvider.Provider value={memo}>{children}</ScrollProvider.Provider>;
    
    
};

export default ScrollStateProvider;

export const useScrollContext = () => { 
    return useContext(ScrollProvider);
}
