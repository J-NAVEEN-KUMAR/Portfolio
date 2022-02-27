import { useLottie } from "lottie-react";
import achieve from "./achieve.json";
import "./achievements.scss";

const Achievements = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: achieve,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mod = {
    height: 140,
    width: 200,
  };
  const { View } = useLottie(defaultOptions, mod);

  return (
    <div className="achievements" id="Achievements">
      <h2>My Achievements</h2>
      <div className="list">
        <div className="listItem">
          <div className="icon">{View}</div>
          <div className="title">Title</div>
          <div className="desc">Desc</div>
          <a
            href="https://drive.google.com/file/d/1guslVCkaEklg0U3FMGtOrxdll5tmaKTp/view?usp=sharing"
            className="view"
            target="_blank"
          >
            <button>View</button>
          </a>
        </div>
        <div className="listItem">
          <div className="title">Title</div>
          <div className="desc">Desc</div>
          <a
            href="https://drive.google.com/file/d/1go7YnA13N6XWpE_OapbvP0yxjMSvms09/view?usp=sharing"
            className="view"
            target="_blank"
          >
            <button>View</button>
          </a>
        </div>
        <div className="listItem">
          <div className="title">Title</div>
          <div className="desc">Desc</div>
          <a
            href="https://drive.google.com/file/d/1gqQ4dBBJqxBGVPuHzvUFkDdFxM9sQKWb/view?usp=sharing"
            className="view"
            target="_blank"
          >
            <button>View</button>
          </a>
        </div>
        <div className="listItem">
          <div className="title">Title</div>
          <div className="desc">Desc</div>
          <a
            href="https://drive.google.com/file/d/1gvOVkCbPQ58BM3kM1Pu2dxyn9SAvx6P0/view?usp=sharing"
            className="view"
            target="_blank"
          >
            <button>View</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
