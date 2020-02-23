import React, { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";
import "../CSS/menuButton.css";

const MenuButton = () => {
	const { setIsMenuOpen } = useContext(MenuContext);

	return (
		<button
			onClick={() => setIsMenuOpen(prev => !prev)}
			className="menu-button"
		>
			&#9776;
		</button>
	);
};

export default MenuButton;
