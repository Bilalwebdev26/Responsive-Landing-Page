import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const Hero = () => {
  return (
   <div className="flex flex-col items-center mt-6 lg:mt-20">

    <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
        VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent  bg-clip-text'>{" "}For Developers</span>
    </h1>

    <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius assumenda perferendis laborum magni at debitis. Ipsam cumque cupiditate alias incidunt ipsa, omnis officiis molestiae ab laudantium, maiores consequatur fuga!</p>

    <div className="flex justify-center my-10">
      <a href="#" className=' bg-gradient-to-r from from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md'>Start For Free</a>
      <a href="#" className='py-3 px-4 mx-3 border rounded-md '>Documentation</a>
    </div>

    <div className='flex mt-10 justify-center'>
        {/* Video Tags */}
        
        <video autoPlay muted loop  className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
         <source src={video1} type='video/mp4'/>
         Your Browser not Support Video tag
        </video>

        <video autoPlay muted loop  className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
         <source src={video2} type='video/mp4'/>
         Your Browser not Support Video tag
        </video>

    </div>

   </div>
  )
}

export default Hero
