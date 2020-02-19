import React from "react";
import MenuButton from "./MenuButton";

const style = {
	backgroundColor: "green",
	height: "100vh",
	width: "100vw"
};

const ContactMe = () => {
	return (
		<div style={style}>
			<MenuButton /> ContactMe
		</div>
	);
};

export default ContactMe;
