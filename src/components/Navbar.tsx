import type { FC } from "react";
import "./Navbar.css";

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <nav className={"navbar-container"}>
      <h1
        style={{
          color: "var(--color-4)",
          letterSpacing: "1px",
          fontWeight: "500",
        }}
      >
        PORTFOLIO
      </h1>
      <div className="navbar-links">
        <span className="border-bottom border-color-2">
          <a className="letter-space-1 translate-up-5" href="#home">
            Home
          </a>
        </span>
        <span className="border-bottom border-color-2">
          <a className="letter-space-1 translate-up-5" href="#about">
            About
          </a>
        </span>
        <span className="border-bottom border-color-2">
          <a className="letter-space-1 translate-up-5" href="#projects">
            Projects
          </a>
        </span>
        <span className="border-bottom border-color-2">
          <a className="letter-space-1 translate-up-5" href="#contact">
            Contact
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
