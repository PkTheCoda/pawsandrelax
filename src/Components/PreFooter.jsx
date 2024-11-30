import React from 'react'
import catpeekfooter from '../Images/catpeekfooter3.png'
import FooterForm from './FooterForm'
import dogfooterbackground from '../Images/dogfooterbackground.png'

const PreFooter = () => {
  return (
    <div 
      className='py-10 bg-slate-100 relative font-cute'
      style={{
        backgroundImage: `url(${dogfooterbackground})`,
        backgroundSize: 'cover', // or 'contain' based on your preference
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    > 

        {/* <img src={catpeekfooter} alt="" className='h-80 absolute -top-[19.5rem] left-1/2 transform -translate-x-1/2'/> */}
        
        <div className='max-w-[75rem] mx-auto py-10 flex flex-col items-center justify-center'>
            <h1 className='seven-title tracking-tighter'>
                Psst . . . book an appointment?
            </h1>

            <FooterForm />
        </div>
    </div>
  )
}

export default PreFooter