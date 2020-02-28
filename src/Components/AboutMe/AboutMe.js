import React from "react";
import MenuButton from "../MenuButton";
import "./aboutMe.css";
import useLoadingEffect from "../../Hooks/useLoadingEffects/useLoadingEffects";

const About = () => {
	const el = useLoadingEffect("fade");

	return (
		<div className="about-me-page" ref={el}>
			<MenuButton />
			<header className="about-me-header">
				<h1>Who am I</h1>
			</header>
			<main className="wrapper">
				<div className="work-experience section">
					<h3>Work Experience</h3>
					<div className="info">
						<h4>2011 - present</h4>
						<p>USPS - Letter Carrier</p>
					</div>
					<div className="info">
						<h4>2010 - 2011</h4>
						<p>Self Employeed - investments</p>
					</div>
					<div className="info">
						<h4>2007 - 2010</h4>
						<p>Harrahs Metropolis - Dealer</p>
					</div>
				</div>
				<div className="education section">
					<h3>Education</h3>
					<div className="info">
						<h4>2019 - presesnt</h4>
						<p>JCTCS/Code Louisville</p>
					</div>
					<div className="info">
						<h4>2001-2004</h4>
						<p>Eastern Kentucky University</p>
					</div>
				</div>
				<div className="skills section">
					<h3>Skills</h3>
					<ul>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Javascript ES6</li>
						<li>Git</li>
						<li>React</li>
						<li>NPM</li>
					</ul>
				</div>
			</main>
		</div>
	);
};

export default About;
