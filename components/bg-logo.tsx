"use client";

import * as React from "react";
import { SVGProps } from "react";
import { motion } from "framer-motion";

export const BgLogo = (props: SVGProps<SVGSVGElement>) => {
  const paths = [
    "M423.171 143.385L421.249 6L691.462 251.757L429.539 506L427.545 365.421L543.523 252.844L423.171 143.385Z",
    "M349 199H443.878L517 251.5H408.5L377 392H349",
    "M349 199H252L177 251.5H288.5L319 392H349",
    "M272.291 143.385L274.213 6L3.99996 251.757L265.923 506L267.917 365.421L151.939 252.844L272.291 143.385Z",
  ];

  return (
    <svg
      width={789}
      height={608}
      viewBox="0 0 687.48 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="bg">
        {paths.map((path, index) => (
          <motion.path
            key={index}
            initial={{ pathLength: 0, stroke: "#21CD9C" }}
            animate={{
              pathLength: 1,
              transition: { duration: 1, ease: "linear", repeat: Infinity },
            }}
            d={path}
            stroke="#21CD9C"
            strokeWidth={5}
          />
        ))}
      </g>
    </svg>
  );
};
