import React from "react";
import { BackgroundLines } from "../ui/background-lines";
import TypewriterEffectSmoothDemo from "../typewrite/TypewriterEffectSmoothDemo";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-screen h-screen fixed top-14 left-0">
        
      <TypewriterEffectSmoothDemo />
    </BackgroundLines>
  );
}

export default BackgroundLinesDemo;
