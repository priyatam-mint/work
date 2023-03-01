import React from 'react'
import { projects } from '../../data';
import ProjectCard from '../projectCard/ProjectCard';
import Slide from '../slide/Slide';
import './ProjectCarousel.scss'

const ProjectCarousel = () => {
  return (
    <div>
    <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card)=>{
            return <ProjectCard key={card.id} card={card}/>
        })}
    </Slide>
    </div>
  )
}

export default ProjectCarousel