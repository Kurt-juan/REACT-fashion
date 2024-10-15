import React from 'react'
import PartHeader from './part/PartHeader'
import { imgUrlPath } from '@/components/helpers/functions-general'

const HomeLatest = () => {
  return (

    <div className='latest '>
         <PartHeader title = "LATEST BLOG POSTS" />

         <div className="flex gap-5 pb-8 mb-5 border-b border-gray-200 items-center">
        <img src={`${imgUrlPath}/bini-6.jpg`} alt="" className='w-[390px] h-[247px] object-cover'/>
        <div className='text-center mx-auto'>
         <small className="text-xs uppercase text-accent">beauty</small>
         <h6 className='mb-0 mt-6 text-[1.5rem]'>Lorem ipsum dolor sit amet.</h6>
         <p className="text-xs mt-3 mb-1 uppercase">febraury 5, 2024</p>
    </div>
    </div>
    </div>
  )
}

export default HomeLatest