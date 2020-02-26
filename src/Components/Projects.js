import React from "react";
import MenuButton from "./MenuButton";
import "../CSS/projects-page.css";

import Project from "./Project";
import useLoadingEffect from "../Hooks/useLoadingEffects/useLoadingEffects";
import projectData from "../Data/ProjectData";

const Projects = () => {
	const el = useLoadingEffect("fade");

	return (
		<div className="my-projects-page" ref={el}>
			<MenuButton />
			<header className="my-projects-header">
				<h1>My Projects</h1>
			</header>
			{projectData.map(project => {
				return <Project key={project.name} data={project} />;
			})}
		</div>
	);
};

export default Projects;
