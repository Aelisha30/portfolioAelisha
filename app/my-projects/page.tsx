import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div 
    style={{backgroundImage:"url(/final.jpg)"}}
    className='w-screen h-screen flex items-center justify-around bg-center bg-contain'>
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {Projects.map((project, index)=>(
          <ProjectCard
          key={index}
          title={project.title}
          text={project.text}
          image={project.src}
          />
        ))}
      </div>
    </div>
  )
}

export default page