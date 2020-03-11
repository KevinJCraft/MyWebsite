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
				<img src={require("../../Images/logo.JPG")} alt="logo" />
				<section>
					<h1>WELCOME</h1>
					<p>
						My name is Kevin and I am a Frontend Web Developer. I love to create
						unique user experiences but most of all, I love to problem solve!
						Let me help you solve some of the problems troubling you.
					</p>
				</section>
			</div>
		</div>
	);
};

export default Home;
