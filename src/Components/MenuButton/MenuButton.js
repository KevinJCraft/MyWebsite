import React, { useContext } from "react";
import { MenuContext } from "../../Context/MenuContext";
import "./menuButton.css";

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
			<span>&#9776;</span>
		</button>
	);
};

export default MenuButton;
