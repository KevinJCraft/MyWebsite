import React from "react";
import MenuButton from "./MenuButton";
import "../CSS/home-page.css";
import useLoadingEffect from "../Hooks/useLoadingEffects/useLoadingEffects";

const Home = () => {
	const el = useLoadingEffect("fade");
	const name = useLoadingEffect("moveleft");
	const title = useLoadingEffect("moveup");

	return (
		<div className="home-screen" ref={el}>
			<MenuButton />
			<div className="hero">
				<h1 ref={name}>Kevin Craft</h1>
				<h2 ref={title}>Web developer</h2>
			</div>
		</div>
	);
};

export default Home;
