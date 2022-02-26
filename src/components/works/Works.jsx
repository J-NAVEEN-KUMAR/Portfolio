import "./works.scss";
import projects from "../../data";
import { useState } from "react";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(projects);
  const len = projects.length;

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < len - 1 ? currentSlide + 1 : 0);
  };


  return (
    <div className="Works" id="Works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {projects.map((p) => (
          <div className="workContainer">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={p.icon} alt="" />
                  </div>
                  <h2>{p.title}</h2>
                  <p>{p.desc}</p>
                  <button>Projects</button>
                </div>
              </div>
              <div className="right">
                <img src={p.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="./assets/next.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
      <img
        src="./assets/next.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
    </div>
  );
};

export default Works;
