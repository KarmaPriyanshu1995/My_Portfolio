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
des="we specialize in crafting tailored business strategies that drive growth and innovation. "
icon={<FaBars/>}/>
<Card
title="Web Development"
des=" we offer top-notch web development services designed to transform your online presence."
icon={<AiFillAppstore/>}/>
<Card
title="SEO Optimisation"
des="we provide expert SEO services to enhance your online visibility and drive organic traffic to your website."
icon={<SiProgress/>}/>
<Card
title="App Development"
des="we specialize in creating high-quality, user-centric mobile applications that cater to your business needs."
icon={<FaMobile/>}/>
<Card
title="UX Design"
des="we excel in delivering exceptional UX design services that enhance user satisfaction and engagement."
icon={<SiAntdesign/>}/>
<Card
title="Hosting Websites"
des="we provide reliable and secure web hosting services tailored to meet the needs of businesses of all sizes."
icon={<FaGlobe/>}/>
    </div>
    </section>
  )
}

export default Features