import React from "react";
import { SpaceShipSvg } from "./spaceShipSvg";
import { SupportSvg } from "./supportSvg";
import { CycAnimation } from "./cycle";
import { TrainingCycle } from "./training-cycle";
import { BgLines } from "./bg-lines";
import { BgLogo } from "./bg-logo";

const Hero = () => {
  return (
    <div className="w-screen ">
      <div className="flex flex-col justify-center items-center">
        <BgLogo />
        {/* <BgLines /> */}
        {/* <TrainingCycle /> */}
        {/* <SpaceShipSvg className="w-52 h-52" />
        <SupportSvg className="w-44 h-44" />
        <CycAnimation className="w-96 h-96" /> */}
        <p>SVG animation</p>
      </div>
    </div>
  );
};

export default Hero;
