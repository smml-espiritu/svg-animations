"use client";

import * as React from "react";
import { SVGProps } from "react";
import { motion } from "framer-motion";

export const BgLines = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={1316}
    height={650}
    viewBox="0 0 1316 650"
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
        d="M343.048 244.732L252.013 141.827L576.764 185.884L584.115 515.661L490.947 410.378L487.692 264.355L343.048 244.732Z"
        stroke="#21CD9C"
        strokeWidth={3}
      />
      <motion.path
        id="Vector 56"
        initial={{ pathLength: 0, stroke: "#21CD9C" }}
        animate={{
          pathLength: 1,
          transition: { duration: 10, ease: "linear", repeat: Infinity },
        }}
        d="M442.713 492.967L332.15 402.324L264.879 460.503L275.483 381.694L392.255 280.704L470.543 282.635L404.612 339.655L478.252 462.231L442.713 492.967Z"
        stroke="#21CD9C"
        strokeWidth={3}
      />
      <motion.path
        id="Vector 50_2"
        initial={{ pathLength: 0, stroke: "#21CD9C" }}
        animate={{
          pathLength: 1,
          transition: { duration: 10, ease: "linear", repeat: Infinity },
        }}
        d="M252.694 322.875L163.991 217.952L160.761 545.663L486.032 600.488L395.283 493.112L251.255 468.836L252.694 322.875Z"
        stroke="#21CD9C"
        strokeWidth={3}
      />
    </g>
  </svg>
);
