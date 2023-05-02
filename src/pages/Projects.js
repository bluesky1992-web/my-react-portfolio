import React from "react";
import ProjectItem from "../components /ProjectItem";
import { projectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects items-center">
      <h1 className="text-lg pt-5 font-semibold ml-10">My personal projects</h1>
      <div className="projectList">
        {projectList.map((project, idx) => {
          return (
            <div>
              <ProjectItem id={idx} name={project.name} image={project.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
