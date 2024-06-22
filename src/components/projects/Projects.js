import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import {projectOne,projectTwo,projectThree, Booking, FoodClone} from '../../assets/index'
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
          des="I have developed a robust Social Media Clone using React, Node.js, and JavaScript. This project replicates key features of popular social media platforms, including user authentication, real-time messaging, post creation, and dynamic newsfeeds. "
          src={projectThree}
          />
          <ProjectsCard 
           title="Netflix Clone"
           des="I have developed a feature-rich Netflix Clone using React, Node.js, and JavaScript. This project emulates the core functionalities of Netflix, including user authentication, movie and TV show browsing, video streaming, and personalized recommendations."
           src={projectOne}
           />
          <ProjectsCard
           title="Amazon Clone"
           des="Introducing Amazon Clone, a comprehensive e-commerce platform that mirrors the functionality and user experience of the renowned Amazon website. Discover a wide range of products, seamless checkout processes, secure payment options ."
           src={projectTwo}
          />
          <ProjectsCard 
           title="FullStack Food Clone"
           des="Welcome to FullStack Food Clone, your one-stop destination for all things food-related! With a robust platform inspired by industry leaders, we offer a diverse range of culinary delights, from gourmet meals to everyday essentials."
           src={FoodClone}
          />
          <ProjectsCard 
           title="Booking.com Clone"
           des="Discover the world with ease on our Booking.com clone platform. From cozy accommodations to luxurious stays, we offer a vast selection of properties to suit every traveler's needs. With intuitive search filters, secure booking processes, and real-time availability updates."
           src={Booking}
          />
          <ProjectsCard 
           title="Instagram Clone"
           des="Introducing our Instagram clone, a vibrant social media platform that brings people together through captivating visuals and engaging content. Share moments, connect with friends, and discover new perspectives in a visually stunning environment. "
           src={projectTwo}
          />
        </div>
    </section>
  )
}

export default Projects