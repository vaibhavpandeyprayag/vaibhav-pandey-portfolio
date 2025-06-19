import type { FC } from "react";
import "./Navbar.css";

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <nav className={"navbar-container"}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <a href="javascrpt:void(0)">
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
        </a>
        <h1
          style={{
            color: "var(--color-4)",
            letterSpacing: "2px",
            fontWeight: "500",
          }}
        >
          PORTFOLIO
        </h1>
      </div>
      <div className="navbar-links">
        <span className="border-bottom border-color-5-dark">
          <a className="letter-space-1 translate-up-5" href="#home">
            Home
          </a>
        </span>
        <span className="border-bottom border-color-5-dark">
          <a className="letter-space-1 translate-up-5" href="#about">
            About
          </a>
        </span>
        <span className="border-bottom border-color-5-dark">
          <a className="letter-space-1 translate-up-5" href="#projects">
            Projects
          </a>
        </span>
        <span className="border-bottom border-color-5-dark">
          <a className="letter-space-1 translate-up-5" href="#contact">
            Contact
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
