import { GitHub, LinkedIn, Mail, Person } from "@material-ui/icons"
import "./topbar.scss"
const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"Topbar " + (menuOpen && "active")} id="Topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#Intro" className="logo">Naveen Kumar J.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <a href="#Contact" className="connect">+91 7661071399</a>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <a href="#Contact" className="connect">naveen.jeruban@gmail.com</a>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon"/>
            <a href="https://www.linkedin.com/in/j-naveen-kumar/" target="_blank" className="connect">LinkedIn</a>
          </div>
          <div className="itemContainer">
            <GitHub className="icon"/>
            <a href="https://github.com/J-NAVEEN-KUMAR" target="_blank" className="connect">GitHub</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line4"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar