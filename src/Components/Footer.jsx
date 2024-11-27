import React from 'react'
import catpeekfooter from '../Images/catpeekfooter.png'

const Footer = () => {
  return (
    <div className='py-10 bg-slate-300 relative font-cute'>
        <img src={catpeekfooter} alt="" className='h-80 absolute -top-[18.6rem] left-1/2 transform -translate-x-1/2'/>
        <div className='max-w-[95rem] mx-auto py-10 flex flex-col items-center justify-center'>
            <h1 className='seven-title tracking-tighter'>
                Psst . . . book a consulation?
            </h1>
        </div>
    </div>
  )
}

export default Footer