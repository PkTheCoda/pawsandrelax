import React from 'react'
import dogmain from '../Images/dogmain.png'
import { IoPaw } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='bg-main py-20 font-cute '>
      <div className='max-w-[85rem] mx-auto grid grid-cols-12'>

        <div className='col-span-6 py-10 text-white flex flex-col justify-center gap-y-4'>
          <h1 className='font-medium eight-title tracking-tighter z-40'>
            Your Dog's <br />
            <span className='relative'>
              Second Home
            </span>
          </h1>
          <p className='one-title tracking-wide max-w-2xl leading-9'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorum. Porro id distinctio architecto exercitationem
          </p>
          <button className='rounded-full shadow-sm px-4 py-2 w-max bg-[#FFFFB1] text-main transition300scale'>
            Make an Appointment
          </button>
        </div>

        <div className='col-span-6'>
          <img src={dogmain} alt="Picture of a dog" className='relative'/>
        </div>

      </div>
    </div>
  )
}

export default Hero