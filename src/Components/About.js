import React from "react";
import MenuButton from "./MenuButton";

const style = {
	backgroundColor: "blue",
	height: "100vh",
	width: "100vw"
};

const About = () => {
	return (
		<div style={style}>
			<MenuButton />
			About
		</div>
	);
};

export default About;
