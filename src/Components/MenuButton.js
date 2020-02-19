import React, { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";

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
