"use client";
import { useState, CSSProperties, useEffect } from "react";
import { TConductorInstance } from "react-canvas-confetti/dist/types/";
import Snow from "react-canvas-confetti/dist/presets/snow";

const canvasStyles: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

function Confetti() {
  return (
    <>
      <Snow autorun={{ speed: 20 }} />
    </>
  );
}

export default Confetti;
