import { fashionBlog } from '@/components/data/dataFashion'
import { imgUrlPath } from '@/components/helpers/functions-general'
import Wrapper from '@/components/partials/Wrapper'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react'





const HomeBanner = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <button
            className='absolute right-1 bottom-1/2 -translate-y-1/2 size-[50px] flex justify-center items-center bg-dark hover:bg-accent z-40 
            group-hover:opacity-100 opacity-0 transition-all'
            onClick={onClick}
          > <ChevronRight stroke={'#fff'} />
          </button>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button
            className='absolute left-1 bottom-1/2 -translate-y-1/2 size-[50px] flex justify-center items-center bg-dark hover:bg-accent z-40 
             group-hover:opacity-100 opacity-0 transition-all'
            onClick={onClick}
          > <ChevronLeft stroke={'#fff'} />
          </button>
        );
      }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    
      };



  return (
    <div>
         <section className="banner">
        <Wrapper>
    <div className='group'>
            <Slider {...settings}>



              {fashionBlog.slice(0,4).map((item, key)=>{
              return(

            
                <div className="banner-card relative outline-none px-1" key ={key} >
                    <div className='bg-black'>
                <img src={`${imgUrlPath}${item.fashion_image}`}className="width-full h-[746px] object-cover object-center"/>
                </div>
                
                <div className="absolute bottom-1 text-center left-1/1-translate-x-1/2 w-[330px] text-light z-50">
                  <small className="text-xs uppercase">{item.fashion_category}</small>
                  <p className="text-xs mt-3 mb-1 uppercase">{item.fashion_publish}</p>
                  <h4>{item.fashion_title}</h4>
                </div>
             </div>

              )
            })}
               
              
            </Slider>
     </div>
        </Wrapper>
   </section>
    </div>
  )
}

export default HomeBanner