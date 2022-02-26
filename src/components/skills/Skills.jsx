import "./skills.scss";
import { skills } from "../../data";

const Skills = () => {
  return (
    <div className="Container" id="skills">
      {/* <div className="bg">
      
      </div> */}

      <div className="about">
        <h2>About</h2>
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
