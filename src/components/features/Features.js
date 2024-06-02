import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillAppstore } from 'react-icons/ai'
import { SiAntdesign, SiProgress } from 'react-icons/si'
import { FaBars, FaGlobe, FaMobile } from 'react-icons/fa'

const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
    <Title title="Features" des="What I Do"/>
    <div className='grid grid-cols-3 gap-20'>
<Card 
title="Business Stratagy"
des="lorem ipsum dolor sit amet consecterus"
icon={<FaBars/>}/>
<Card
title="App Development"
des="lorem ipsum dolor sit amet consecterus"
icon={<AiFillAppstore/>}/>
<Card
title="SEO Optimisation"
des="lorem ipsum dolor sit amet consecterus"
icon={<SiProgress/>}/>
<Card
title="App Development"
des="lorem ipsum dolor sit amet consecterus"
icon={<FaMobile/>}/>
<Card
title="UX Design"
des="lorem ipsum dolor sit amet consecterus"
icon={<SiAntdesign/>}/>
<Card
title="Hosting Websites"
des="lorem ipsum dolor sit amet consecterus"
icon={<FaGlobe/>}/>
    </div>
    </section>
  )
}

export default Features