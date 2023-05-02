import React from 'react'

import Card1 from '../../../assets/img/Card1.jpg'
import Card2 from '../../../assets/img/Card2.jpg'
import Card3 from '../../../assets/img/Card3.jpg'
import Card4 from '../../../assets/img/Card4.jpg'
import Card5 from '../../../assets/img/Card5.jpg'
import Card6 from '../../../assets/img/Card6.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { BsArrowRight } from 'react-icons/bs'

import CardGrad1 from '../../../assets/svg/CardGrad1.png'
import CardGrad2 from '../../../assets/svg/CardGrad2.png'


const PartneredGames = () => {

    const cards = [
        { imgSrc: Card1, title: 'Heaven Platform', tag: 'HV' },
        { imgSrc: Card2, title: 'Heaven Platform', tag: 'HV' },
        { imgSrc: Card3, title: 'Heaven Platform', tag: 'HV' },
        { imgSrc: Card4, title: 'Heaven Platform', tag: 'HV' },
        { imgSrc: Card5, title: 'Heaven Platform', tag: 'HV' },
        { imgSrc: Card6, title: 'Heaven Platform', tag: 'HV' },
    ]

    return (
        <section>
            <div className='container w-full'>
                <div className='w-full flex justify-between items-center'>
                    <h3>Partnered Games</h3>
                    <p className='text-secondary text-xl font-medium flex gap-2 items-center'>Browse All <BsArrowRight /></p>
                </div>

                <div className='w-full mt-10'>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        freeMode={true}
                        // centeredSlides={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {
                            cards.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='relative rounded-xl'>
                                        <img src={item.imgSrc} alt="img" className='w-full h-[250px] rounded-t-xl object-cover' />
                                        <img src={CardGrad1} alt="img" className='absolute bottom-0 z-[-1] h-full rounded-xl' />
                                        <img src={CardGrad2} alt="img" className='absolute bottom-0 right-0 z-[-1] h-full rounded-xl' />
                                        <div className='px-4 py-8 space-y-6 w-full'>
                                            <p className='flex gap-2 items-center'> <span className={`${index % 2 === 0 ? 'bg-secondary' : 'bg-primary'} p-1 rounded-custom`}>8.7</span> {item.title}</p>
                                            <p className='flex gap-2 items-center'> <span className={`${index % 2 === 0 ? 'bg-secondary' : 'bg-primary'} p-1 rounded-custom`}>W</span> {item.tag}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default PartneredGames