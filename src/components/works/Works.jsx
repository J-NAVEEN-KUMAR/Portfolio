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
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 5)
      : setCurrentSlide(currentSlide < len - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="Works" id="Works">
      <div className="swing">
        <Swing />
      </div>

      <div className="workContainer">
        {projects.map((p) => (
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
                    textDecoration: "underline",
                    fontSize: "0.75rem",
                  }}
                >
                  Technologies Used:{" "}
                </strong>
                <div className="tech">
                  {p.tech.map((i) => (
                    <img src={i.item} alt="" className="techItem" />
                  ))}
                </div>
                <div className="liveWebsite">
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noreferrer"
                    // className="liveWebsite"
                  >
                    <img src="../assets/demo.png" alt="" />
                    <button>Website</button>
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    // className="liveWebsite"
                  >
                    <img src="../assets/code.png" alt="" />
                    <button>code</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={p.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
