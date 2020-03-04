import React from "react";
import MenuButton from "../MenuButton";
import "./home.css";

const Home = () => {
	//const el = useLoadingEffect("fade");
	//const name = useLoadingEffect("moveleft");
	// title = useLoadingEffect("moveup");

	return (
		<div className="home-screen">
			<MenuButton />
			<div className="hero">
				<h1 className="name text-shadow">Kevin J Craft</h1>
				<h2 className="title text-shadow">Web developer</h2>
			</div>
		</div>
	);
};

export default Home;
