import Wrapper from '@/components/partials/Wrapper'
import React from 'react'
import HomeVideo from './HomeVideo'
import HomeLatest from './HomeLatest'

const HomeSticky = () => {

  return (
    <section className='py-24'>
        <Wrapper>
            <div className="grid grid-cols-[3fr_1fr] gap-20">
            <div className='main'> 
            <HomeVideo/>
            <HomeLatest/>
          
            </div>
            <aside className='sidebar'> xx</aside>
            </div>
        </Wrapper>
    </section>
  )
}

export default HomeSticky