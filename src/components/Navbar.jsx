import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <>
      <div className='container mx-auto my-10'>
        
              <ul className='navbar flex justify-between items-center w-[776px] mx-auto font-[Poppins] font-medium'>
                  <li> <Link to="/">Home</Link></li>
                  <li> <Link to="/about">About</Link></li>
                 <li> <Link to="/"><img src={require('./Logo name.png')} className = 'h-[43px] w-[46px]' alt='H'/></Link></li>
                  <li><Link to= '/work'>Work</Link></li>
                  <li><Link to= '/contact'>Contact</Link></li>

              </ul>
              <div className='mt-[13rem] w-[771px] h-[295px] mx-auto font-[Poppins] flex flex-col justify-between'>
              <p className='font-medium text-2xl'>Hey I'm Homaid Afroz 🐱</p>
            <h1 className='font-bold text-4xl text-left w-[412px] leading-[60px] '>Creative UI Designer
Sourasith Phomhome
Based in Montreal</h1>
   <div className=''>
   <button className='w-[152px] rounded-[33px] bg-gray-600 py-3 text-center grad'>Hire me</button>
   <button className='w-[152px] rounded-[33px] bg-purple-400 py-3 ml-[15px] text-center gradd bg-gradient-to-tr from-[#C961DE] to-[#2954A3] '>Download cv</button>
   </div>


            </div>
             
        
      </div>
      </>
  )
}

export default Navbar