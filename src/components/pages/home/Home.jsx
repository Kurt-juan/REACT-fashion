import Header from "@/components/partials/Header"
import Wrapper from "@/components/partials/Wrapper"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";


const Home = () => {
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
    <>
   <Header/>
   <section className="banner">
        <Wrapper>
    <div className='group'>
            <Slider {...settings}>

                <div className="banner-card relative  outline-none px-1">
                    <div className='bg-black'>
                <img src="https://i.pinimg.com/originals/be/0b/c6/be0bc67946b4bbf63c28567aafb8c9a9.jpg" alt="" className='w-full block mx-auto object-cover transition-opacity h-[600px]'/>
                </div>
                
                <div className="absolute bottom-1 text-center left-1/1-translate-x-1/2 w-[330px] text-light z-50">
                  <small className="text-xs uppercase">Lifestyle</small>
                  <p className="text-xs mt-3 mb-1 uppercase">February 8, 2020</p>
                  <h4>Sustainable Fashion Welcome Revolution</h4>
                </div>
             </div>

                <div className="banner-card relative  outline-none  px-1">
                    <div className='bg-black'>
                <img src="https://i.pinimg.com/originals/be/0b/c6/be0bc67946b4bbf63c28567aafb8c9a9.jpg" alt="" className='w-full block mx-auto object-cover transition-opacity h-[600px]'/>
                </div>
                
                <div className="absolute bottom-1 text-center left-1/1-translate-x-1/2 w-[330px] text-light z-50">
                  <small className="text-xs uppercase">Lifestyle</small>
                  <p className="text-xs mt-3 mb-1 uppercase">February 8, 2020</p>
                  <h4>Sustainable Fashion Welcome Revolution</h4>
                </div>
             </div>
                <div className="banner-card relative  outline-none px-1">
                    <div className='bg-black'>
                <img src="https://i.pinimg.com/originals/be/0b/c6/be0bc67946b4bbf63c28567aafb8c9a9.jpg" alt="" className='w-full block mx-auto object-cover transition-opacity h-[600px]'/>
                </div>
                
                <div className="absolute bottom-1 text-center left-1/1-translate-x-1/2 w-[330px] text-light z-50">
                  <small className="text-xs uppercase">Lifestyle</small>
                  <p className="text-xs mt-3 mb-1 uppercase">February 8, 2020</p>
                  <h4>Sustainable Fashion Welcome Revolution</h4>
                </div>
             </div>
               
              
            </Slider>
     </div>
        </Wrapper>
   </section>
   </>
  )
}

export default Home