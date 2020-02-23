import React from "react";
import MenuButton from "./MenuButton";
import "../CSS/projects-page.css";

import Project from "./Project";

const Projects = () => {
	return (
		<div className="my-projects-page">
			<MenuButton />
			<header className="my-projects-header">
				<h1>My Projects</h1>
			</header>
			<Project />
		</div>
	);
};

export default Projects;
