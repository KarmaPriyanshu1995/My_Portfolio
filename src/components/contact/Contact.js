import React, { useState } from "react";
import Title from "../layouts/Title";
import { contactImg } from "../../assets/index";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactLeft from "./ContactLeft";
const Contact = () => {
  const [userName ,setUsername] = useState("");
  const [email ,setEmail] = useState("");
  const [phoneNumber ,setPhoneNumber] = useState("");
  const [subject ,setSubject] = useState("");
  const [message ,setMessage] = useState("");
  const [errMsg ,setErrMsg] = useState("");
  const [successMsg ,setSuccessMsg] = useState("");
const emailValidation = ()=>{
  return String(email)
  .toLowerCase().match(/^w+([-]?\w+)*@\w+([-]?\w)*(\.\w{2,3})+$/);
}
  const handleSend=(e)=>{
e.preventDefault()
if(userName===""){
  setErrMsg("UserName Is Requiered");
}else if(phoneNumber === ""){
  setErrMsg("Phone Number Is Required!");
}else if(email === ""){
  setErrMsg("Please give Your Email!")
}else if(!emailValidation(email)){
  setErrMsg("Give Valid Email!")
}else if(subject === ""){
  setErrMsg("Please Give Your Subject");
}else if(message){
setErrMsg("Message Is Required");
}else{
  setSuccessMsg("Your Message Sent Successfully");
  setErrMsg("");
  setUsername("");
  setPhoneNumber("");
  setEmail("");
  setSubject("");
  setMessage("");
}
  }
  return (
    <section
      id="Contacts"
      className="w-full py-200 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex justify-between">
          <ContactLeft />
          <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-6 py-5">
              {
                errMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">{errMsg}</p>
              }
              {
                successMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">{successMsg}</p>
              }
              <div className="w-full flex gap-10">
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    YOUR NAME
                  </p>
                  <input 
                   onChange={(e)=>setUsername(e.target.value)}
                   value={userName}
                   className={`${errMsg === 'UserName Is Requiered'&& "outline-designColor"} contactInput`} 
                   type="text" />
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input 
                   onChange={(e)=>setPhoneNumber(e.target.value)}
                   value={phoneNumber}className={`${errMsg === 'Phone Number Is Required!'&& "outline-designColor"} contactInput`}  type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {" "}
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input 
                onChange={(e)=>setEmail(e.target.value)}
                value={email}className={`${errMsg === 'Please give Your Email!'&& "outline-designColor"} contactInput`}  type="email" />
              </div>
              <div className="flex flex-col gap-4">
                {" "}
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input 
                 onChange={(e)=>setSubject(e.target.value)}
                 value={subject}
                 className={`${errMsg === 'Please Give Your Subject'&& "outline-designColor"} contactInput`} type="text" />
              </div>
              <div className="flex flex-col gap-4">
                {" "}
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
               <textarea 
                onChange={(e)=>setMessage(e.target.value)}
                value={message}className={`${errMsg === 'Message Is Required'&& "outline-designColor"} contactInput`}  cols="30" rows="15"></textarea>
              </div>
              <div className="w-full">
                <button onClick={handleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">Send Message</button>
              </div>
              {
                errMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">{errMsg}</p>
              }
               {
                successMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">{successMsg}</p>
              }
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
