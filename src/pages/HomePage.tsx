import { memo, useContext, useEffect, type FC } from "react";
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

  useEffect(() => {
    console.log("HomePage rendered");
  });
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
              <label className={"color-2 letter-space-1"}>
                Software Engineer
              </label>
              <label className={"color-2 letter-space-1"}>|</label>
              <label className={"color-2 letter-space-1"}>Freelancer</label>
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
        <div className="skills-section"></div>
      </div>
    </div>
  );
};

export default memo(HomePage);
