import React from "react";
import MenuButton from "../MenuButton";
import "./aboutMe.css";
import { FaHtml5, FaGitSquare, FaReact, FaNpm } from "react-icons/fa";
import { DiJavascript1, DiCss3 } from "react-icons/di";

const About = () => {
	return (
		<div className="about-me-page">
			<MenuButton />
			<header className="about-me-header">
				<h1 className="text-shadow">Who am I</h1>
			</header>
			<main className="about-me-container">
				<div className="skills about-me-section">
					<h3>Skills</h3>
					<div className="info">
						<ul>
							<li>
								<FaHtml5 />
							</li>
							<li>
								<DiCss3 />
							</li>
							<li>
								<DiJavascript1 />
							</li>
							<li>
								<FaGitSquare />
							</li>
							<li>
								<FaReact />
							</li>
							<li>
								<FaNpm />
							</li>
						</ul>
					</div>
				</div>
				<div className="education about-me-section">
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

				<div className="work-experience about-me-section">
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
			</main>
		</div>
	);
};

export default About;
