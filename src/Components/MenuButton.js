import React, { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";
import "../CSS/menuButton.css";

const MenuButton = () => {
	const { setIsMenuOpen } = useContext(MenuContext);

	const handleClick = () => {
		setIsMenuOpen(prev => !prev);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<button onClick={handleClick} className="menu-button">
			&#9776;
		</button>
	);
};

export default MenuButton;
