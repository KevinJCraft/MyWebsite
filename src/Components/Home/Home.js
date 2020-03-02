import React from "react";
import MenuButton from "../MenuButton";
import "./home.css";
import useLoadingEffect from "../../Hooks/useLoadingEffects/useLoadingEffects";

const Home = () => {
	//const el = useLoadingEffect("fade");
	//const name = useLoadingEffect("moveleft");
	// title = useLoadingEffect("moveup");

	return (
		<div className="home-screen">
			<MenuButton />
			<div className="hero">
				<h1 className="name">Kevin Craft</h1>
				<h2>Web developer</h2>
			</div>
		</div>
	);
};

export default Home;
