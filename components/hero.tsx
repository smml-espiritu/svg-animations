import React from "react";
import { SpaceShipSvg } from "./spaceShipSvg";
import { SupportSvg } from "./supportSvg";

const Hero = () => {
  return (
    <div className="w-screen ">
      <div className="flex flex-col justify-center items-center">
        <SpaceShipSvg className="w-64 h-64" />
        <SupportSvg className="w-64 h-64" />
        <p>SVG animation</p>
      </div>
    </div>
  );
};

export default Hero;
