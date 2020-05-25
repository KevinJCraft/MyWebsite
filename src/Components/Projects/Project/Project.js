import React from "react";
import "./project.css";

const Project = ({ data }) => {
  const { name, description, gitLink, demoLink, imgPath } = data;

  return (
    <div className="project">
      <h2>{name}</h2>
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        <img src={imgPath} alt={`screenshot of ${name}`} />
      </a>

      <span>{description}</span>
      <div className="links">
        <a href={gitLink} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
};

export default Project;
