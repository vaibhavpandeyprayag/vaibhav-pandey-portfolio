import { memo, useContext, useEffect, useState, type FC } from "react";
import Navbar from "../components/Navbar";
import "./HomePage.css";
import CircleLink from "../components/CircleLink";
import LinkedInImg from "../assets/linkedin-icon.png";
import GitHubImg from "../assets/github-icon.png";
import XImg from "../assets/x-icon.png";
import ResumeImg from "../assets/resume-icon.png";
import { WindowWidthContext } from "../exports";

interface Props {}

const HomePage: FC<Props> = () => {
  const winInnerWidth = useContext(WindowWidthContext);
  const [heroTitle, setHeroTitle] = useState<string>("");
  const titles = [
    "Software Engineer",
    "Fullstack Developer",
    "Mobile Developer",
  ];

  const animateTitle = async () => {
    let i = 0;
    while (true) {
      for (let j = 0; j < titles[i].length; j++) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setHeroTitle(prev => prev + titles[i][j]);
      }
      await new Promise(resolve => setTimeout(resolve, 800));

      for (let j = 0; j < titles[i].length; j++) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setHeroTitle(prev => prev.slice(0, -1));
      }

      i = (i + 1) % titles.length;
    }
  };

  useEffect(() => {
    animateTitle();
  }, []);
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-page-container">
        <div className="hero-section">
          <div>
            <h1
              className="hero-name translate-up-5"
              style={{
                fontSize: `${Math.max(40, winInnerWidth / 20)}px`,
              }}
            >
              Vaibhav Pandey
            </h1>
            <section
              className={"hero-title-box"}
              style={{
                marginTop: "1rem",
                fontSize: `${Math.max(16, winInnerWidth / 80)}px`,
              }}
            >
              <label className={"hero-title letter-space-1"}>{heroTitle}</label>
              <label className={"cursor"}>|</label>
            </section>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "4rem",
              gap: "1rem",
            }}
          >
            <CircleLink
              image={GitHubImg}
              link={"https://github.com/vaibhavpandeyprayag"}
              linkTip={"GitHub"}
            />
            <CircleLink
              image={LinkedInImg}
              link={"https://www.linkedin.com/in/vaibhavpandeyprayag/"}
              linkTip={"LinkedIn"}
            />
            <CircleLink
              image={XImg}
              link={"https://x.com/prayag_vaibhav"}
              linkTip={"X"}
            />
            <CircleLink
              image={ResumeImg}
              link={
                "https://drive.google.com/file/d/1a2hgatldl0Y8Dq8QmbnAkif8SDLcutXh/view?usp=sharing"
              }
              linkTip={"Resume"}
            />
          </div>
          {/* </div> */}
        </div>
        <div className="skills-section">
          <div className="skills-container">
            <div className="skills-header">
              <a href="javascript:void(0)" className="skill-cat active">
                Programming Languages
              </a>
              <a href="javascript:void(0)" className="skill-cat">
                Front End
              </a>
              <a href="javascript:void(0)" className="skill-cat">
                Back End
              </a>
              <a href="javascript:void(0)" className="skill-cat">
                Version Control
              </a>
              <a href="javascript:void(0)" className="skill-cat">
                Other
              </a>
            </div>
            <div className="skills-body">
              <a href="javascript:void(0)" className="skill-item">
                <img src={""} alt="javascript" />
                <span>JavaScript</span>
              </a>
              <a href="javascript:void(0)" className="skill-item">
                <img src={""} alt="typescript" />
                <span>TypeScript</span>
              </a>
              <a href="javascript:void(0)" className="skill-item">
                <img src={""} alt="java" />
                <span>Java</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HomePage);
