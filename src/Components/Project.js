import React from "react";
import "../CSS/project.css";

const Project = () => {
	return (
		<div className="project">
			<h2>One of my Projects</h2>
			<img
				src={require("../Images/project-demo-snapshot.jpg")}
				alt="screenshot of site"
			/>
			<span>This is the site that I built</span>
			<div className="links">
				<a href="#">
					<i>Git</i>
				</a>
				<a href="#">Site</a>
			</div>
		</div>
	);
};

export default Project;
