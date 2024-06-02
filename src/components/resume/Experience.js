import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'
const Experience = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className='w-full flex gap-20'> 
    <div>
    <div className='py-12 font-titleFont'>
        <p className='text-sm text-designColor tracking-[4px]'>Features</p>
        <h2 className='text-4xl font-bold'>Design Skill</h2>
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
        <p className='text-sm text-designColor tracking-[4px]'>Features</p>
        <h2 className='text-4xl font-bold'>Development Skill</h2>
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
     </motion.div>
  )
}

export default Experience