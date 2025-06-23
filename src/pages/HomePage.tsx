import { memo, useContext, useEffect, useState, type FC } from "react";
import "./HomePage.css";
import CircleLink from "../components/CircleLink";
import LinkedInImg from "../assets/linkedin-icon.png";
import GitHubImg from "../assets/github-icon.png";
import XImg from "../assets/x-icon.png";
import ResumeImg from "../assets/resume-icon.png";
import ReactImg from "../assets/react.svg";
import AngularImg from "../assets/angular.svg";
import ReactNativeImg from "../assets/reactnative.svg";
import JsImg from "../assets/js-icon.png";
import TsImg from "../assets/ts-icon.png";
import JavaImg from "../assets/java-icon.png";
import NodeImg from "../assets/nodejs.png";
import SpringBootImg from "../assets/spring-boot.svg";
import PostgreSQLImg from "../assets/postgresql.png";
import GitImg from "../assets/git.svg";
import DsImg from "../assets/ds-icon.png";
import AlgoImg from "../assets/algorithms.png";
import { WindowWidthContext } from "../exports";
import SkillItem from "../components/SkillItem";

interface Props {}

const HomePage: FC<Props> = () => {
  const winInnerWidth = useContext(WindowWidthContext);
  const [heroTitle, setHeroTitle] = useState<string>("");
  const titles = [
    "Software Engineer",
    "Fullstack Developer",
    "Mobile Developer",
  ];
  const skills = [
    {
      name: "Front End",
      skills_list: [
        { image: ReactImg, name: "React" },
        { image: AngularImg, name: "Angular" },
        { image: ReactNativeImg, name: "React Native" },
      ],
    },
    {
      name: "Back End",
      skills_list: [
        { image: NodeImg, name: "Node.js" },
        { image: SpringBootImg, name: "Spring Boot" },
      ],
    },
    {
      name: "Programming Languages",
      skills_list: [
        { image: JsImg, name: "JavaScript" },
        { image: TsImg, name: "TypeScript" },
        { image: JavaImg, name: "Java" },
      ],
    },
    {
      name: "Databases",
      skills_list: [{ image: PostgreSQLImg, name: "PostgreSQL" }],
    },
    {
      name: "Others",
      skills_list: [
        { image: GitImg, name: "Git" },
        { image: DsImg, name: "Data Structures" },
        { image: AlgoImg, name: "Alogrithms" },
      ],
    },
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
      <div className="home-page-container">
        <div className="hero-section">
          <div>
            <h1
              className="color-4"
              style={{
                fontWeight: "800",
                fontSize: `${Math.max(30, winInnerWidth / 40)}px`,
              }}
            >
              Hi, I'm
            </h1>
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
        <div className="pro-intro-section">
          <div className="about-exp-box">
            <div className="experience-box">
              <h1 className="experience-text" style={{}}>
                2+
              </h1>
              <h1
                className="experience-title"
                style={{
                  fontSize: `30px`,
                }}
              >
                YEARS OF EXPERIENCE
              </h1>
            </div>
            <div className="about-text">
              <p
                style={{
                  textAlign: "justify",
                  marginBottom: "3rem",
                }}
              >
                I am a passionate Software Engineer with{" "}
                <b style={{ color: "var(--color-5)" }}>
                  <i>over 2 years of experience</i>
                </b>{" "}
                in building dynamic and responsive web and mobile applications.
                I specialize in{" "}
                <b>
                  <i>React, Angular, and React Native</i>
                </b>
                , with a strong focus on writing clean, maintainable code and
                delivering pixel-perfect user interfaces.
              </p>
              <p
                style={{
                  textAlign: "justify",
                  marginBottom: "3rem",
                }}
              >
                {" "}
                I enjoy solving real-world problems through code and take pride
                in creating smooth, user-friendly experiences. Whether it’s
                developing cross-platform mobile apps or modern web
                applications, I strive to bring performance, accessibility, and
                quality to everything I build. I’m always learning, growing, and
                open to new opportunities and collaborations!
              </p>
            </div>
          </div>
          <div className="skills-container">
            <h1
              className="skills-title"
              style={{
                fontSize: `${Math.max(40, winInnerWidth / 25)}px`,
              }}
            >
              Skills
            </h1>
            <div className="skills-body">
              {skills.map((skillCat, catIndex) => (
                <div className="skill-cat-wrapper">
                  <div key={`skill-cat-${catIndex}`} className="skill-cat-box">
                    <h1 className="skill-cat-title">{skillCat.name}</h1>
                    <div className="skill-list">
                      {skillCat.skills_list.map((skill, skillIndex) => (
                        <SkillItem
                          image={skill.image}
                          name={skill.name}
                          key={`skill-${catIndex}-${skillIndex}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HomePage);
