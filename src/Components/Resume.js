import React from "react";
import MenuButton from "./MenuButton";

const style = {
	backgroundColor: "orange",
	height: "100vh",
	width: "100vw"
};

const Resume = () => {
	return (
		<div style={style}>
			<MenuButton />
			Resume
		</div>
	);
};

export default Resume;
