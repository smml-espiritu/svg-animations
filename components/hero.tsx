import React from "react";
import { SpaceShipSvg } from "./spaceShipSvg";
import { SupportSvg } from "./supportSvg";
import { CycAnimation } from "./cycle";
import { TrainingCycle } from "./training-cycle";
import { BgLines } from "./bg-lines";
import { BgLogo } from "./bg-logo";
import { SvgGear } from "./svg-gear";
import { SvgLearning } from "./svg-learning";

const Hero = () => {
  return (
    <div className="w-screen">
      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl font-extrabold">Techstacks SVG animation</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="w-96 h-96 border border-green-100">
            <SvgGear className="w-80 h-80" />
          </div>
          <div className="w-96 h-96 flex  border border-green-100">
            <BgLogo className="w-80 h-80" />
          </div>
          <div className="w-96 h-96 border border-green-100">
            <TrainingCycle className="w-80 h-80" />
          </div>
          <div className="w-96 h-96 border border-green-100">
            <SpaceShipSvg className="w-80 h-80" />
          </div>
          <div className="w-96 h-96 border border-green-100">
            <SupportSvg className="w-80 h-80" />
          </div>
          <div className="w-96 h-96 border border-green-100">
            <SvgLearning className="w-80 h-80" />
          </div>
        </div>
        <BgLogo className="w-80 h-80" />
      </div>
    </div>
  );
};

export default Hero;
