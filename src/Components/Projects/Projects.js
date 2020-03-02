import React from "react";
import MenuButton from "../MenuButton";
import "./projects.css";

import Project from "./Project";
import projectData from "../../Data/ProjectData";

const Projects = () => {
	return (
		<div className="my-projects-page">
			<MenuButton />
			<header className="my-projects-header">
				<h1 className="projects-h1">My Projects</h1>
			</header>
			{projectData.map(project => {
				return <Project key={project.name} data={project} />;
			})}
		</div>
	);
};

export default Projects;
