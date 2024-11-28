import React from 'react'
import dogmain from '../Images/dogmain.png'
import { IoPaw } from "react-icons/io5";

import doghappyicon from '../Images/icons/doghappyicon.png'
import dogicon from '../Images/icons/dogicon.png'
import staricon from '../Images/icons/staricon.png'


const Hero = () => {
  return (
    <div className='bg-slate-100 py-20 font-cute relative'>

      <div className='h-[12rem] w-full bg-slate-200 absolute bottom-0'>

      </div>

      <div className='max-w-[95rem] mx-auto flex flex-col gap-y-4 relative'>

        {/* <IoPaw className='absolute w-40 h-40 right-0 -rotate-45 text-slate-200 top-1/4'/> */}

        <div className='py-10 text-black flex flex-col items-center gap-y-4 text-center'>
          <h1 className='font-medium eight-title tracking-tighter z-40 relative'>
            Dog Grooming <br />
            <span className='relative'>
              Done with Care
            </span>
            <IoPaw className='absolute w-14 h-14 text-slate-300 -top-6 -rotate-45 left-0 -z-10'/>
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

        <div className='py-10 mt-20 w-full max-w-[62rem] mx-auto grid grid-cols-3 gap-4'>

          <div className='bg-white rounded-lg shadow-lg w-full flex items-center gap-6 px-4 py-8 -rotate-1'>
            <img src={staricon} alt="" className='h-16 w-16'/>
            <div className=''>
              <h4 className='five-title'>
                4.9/5
              </h4>
              <p className='text-slate-700'>
                Average Rating by Pet Parents Across Richmond
              </p>
            </div>    
          </div>

          <div className='bg-white rounded-lg shadow-lg w-full flex items-center gap-6 px-4 py-8 rotate-1'>
            <img src={dogicon} alt="" className='h-16 w-16'/>
            <div className=''>
              <h4 className='five-title'>
                400+
              </h4>
              <p className='text-slate-700'>
                Dogs and Pets groomed in our facility
              </p>
            </div>    
          </div>

          <div className='bg-white rounded-lg shadow-lg w-full flex items-center gap-6 px-4 py-8 -rotate-1'>
            <img src={doghappyicon} alt="" className='h-16 w-16'/>
            <div className=''>
              <h4 className='five-title'>
                98%
              </h4>
              <p className='text-slate-700'>
                of customers said they would be coming back
              </p>
            </div>    
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero