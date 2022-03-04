import { GitHub, LinkedIn, Mail, Person } from "@material-ui/icons";
import "./topbar.scss";
const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"Topbar " + (menuOpen && "active")} id="Topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#Intro" className="logo">
            Naveen Kumar J
          </a>
          <a href="#Intro" className="logo-sm">
            NJ
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <a href="#Contact" className="connect">
              +91 7661071399
            </a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="#Contact" className="connect">
              naveen.jeruban@gmail.com
            </a>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a
              href="https://www.linkedin.com/in/j-naveen-kumar/"
              target="_blank"
              rel="noreferrer"
              className="connect"
            >
              LinkedIn
            </a>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a
              href="https://github.com/J-NAVEEN-KUMAR"
              target="_blank"
              rel="noreferrer"
              className="connect"
            >
              GitHub
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://drive.google.com/file/d/12bN-JCNHwLWkDaOngziT7B40SQM3Z9Y0/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="connect connect-sm"
            >
              <button className="Resume">My Resume</button>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
