import React, { useContext, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../../Context/MenuContext";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./nav.css";
import useOutsideClick from "../../Hooks/useOutsideClick";

const Nav = () => {
  const mainNav = useRef();
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useOutsideClick(mainNav, closeMenu);

  useEffect(() => {
    if (isMenuOpen) {
      mainNav.current.classList.add("show");
      mainNav.current.style.height = window.innerHeight;
    } else {
      mainNav.current.classList.remove("show");
    }
  }, [isMenuOpen]);

  return (
    <div className="main-nav" ref={mainNav}>
      <ul className="nav-internal-links">
        <li>
          <NavLink to="./" exact onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="./projects" onClick={closeMenu}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="./about" onClick={closeMenu}>
            About me
          </NavLink>
        </li>
        <li>
          <NavLink to="./contactme" onClick={closeMenu}>
            Contact Me
          </NavLink>
        </li>
      </ul>
      <ul className="nav-external-links">
        <li>
          <a
            href="https://github.com/KevinJCraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare fill="white" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/Kevin-J-Craft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin fill="white" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
