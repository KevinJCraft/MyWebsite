import React, { useContext, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../Context/MenuContext";

import "../CSS/nav.css";

const Nav = () => {
	const mainNav = useRef();
	const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

	useEffect(() => {
		if (isMenuOpen) {
			mainNav.current.classList.add("show");
		} else {
			mainNav.current.classList.remove("show");
		}
	}, [isMenuOpen]);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};
	return (
		<ul className="main-nav" ref={mainNav}>
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
					About
				</NavLink>
			</li>
			<li>
				<NavLink to="./resume" onClick={closeMenu}>
					Resume
				</NavLink>
			</li>
			<li>
				<NavLink to="./contactme" onClick={closeMenu}>
					Contact Me
				</NavLink>
			</li>
		</ul>
	);
};

export default Nav;
