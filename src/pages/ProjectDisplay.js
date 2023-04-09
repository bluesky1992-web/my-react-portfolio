import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import { Link } from "react-router-dom";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <Link to={project.link} target="_blank">
        <img alt="project" src={project.image} />
      </Link>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link target="_blank" to={project.github}>
        <GithubIcon
          sx={{
            fontSize: 47,
            paddingLeft: 2,
            cursor: "pointer",
          }}
        />
      </Link>
    </div>
  );
}

export default ProjectDisplay;
