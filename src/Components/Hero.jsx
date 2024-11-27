import React from 'react'
import dogmain from '../Images/dogmain.png'
import { IoPaw } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='bg-slate-100 py-20 font-cute'>
      <div className='max-w-[95rem] mx-auto flex flex-col gap-y-4 relative'>

        {/* <IoPaw className='absolute w-40 h-40 right-0 -rotate-45 text-slate-200 top-1/4'/> */}

        <div className='py-10 text-black flex flex-col items-center gap-y-4 text-center'>
          <h1 className='font-medium eight-title tracking-tighter z-40 relative'>
            Your Dog's <br />
            <span className='relative'>
              Second Home
            </span>
            <IoPaw className='absolute w-14 h-14 text-slate-300 -top-6 -rotate-45 left-10 -z-10'/>
            <IoPaw className='absolute w-14 h-14 text-slate-300 bottom-0 rotate-45 -right-6 -z-10'/>
          </h1>
          <p className='one-title tracking-wide leading-9 max-w-2xl relative'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorum. Porro id distinctio architecto exercitationem
          </p>
          <button className='rounded-full shadow-sm px-4 py-2 w-max bg-main text-white transition300scale'>
            Book an Appointment
          </button>
        </div>

        <div className=''>
          <img src={dogmain} alt="Picture of a dog" className='relative'/>
        </div>

      </div>
    </div>
  )
}

export default Hero