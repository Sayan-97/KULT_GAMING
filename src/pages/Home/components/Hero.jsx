import React from 'react'
import Gradient from '../../../assets/gradient/home-hero.png'
import Mtns from '../../../assets/gradient/mtns.png'
import Lines from '../../../assets/gradient/lines.png'

const Hero = () => {
    return (
        <section className='relative'>
            <img src={Mtns} alt="img" className='max-md:hidden block absolute w-full top-[35%] z-[-2]' />
            <img src={Gradient} alt="img" className='absolute top-[10%] lg:top-[6%] right-[50%] translate-x-[50%] z-[-1] object-cover lg:w-[70%]'/>
            <img src={Lines} alt="img" className='max-md:hidden block absolute top-[50%] w-full h-[95%] z-[-3]'/>
            <div className='container relative flex flex-col items-center justify-center gap-6'>
                <span style={{ color: 'rgba(255, 255, 255, 0.66)' }} className='uppercase text-xl font-medium' >Welcome to Kult</span>
                <h1 className='leading-tight text-center'>The Future Of<br /> Gaming</h1>
                <p className='md:text-lg text-center'>KULT is a dedicated gaming launchpad & IGO platform. We bring to you a platform projects<br />
                    can use to maximize their project's scope.</p>
                <div className='space-x-5'>
                    <button className='px-11 py-4'>Discover</button>
                    <button className='btn-secondary px-8 py-4'>Watch Now</button>
                </div>
            </div>
        </section>
    )
}

export default Hero