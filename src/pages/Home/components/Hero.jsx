import React from 'react'
import Gradient from '../../../assets/gradient/home-hero.png'
import Mtns from '../../../assets/gradient/mtns.png'
import Lines from '../../../assets/gradient/lines.png'

const Hero = () => {
    return (
        <div className='relative'>
            <img src={Mtns} alt="img" className='absolute w-full top-[29%] z-[-2]' />
            <img src={Gradient} alt="img" className='absolute top-[-15%] right-[50%] translate-x-[50%] z-[-1] object-cover w-[70%]'/>
            <img src={Lines} alt="img" className='absolute top-[50%] w-full h-[130%] z-[-3]'/>
            <div className='container relative py-20 flex flex-col items-center justify-center gap-6'>
                <span style={{ color: 'rgba(255, 255, 255, 0.66)' }} className='uppercase text-xl font-semibold' >Welcome to Kult</span>
                <h1 className='text-7xl leading-tight text-center font-bold font-Clash'>The Future Of<br /> Gaming</h1>
                <p className='text-lg text-center'>KULT is a dedicated gaming launchpad & IGO platform. We bring to you a platform projects<br />
                    can use to maximize their project's scope.</p>
                <div className='space-x-5'>
                    <button className='px-6 py-3 bg-bgBtn rounded-custom'>Discover</button>
                    <button>Discover</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero