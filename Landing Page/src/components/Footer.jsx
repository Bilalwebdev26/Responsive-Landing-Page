import React from 'react'
import { resourcesLinks,communityLinks,platformLinks } from '../constants/index'
const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700'>
         <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
                <h3 className='text-md font-bold mb-4'>Resources</h3>
                <ul className='space-y-2'>
                    {resourcesLinks.map((links,index)=>(
                       <li className='' key={index}>
                            <a className='text-neutral-300 hover:text-white' href={links.href}>{links.text}</a>
                       </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className='text-lg font-bold mb-4'>Community</h3>
                <ul className='space-y-2'>
                    {communityLinks.map((links,index)=>(
                       <li className='' key={index}>
                            <a className='text-neutral-300 hover:text-white' href={links.href}>{links.text}</a>
                       </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className='text-lg font-bold mb-4'>Platform</h3>
                <ul className='space-y-2'>
                    {platformLinks.map((links,index)=>(
                       <li className='' key={index}>
                            <a className='text-neutral-300 hover:text-white' href={links.href}>{links.text}</a>
                       </li>
                    ))}
                </ul>
            </div>

         </div>
    </footer>
  )
}

export default Footer
