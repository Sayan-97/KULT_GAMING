import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import swiperImg1 from '../../../assets/img/SwiperHead.png'

const Trending = () => {
    return (
        <section className='relative'>
            <div className='container relative space-y-8'>
                <h3>What’s Hot</h3>

                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                    // // centeredSlides={true}
                    navigation={{ clickable: true, classNames: { next: 'text-white' } }}
                    // pagination={{ clickable: true, el: ".swiper-pagination" }}
                    spaceBetween={40}
                    // className='mySwiper'
                    pagination={{
                        
                        clickable: true,
                        
                    }}
                >
                    <SwiperSlide>
                        <div className='relative rounded-xl'>
                            <img src={swiperImg1} alt="img" className='w-full h-full rounded-xl' />
                            <div className='absolute top-0 left-0 w-full h-full flex items-center' style={{ background: 'rgba(0, 0, 0, 0.40)' }}>
                                <div className='space-y-6 px-10'>
                                    <h3>Appologiume?</h3>
                                    <p className='w-[60%]'>Create, curate, and manage collections of unique NFTs to share and sell.Create, curate, and manage collections of unique NFTs to share and sell.</p>
                                    <button className='bg-bgBtn rounded-custom px-6 py-2'>Find Out More</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative rounded-xl'>
                            <img src={swiperImg1} alt="img" className='w-full h-full rounded-xl' />
                            <div className='absolute top-0 left-0 w-full h-full flex items-center' style={{ background: 'rgba(0, 0, 0, 0.40)' }}>
                                <div className='space-y-6 px-10'>
                                    <h3>Appologiume?</h3>
                                    <p className='w-[60%]'>Create, curate, and manage collections of unique NFTs to share and sell.Create, curate, and manage collections of unique NFTs to share and sell.</p>
                                    <button className='bg-bgBtn rounded-custom px-6 py-2'>Find Out More</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative rounded-xl'>
                            <img src={swiperImg1} alt="img" className='w-full h-full rounded-xl' />
                            <div className='absolute top-0 left-0 w-full h-full flex items-center' style={{ background: 'rgba(0, 0, 0, 0.40)' }}>
                                <div className='space-y-6 px-10'>
                                    <h3>Appologiume?</h3>
                                    <p className='w-[60%]'>Create, curate, and manage collections of unique NFTs to share and sell.Create, curate, and manage collections of unique NFTs to share and sell.</p>
                                    <button className='bg-bgBtn rounded-custom px-6 py-2'>Find Out More</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative rounded-xl'>
                            <img src={swiperImg1} alt="img" className='w-full h-full rounded-xl' />
                            <div className='absolute top-0 left-0 w-full h-full flex items-center' style={{ background: 'rgba(0, 0, 0, 0.50)' }}>
                                <div className='space-y-6 px-10'>
                                    <h3>Appologiume?</h3>
                                    <p className='w-[60%]'>Create, curate, and manage collections of unique NFTs to share and sell.Create, curate, and manage collections of unique NFTs to share and sell.</p>
                                    <button className='bg-bgBtn rounded-custom px-6 py-2'>Find Out More</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Trending