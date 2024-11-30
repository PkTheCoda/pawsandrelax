import React from 'react'
import dogservices from '../Images/dogservices.png'

const Services = () => {
  return (
    <div className='bg-slate-200 font-cute'>
        <div className='max-w-[90rem] mx-auto space-y-4'>
            <div className='flex flex-col items-center gap-y-2 text-center'>
                <h2 className='eight-title tracking-tight'>
                    Our Services
                </h2>
                <p className='max-w-2xl one-title px-4'>
                    Explore our tailored grooming services designed to pamper your furry friend, ensuring they look and feel their best!
                </p>
            </div>

            <div className='py-10 grid grid-cols-1 lg:grid-cols-10'>
                <div className="py-10 col-span-3 flex flex-col justify-around lg:space-y-0 space-y-10 lg:px-0 px-4">

                    <div className='flex gap-4 items-center'>
                        <h2 className='seven-title text-main'>
                            01
                        </h2>
                        <div className='flex flex-col'>
                            <h2 className='four-title'>
                                Full Groom & Style
                            </h2>
                            <p className='text-slate-700'>
                                A head-to-tail grooming session with a bath, haircut, nail trim, ear cleaning, and finishing touches.
                            </p>
                        </div>  
                    </div>

                    <div className='flex gap-4 items-center'>
                        <h2 className='seven-title text-main'>
                            02
                        </h2>
                        <div className='flex flex-col'>
                            <h2 className='four-title'>
                                Puppy’s First Spa Day
                            </h2>
                            <p className='text-slate-700'>
                                Gentle grooming for your pup's first visit, designed to create a stress-free and fun experience.
                            </p>
                        </div>  
                    </div>

                    <div className='flex gap-4 items-center'>
                        <h2 className='seven-title text-main'>
                            03
                        </h2>
                        <div className='flex flex-col'>
                            <h2 className='four-title'>
                            Shedding Solution Treatment
                            </h2>
                            <p className='text-slate-700'>
                                A specialized de-shedding service to reduce shedding, promote a healthy coat, and keep your home fur-free.
                            </p>
                        </div>  
                    </div>

                </div>

                <div className="py-10 col-span-4">
                    <img src={dogservices} alt="" />
                </div>

                <div className="py-10 col-span-3 flex flex-col justify-around lg:space-y-0 space-y-10 lg:px-0 px-4">
                    
                    <div className='flex gap-4 items-center'>
                        <h2 className='seven-title text-main'>
                            04
                        </h2>
                        <div className='flex flex-col'>
                            <h2 className='four-title'>
                                Creative Grooming
                            </h2>
                            <p className='text-slate-700'>
                                Add flair with pet-safe dye, glitter accents, or stencil art for a truly unique look.
                            </p>
                        </div>  
                    </div>

                    <div className='flex gap-4 items-center'>
                        <h2 className='seven-title text-main'>
                            05
                        </h2>
                        <div className='flex flex-col'>
                            <h2 className='four-title'>
                                Aromatherapy Bath
                            </h2>
                            <p className='text-slate-700'>
                                A calming bath with essential oils to relax your dog and leave them smelling fresh and fabulous.
                            </p>
                        </div>  
                    </div>

                    <div className='flex gap-4 items-center'>
                        <h2 className='seven-title text-main'>
                            06
                        </h2>
                        <div className='flex flex-col'>
                            <h2 className='four-title'>
                                Pawdicure Package
                            </h2>
                            <p className='text-slate-700'>
                                Includes a nail trim, paw balm application, and a paw massage to keep those paws healthy and soft.
                            </p>
                        </div>  
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Services