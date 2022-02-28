import React from "react";
import { useLottie } from "lottie-react";
import arrowRight from "./right arrow.json";

const Arrow = () => {
  //lottie animation
  const defaultOptionsRight = {
    loop: true,
    autoplay: true,
    animationData: arrowRight,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mod = {
    height: 200,
    width: 200,
  };
  const { View } = useLottie(defaultOptionsRight, mod);
  return <div>{View}</div>;
};

export default Arrow;
