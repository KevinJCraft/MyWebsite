import React from "react";
import MenuButton from "./MenuButton";
import "../CSS/menuButton.css";

const style = {
	backgroundColor: "red",
	height: "100vh",
	width: "100vw"
};

const Home = () => {
	return (
		<div style={style}>
			<MenuButton />
			Home
		</div>
	);
};

export default Home;
