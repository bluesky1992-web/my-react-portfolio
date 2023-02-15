import React from 'react'
import ProjectItem from '../components /ProjectItem'
import { projectList } from '../helpers/ProjectList'

import '../styles/Projects.css'

export default function Projects() {
  return (
    <div className='projects'>
     <h1>My personal project</h1>
     <div className='projectList'>
       {
        projectList.map((project) => {
        return   <ProjectItem key={project.name} name={project.name} image={project.image}/>
        })
       }
     </div>
    </div>
  )
}
