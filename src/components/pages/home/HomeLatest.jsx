import React from 'react'
import PartHeader from './part/PartHeader'
import { imgUrlPath } from '@/components/helpers/functions-general'
import { fashionBlog } from '@/components/data/dataFashion'

const HomeLatest = () => {

  const latestPost = fashionBlog.filter((item) => {
    
    return (
      Math.floor(
        Math.abs(new Date(item.fashion_publish) - new Date()) /
          (1000 * 60 * 60 * 24)
      ) < 10 
    );
  });

console.log(latestPost)


  return (

    <div className='latest'>
         <PartHeader title = "LATEST BLOG POSTS" />
        {latestPost.slice(0,5).map((item, key) => {
          
  return( 

      <div className="md:flex gap-5 pb-8 mb-5 border-b border-gray-200 items-center" key= {key}>
      <img src={`${imgUrlPath}/${item.fashion_image}`} alt="" className='w-[390px]  h-[247px] object-cover'/>
        <div className='text-center mx-auto'>
        <small className="text-xs uppercase text-accent">{item.fashion_category}</small>
        <h6 className='mb-0 mt-6 text-[1.5rem]'>{item.fashion_title} </h6>
        <p className="text-xs mt-3 mb-1 uppercase">{item.fashion_publish} </p>
        </div>
      </div>
    )
    
  })}
    </div>

  )
}

export default HomeLatest