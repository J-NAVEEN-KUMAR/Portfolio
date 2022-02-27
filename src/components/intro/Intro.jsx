import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { useLottie } from "lottie-react";
import arrow from "./arrow.json";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef.current);
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full Stack Developer", "MERN Stack Developer", "Traveller"],
    });
  }, []);

  //lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: arrow,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mod = {
    height: 100,
    width: 100,
  };
  const { View } = useLottie(defaultOptions, mod);

  return (
    <div className="Intro" id="Intro">
      <div className="wave"></div>
      <div className="introShape"></div>
      <div className="left">
        <div className="imageContainer">
          <img src="./assets/dp2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Naveen Kumar J</h1>
          <h3>
            And I'm <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#skills">
          {/* <img src="./assets/down.png" alt="" /> */}
          <div className="lottie">
            <div className="anime">{View}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Intro;
