import React from "react";
import MenuButton from "./MenuButton";
import "../CSS/home-page.css";

const Home = () => {
	return (
		<div className="home-screen">
			<MenuButton />
			<div className="hero">
				<h1>Kevin Craft</h1>
				<h2>Web developer</h2>
			</div>
		</div>
	);
};

export default Home;
