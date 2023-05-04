import React from 'react'

import CardGrad1 from '../../../assets/svg/CardGrad1.png'
import CardGrad2 from '../../../assets/svg/CardGrad2.png'

import Card1 from '../../../assets/img/Card1.jpg'
import Card2 from '../../../assets/img/Card2.jpg'
import Card3 from '../../../assets/img/Card3.jpg'
import Card4 from '../../../assets/img/Card4.jpg'
import Card5 from '../../../assets/img/Card5.jpg'
import Card6 from '../../../assets/img/Card6.jpg'

import { FiClock } from 'react-icons/fi';


const UpcomingIGO = () => {


    const cardData = [
        {
            imgSrc: Card1,
            name: 'The legends of Elysium',
            time: '05:08:46'
        },
        {
            imgSrc: Card2,
            name: 'Chain of Alliance',
            time: '05:08:46'
        },
        {
            imgSrc: Card3,
            name: 'Whisper of Soul',
            time: '05:08:46'
        },
        {
            imgSrc: Card4,
            name: 'Rage Effect',
            time: '05:08:46'
        },
        {
            imgSrc: Card5,
            name: 'Occupy Wallstreet',
            time: '05:08:46'
        },
        {
            imgSrc: Card6,
            name: 'Dragon Ramen',
            time: '05:08:46'
        },

    ]


    return (
        <section>
            <div className='container space-y-5'>
                <h2 className='text-center'>Upcoming IGO’s</h2>
                <p className='text-center'>Easy to join IGOs designed to bring ease for all users. Stay connected and subscribe to stay <br />up-to-date with our IGOs and upcoming projects.</p>

                <div className='w-full grid lg:grid-cols-3 pt-8 gap-6'>
                    {cardData.map((item, index) => {
                        return (
                            <div key={index} className='relative'>
                                <img src={item.imgSrc} alt="" srcset="" className='rounded-t-xl h-[200px] w-full object-cover' />
                                <img src={CardGrad1} alt="img" className='absolute bottom-0 z-[-1] h-full rounded-xl' />
                                <img src={CardGrad2} alt="img" className='absolute bottom-0 right-0 z-[-1] h-full rounded-xl' />
                                <div className='px-4 py-4 space-y-3'>
                                    <p className='text-xl font-semibold'>{item.name}</p>
                                    <div className='inline-flex items-center gap-2 px-4 py-1 rounded-custom' style={{ background: 'linear-gradient(93.03deg, rgba(255, 255, 255, 0.16) 1.38%, rgba(255, 255, 255, 0.0672) 102.75%)', backdropFilter: 'blur(6px)' }}>
                                        <FiClock />
                                        <p className=''>{item.time}</p>

                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
                <div className='flex justify-center py-8'>
                    <button className='bg-bgBtn px-5 py-4'>View More</button>
                </div>

            </div>
        </section>
    )
}

export default UpcomingIGO;




