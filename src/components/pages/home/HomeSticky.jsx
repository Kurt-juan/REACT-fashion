import Wrapper from '@/components/partials/Wrapper'
import React from 'react'
import HomeVideo from './HomeVideo'
import HomeLatest from './HomeLatest'
import WidgetFollow from './widget/WidgetFollow'
import WidgetNewsLetter from './widget/WidgetNewsLetter'

const HomeSticky = () => {

  return (
    <section className='py-24'>
        <Wrapper>
            <div className="md:grid grid-cols-[3fr_1fr]  w-full">
            <div className='main'> 

            <HomeVideo/>
            <HomeLatest/>
            </div>

            <aside className='sidebar sticky top-5 self-start '>  
            <WidgetFollow/> 
            <WidgetNewsLetter/>
            </aside>
            
            </div>
        </Wrapper>

    </section>
  )
}

export default HomeSticky