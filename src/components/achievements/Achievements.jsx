import { useLottie } from "lottie-react";
import badge from "./badge.json";
import "./achievements.scss";

const Achievements = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: badge,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mod = {
    height: 50,
    width: 50,
  };
  const { View } = useLottie(defaultOptions, mod);

  return (
    <div className="achievements" id="Achievements">
      <h2>My Achievements</h2>
      <div className="list">
        <div className="listItem">
          <div className="icon">{View}</div>
        </div>
        <div className="listItem">
          <div className="icon">{View}</div>
        </div>
        <div className="listItem">
          <div className="icon">{View}</div>
        </div>
        <div className="listItem">
          <div className="icon">{View}</div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
