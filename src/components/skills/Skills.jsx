import "./skills.scss";
import { skills } from "../../data";

const Skills = () => {
  return (
    <div className="Container" id="skills">
      <div className="about">
        <h2>About Me</h2>
        <div className="browser">
          <div className="circles">
            <div className="circle" style={{ backgroundColor: "red" }}></div>
            <div className="circle" style={{ backgroundColor: "orange" }}></div>
            <div className="circle" style={{ backgroundColor: "green" }}></div>
          </div>
          <div className="top">
            <div className="dp">
              <img src="./assets/dp2.png" alt="" />
            </div>
            <div className="info">
              <h3>Naveen Kumar J</h3>
              <span>MERN Stack Developer</span>
              <span>+91 7661071399</span>
              <span>naveen.jerban@gmail.com</span>
              <div className="resume">
                <a
                  href="https://drive.google.com/file/d/12bN-JCNHwLWkDaOngziT7B40SQM3Z9Y0/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>My Resume</button>
                </a>
              </div>
            </div>
            <div className="social">
              <div className="infoItemLink">
                <a
                  href="https://www.linkedin.com/in/j-naveen-kumar/"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <img src="./assets/linkedin.png" alt="" className="icon" />
                </a>
                <span>LinkedIn</span>
              </div>
              <div className="infoItemLink">
                <a
                  href="https://github.com/J-NAVEEN-KUMAR"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <img src="./assets/github.png" alt="" className="icon" />
                </a>
                <span>GitHub</span>
              </div>
            </div>
          </div>
          <div className="bottom">
            <ul>
              <div className="bullet">
                <img src="./assets/list.png" alt="" />
                <li>An Engineering graduate and Software employee.</li>
              </div>
              <div className="bullet">
                <img src="./assets/list.png" alt="" />
                <li>Passionate web designer and web developer.</li>
              </div>
              <div className="bullet">
                <img src="./assets/list.png" alt="" />
                <li>Always enthusiastic to learn new web technologies.</li>
              </div>
              <div className="bullet">
                <img src="./assets/list.png" alt="" />
                <li>
                  Goal is to provide experience of efficient and user-friendly
                  applications.
                </li>
              </div>
              <div className="bullet">
                <img src="./assets/list.png" alt="" />
                <li>Love reading novels.</li>
              </div>
              <div className="bullet">
                <img src="./assets/list.png" alt="" />
                <li>Enjoys long drives.</li>
              </div>
            </ul>
          </div>
          <div className="quote">
            <img src="./assets/quote.gif" alt="" />
            <span>
              "Our body needs routine, but the mind doesn't. So, keep
              exploring."
            </span>
          </div>
        </div>
      </div>

      <div className="skills">
        <h2>My Skill Set</h2>
        <div className="skillContainer">
          <div className="anime">
            <iframe
              src="https://giphy.com/embed/4bjIKBOWUnVPICCzJc"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="skillSection">
            {skills.map((s) => (
              <div className="skillItem">
                <img src={s.icon} alt="" className="icon" />
                <span className="title">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
