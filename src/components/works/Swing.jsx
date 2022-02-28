import React from "react";
import { useLottie } from "lottie-react";
import swinging from "./swinging.json";

const Swing = () => {
  //lottie animation
  const defaultOptionsRight = {
    loop: true,
    autoplay: true,
    animationData: swinging,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mod = {
    height: 400,
    width: 400,
  };
  const { View } = useLottie(defaultOptionsRight, mod);
  return <div>{View}</div>;
};

export default Swing;
