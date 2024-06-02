import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import {projectOne,projectTwo,projectThree} from '../../assets/index'
const Projects = () => {
  return (
    <section id='projects'
    className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
        <Title 
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects"/>
        </div>
        <div className='grid grid-cols-3 gap-14'>
          <ProjectsCard 
          title="Social Media Clone"
          des="jshhs sjjjs nkjhajja sjsjjs asjajiaj sjkjs"
          src={projectThree}
          />
          <ProjectsCard 
           title="Social Media Clone"
           des="jshhs sjjjs nkjhajja sjsjjs asjajiaj sjkjs"
           src={projectOne}
           />
          <ProjectsCard
           title="Social Media Clone"
           des="jshhs sjjjs nkjhajja sjsjjs asjajiaj sjkjs"
           src={projectTwo}
          />
          <ProjectsCard 
           title="Social Media Clone"
           des="jshhs sjjjs nkjhajja sjsjjs asjajiaj sjkjs"
           src={projectThree}
          />
          <ProjectsCard 
           title="Social Media Clone"
           des="jshhs sjjjs nkjhajja sjsjjs asjajiaj sjkjs"
           src={projectOne}
          />
          <ProjectsCard 
           title="Social Media Clone"
           des="jshhs sjjjs nkjhajja sjsjjs asjajiaj sjkjs"
           src={projectTwo}
          />
        </div>
    </section>
  )
}

export default Projects