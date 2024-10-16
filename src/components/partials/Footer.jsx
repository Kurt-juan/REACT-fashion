import React from 'react'
import Logo from './Logo'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='py-5 border-top border-gray-200'>
        <Wrapper>
             <div className=" md:grid grid-cols-[1fr_3fr_1fr]">
            <Logo/>
            <nav className='justify self-center'>
                <ul className='md:flex gap-10 text-center my-5 md:my-0 space-y-2 md:space-y-0 '>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/">LifeStyle</Link></li>
                    <li><Link to = "/">Culture</Link></li>
                    <li><Link to = "/">Entertainment</Link></li>
                    <li><Link to = "/">Features</Link></li>
                </ul>
            </nav>
            <p className='text-center'>Zemez ©. All rights reserved. </p>
            </div>
        </Wrapper>
    </footer>
  )
}

export default Footer