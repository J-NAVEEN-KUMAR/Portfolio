import "./works.scss";
import projects from "../../data";
import { useState } from "react";
import Arrow from "./Arrow";
import Swing from "./Swing";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const len = projects.length;

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < len - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="Works" id="Works">
      <div className="swing">
        <Swing />
      </div>
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
                    {/* <img src={p.icon} alt="" /> */}
                  </div>
                  <h2>{p.title}</h2>
                  <p>{p.desc}</p>

                  <strong
                    style={{
                      fontFamily: "Dancing Script",
                      fontSize: "30px",
                      marginTop: "25px",
                    }}
                  >
                    Technologies Used:{" "}
                  </strong>
                  <div className="tech">
                    {p.tech.map((i)=>(
                      <div className="techItem">
                        <img src={i.item} alt="" />
                      </div>
                    ))}
                  </div>
                  <a href={p.website} target="_blank" className="liveWebsite">
                    <img src="../assets/demo.png" alt="" />
                    <button>Website</button>
                  </a>
                  <a href={p.code} target="_blank" className="liveWebsite">
                    <img src="../assets/code.png" alt="" />

                    <button>Source code</button>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={p.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <img
        src="./assets/next.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      /> */}
      <div className="arrow right" onClick={() => handleClick()}>
        <Arrow />
      </div>
      {/* <img
        src="./assets/next.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      /> */}
      <div className="arrow left" onClick={() => handleClick("left")}>
        <Arrow />
      </div>
    </div>
  );
};

export default Works;
