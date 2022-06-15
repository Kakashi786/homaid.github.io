import React from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';

const Contact = () => {
  return (
     <>
       <div className='container mx-auto flex justify-center items-center h-screen'> 
       <div className='p-0 justify-center relative  z-10  bg-[#2F2F8A]  w-[800px] bg-opacity-100 h-[60%] rounded-lg shadow-md card py-5 px-9'>
         <div className='right flex flex-col w-[50%] justify-between h-[31%]'>
         <h1 className='text-xl font-semibold text-center'>Get in Touch</h1>
         <p className=''>
         I am very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.
         </p>
       
  
         </div>
           <div className='flex justify-between flex-col items-center w-[45%] mt-52'>
           <div className='flex justify-between w-full'>
              <BiPhoneCall size={'22px'}/>
              <p>+1-514-456-2753</p>
           </div>
           <div className='flex justify-between w-full'>
              <MdOutlineMail size={'22px'}/>
              <p>homaidafroz88@gmail.com</p>
           </div>
         </div>
       </div>
       </div>
     </>
  )
}

export default Contact