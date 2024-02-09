import React from 'react'
import Navbar from '../components/Navbar'
import { ReactTyped } from "react-typed";
import {motion} from 'framer-motion'
import login from '../assets/login.png'
import { fadeIn,staggerContainer } from '../animation/motion';
// import {main} from '../animation/motion' 
export default function Home() {
  return (
    <div className='bg-grey-100 '>
    <Navbar />
    <motion.div  variants={staggerContainer }
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}  className='flex'>
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className='flex-1 justify-center mt-[200px]' style={{ textAlign: 'center' }}>
        <ReactTyped strings={['Nazar hati durgatna ghati', 'Apni shuraksha aapne hath']} typeSpeed={100} backSpeed={50} loop className='text-5xl pl-2 md:pl-4' />
          <p className='text-3xl mt-4'> Dont let drivers risk your life,<br />Use our app and sleep peacefully,<br />let our app alarm you and your driver for his carelessness</p>
          <button className='bg-transparent border-[#7D7FB0] border-[3px] rounded-xl py-2 mt-10  px-4'>Get Started</button>
          <button className='bg-[#7D7FB0] text-white rounded-xl py-2 px-4 ml-6'>Learn More</button>
      </motion.div>
      <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className='flex-1'>
      <img src={login} alt="" className='w-50 h-auto'/>
      {/* <video width="320" height="240" controls>
      <source src={main} type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
      </motion.div>
    </motion.div>
    </div>
  )
}
