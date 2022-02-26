import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Achievements from "./components/achievements/Achievements"
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App" id="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Skills />
        <Works />
        <Achievements/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
