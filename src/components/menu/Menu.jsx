import "./menu.scss";
const Menu = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => setMenuOpen(false);
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={handleClick}>
          <a href="#Intro">Home</a>
        </li>
        <li onClick={handleClick}>
          <a href="#skills">About</a>
        </li>
        <li onClick={handleClick}>
          <a href="#Works">Works</a>
        </li>
        {/* <li onClick={handleClick}>
          <a href="#Achievements">Achievements</a>
        </li> */}
        <li onClick={handleClick}>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
