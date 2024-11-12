import React from 'react'
import { testimonials } from '../constants/index'
const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>What people <span className='bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent'>Are Saying</span> </h2>
      <div className="flex flex-wrap justify-center mb-10">
        {testimonials.map((reviews,index)=>(
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 " key={index}>
              <div className="bg-neutral-900 rounded-md p-6 text-lg border border-neutral-800 font-thin ">
                <p>{reviews.text}</p>
                <div className="flex mt-8 items-start">
                    <img className='w-12 h-12 mr-6 rounded-full border border-neutral-300' src={reviews.image} alt={reviews.user} />
                    <div className="">
                    <h6 className='font-bold'>{reviews.user}</h6>
                    <span className='text-sm text-neutral-100'>{reviews.company}</span>
                    </div>
                </div>
                
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
