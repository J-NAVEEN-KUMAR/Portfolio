import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

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
          <img src="./assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
