import { fashionBlog } from '@/components/data/dataFashion'
import { imgUrlPath } from '@/components/helpers/functions-general'
import Wrapper from '@/components/partials/Wrapper'
import React from 'react'
import PartHeader from './part/PartHeader'

const HomeTrending = () => {
    const trendingPost = fashionBlog.filter((item) => item.fashion_is_trending === 1);
   
  return (
    <section className='py-24'>
        <Wrapper>
           <PartHeader title = "Trending Posts"/>
            <div className="grid md:grid-cols-4 gap-5">
               
               {trendingPost.slice(0,4).map((item, key)=> {
          
               return(


                <div className="card text-center" key={key}> 
                    <img src={`${imgUrlPath}${item.fashion_image}`} alt="" className='w-full h-[190px] object-top object-cover mb-5'/>
                    <small className="text-xs uppercase text-accent">beauty</small>
                    <h6 className='mb-0 mt-6'>Lorem ipsum dolor sit amet.</h6>
                    <p className="text-xs mt-3 mb-1 uppercase">febraury 5, 2024</p>
                </div>

                )       
                })}

            </div>
        </Wrapper>
    </section>
  )
}

export default HomeTrending