import React from 'react'
import { contactImg } from '../../assets'
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'

const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
             <img 
             className="w-full h-64 object-cover rounded-lg mb-2"
             src={contactImg} alt="contactImg"/>
             <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-white">John Doe</h3>
            <p className="text-lg font-normal text-gray-400">MERN Stack Developer</p>
            <p className="text-base text-gray-400 tracking-wide">Lorem ipsum, dolor sit amet consectetur adisicing elit . Facilis ipsam autem cumque, accusantium .</p>
            <p className="text-base text-gray-400 flex items-center gap-2">Phone: <span className="text-lightText">+91-7627056875</span></p>
            <p className="text-base text-gray-400 flex items-center gap-2">
              Email : {" "}<span className="text-lightText">
                react.is.here@gmail.com
              </span>
            </p>
             </div>
             <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
              <div className="flex gap-4">
                <span className="bannerIcon"><FaFacebookF/></span>
                <span className="bannerIcon"><FaTwitter/></span>
                <span className="bannerIcon">
                  <FaLinkedin/>
                </span>
              </div>
             </div>
          </div>
  )
}

export default ContactLeft