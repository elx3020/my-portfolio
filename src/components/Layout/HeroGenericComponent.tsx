import React from "react";
import { ComponentBT } from "../../types/globalTypes";

export type HeroComponentProps = {
  className: string, fontSize: number, text: string, figure: string
} 

export default function HeroGenericComponent(props: ComponentBT<'single'> ) {
  const { className, styleOptions, image_Url, textContent } = props;

  return (
    <div className={className} style={{ fontSize: styleOptions?.fontSize, }}  data-scroll>
      <img src={image_Url} alt="" />
      <h1 data-scroll data-scroll-speed="-1">
        {textContent}
      </h1>
      {props.children}
    </div>
  );
}
