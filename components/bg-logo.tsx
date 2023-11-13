"use client";

import * as React from "react";
import { SVGProps } from "react";
import { motion } from "framer-motion";

export const BgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={789}
    height={608}
    viewBox="0 0 789 608"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="bg">
      <motion.path
        id="Vector 50"
        initial={{ pathLength: 0, stroke: "#21CD9C" }}
        animate={{
          pathLength: 1,
          transition: { duration: 10, ease: "linear", repeat: Infinity },
        }}
        d="M423.171 143.385L421.249 6L691.462 251.757L429.539 506L427.545 365.421L543.523 252.844L423.171 143.385Z"
        stroke="#21CD9C"
        strokeWidth={5}
      />
      <motion.path
        id="Vector 138"
        initial={{ pathLength: 0, stroke: "#21CD9C" }}
        animate={{
          pathLength: 1,
          transition: { duration: 10, ease: "linear", repeat: Infinity },
        }}
        d="M349 199H443.878L517 251.5H408.5L377 392H349"
        stroke="#21CD9C"
        strokeWidth={5}
      />
      <motion.path
        id="Vector 139"
        initial={{ pathLength: 0, stroke: "#21CD9C" }}
        animate={{
          pathLength: 1,
          transition: { duration: 10, ease: "linear", repeat: Infinity },
        }}
        d="M349 199H252L177 251.5H288.5L319 392H349"
        stroke="#21CD9C"
        strokeWidth={5}
      />
      <motion.path
        id="Vector 50_2"
        initial={{ pathLength: 0, stroke: "#21CD9C" }}
        animate={{
          pathLength: 1,
          transition: { duration: 10, ease: "linear", repeat: Infinity },
        }}
        d="M272.291 143.385L274.213 6L3.99999 251.757L265.923 506L267.917 365.421L151.939 252.844L272.291 143.385Z"
        stroke="#21CD9C"
        strokeWidth={5}
      />
    </g>
  </svg>
);
