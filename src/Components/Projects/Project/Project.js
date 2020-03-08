import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import "./project.css";

const Project = ({ data }) => {
	const { name, description, gitLink, demoLink, imgPath } = data;

	return (
		<div className="project">
			<h2>{name}</h2>
			<img src={imgPath} alt={`screenshot of ${name}`} />
			<span>{description}</span>
			<div className="links">
				<a href={gitLink} target="_blank" rel="noopener noreferrer">
					<FaGithubSquare fill="rgba(5, 227, 235, 0.856)" />
				</a>
				<a href={demoLink} target="_blank" rel="noopener noreferrer">
					<FiMonitor stroke="rgba(5, 227, 235, 0.856)" />
				</a>
			</div>
		</div>
	);
};

export default Project;
