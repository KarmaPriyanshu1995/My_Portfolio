import React, { useState } from 'react'
import Title from '../layouts/Title'
import ResumeCard from './ResumeCard'
import Education from './Education'
import Skills from './Skills'
import Achievement from './Achievement';
import {motion} from "framer-motion";
import Experience from './Experience'
const Resume = () => {
  const [educationData,setEducationData]=useState(true);
  const [skillData,setSkillData]=useState(false);
  const [experienceData,setExperienceData]=useState(false);
  const [achievementData,setAchievementData]=useState(false);
  return (
    <section id="resume" 
    className='w-full py-200 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
        <Title
        title="2+ Years of experience"
        des="My Resume"/>
        </div>
        <div>
          <ul className='w-full grid grid-cols-4'>
            <li 
            onClick={()=>setEducationData(true)&setSkillData(false)&setAchievementData(false)&setExperienceData(false)}
            className={`${educationData?"border-designColor rounded-lg":"border-transparent"} resumeli`}>
              Education
            </li>
            <li 
             onClick={()=>setEducationData(false)&setSkillData(true)&setAchievementData(false)&setExperienceData(false)}className={`${skillData?"border-designColor rounded-lg":"border-transparent"} resumeli`}>
              Professional Skills
            </li>
            <li 
             onClick={()=>setEducationData(
              false
             )&setSkillData(false)&setAchievementData(false)&setExperienceData(true)}className={`${experienceData?"border-designColor rounded-lg":"border-transparent"} resumeli`}>
              Experience
            </li>
            <li 
             onClick={()=>setEducationData(false)&setSkillData(false)&setAchievementData(true)&setExperienceData(false)}className={`${achievementData?"border-designColor rounded-lg":"border-transparent"} resumeli`}>
              Achievements
            </li>
          </ul>
        </div>
        {educationData && <Education/>}
        {skillData && <Skills/>}
        {achievementData&&<Achievement/>}
        {experienceData&&<Experience/>}
       {/* <div className='w-full flex gap-20'> 
      <div>
      <div className='py-12 font-titleFont'>
          <p className='text-sm text-designColor tracking-[4px]'>1998 - 2010</p>
          <h2 className='text-4xl font-bold'>Education Quality</h2>
        </div>
        <div className='w-full h-[1000px] border-l-[6px] border-black mt-14 border-opacity-30 flex flex-col gap-10'>
          <ResumeCard 
          title="Secondary School Education"
          subTitle="Kingstar Secondary School (1998 - 2000)"
          result="5.00/5"
          des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education Scale."/>
           <ResumeCard 
          title="Secondary School Education"
          subTitle="Kingstar Secondary School (1998 - 2000)"
          result="5.00/5"
          des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education Scale."/>
           <ResumeCard 
          title="Secondary School Education"
          subTitle="Kingstar Secondary School (1998 - 2000)"
          result="5.00/5"
          des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education Scale."/>
        </div>
      </div>
  <div>
  <div className='py-12 font-titleFont'>
          <p className='text-sm text-designColor tracking-[4px]'>2022 - 2024</p>
          <h2 className='text-4xl font-bold'>Job Experience</h2>
        </div>
        <div className='w-full h-[1000px] border-l-[6px] border-black mt-14 border-opacity-30 flex flex-col gap-10'>
          <ResumeCard 
          title="Secondary School Education"
          subTitle="Kingstar Secondary School (1998 - 2000)"
          result="5.00/5"
          des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education Scale."/>
           <ResumeCard 
          title="Secondary School Education"
          subTitle="Kingstar Secondary School (1998 - 2000)"
          result="5.00/5"
          des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education Scale."/>
           <ResumeCard 
          title="Secondary School Education"
          subTitle="Kingstar Secondary School (1998 - 2000)"
          result="5.00/5"
          des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education Scale."/>
        </div>
  </div>
       </div> */}
    </section >
  )
}

export default Resume