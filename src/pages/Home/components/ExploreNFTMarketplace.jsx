import React, { useState } from 'react'

import Card1 from '../../../assets/img/Card1.jpg'
import Card2 from '../../../assets/img/Card2.jpg'
import Card3 from '../../../assets/img/Card3.jpg'
import Card4 from '../../../assets/img/Card4.jpg'
import Card5 from '../../../assets/img/Card5.jpg'
import Card6 from '../../../assets/img/Card6.jpg'

import CardGrad1 from '../../../assets/svg/CardGrad1.png'
import CardGrad2 from '../../../assets/svg/CardGrad2.png'

import avatar from '../../../assets/img/cardavatar.png'
import ETH from '../../../assets/svg/ethereum.svg'

const ExploreNFTMarketplace = () => {

    const [active, setActive] = useState('Exclusive')

    const data = [
        {
            imgSrc: Card1,
            name: 'Stoned',
            time: '3h 1m 50s',
            value: '0.13 ETH',
            category: 'Exclusive'
        },
        {
            imgSrc: Card2,
            name: 'Mystic Island',
            time: '3h 1m 50s',
            value: '0.13 ETH',
            category: 'Exclusive'
        },
        {
            imgSrc: Card3,
            name: 'Cyberpunk Metaverse',
            time: '3h 1m 50s',
            value: '0.13 ETH',
            category: 'Exclusive'
        },
        {
            imgSrc: Card4,
            name: 'Heaven Platform',
            time: '3h 1m 50s',
            value: '0.13 ETH',
            category: 'Exclusive'
        },
        {
            imgSrc: Card5,
            name: 'Metachicks',
            time: '3h 1m 50s',
            value: '0.13 ETH',
            category: 'Exclusive'
        },
        {
            imgSrc: Card6,
            name: 'Roll Meta',
            time: '3h 1m 50s',
            value: '0.13 ETH',
            category: 'Exclusive'
        },

        {
            imgSrc: Card6,
            name: 'Roll Meta',
            time: '3h 1m 50s',
            value: '0.13 ETH',
            category: 'Random'
        },
        {
            imgSrc: Card5,
            name: 'Metachicks',
            time: '3h 1m 50s',
            value: '0.13 ETH',
            category: 'Random'
        },
        {
            imgSrc: Card4,
            name: 'Heaven Platform',
            time: '3h 1m 50s',
            value: '0.13 ETH',
            category: 'Random'
        },
        {
            imgSrc: Card3,
            name: 'Cyberpunk Metaverse',
            time: '3h 1m 50s',
            value: '0.13 ETH',
            category: 'Random'
        },

        {
            imgSrc: Card4,
            name: 'Heaven Platform',
            time: '3h 1m 50s',
            value: '0.13 ETH',
            category: 'Sci-Fi'
        },

        {
            imgSrc: Card3,
            name: 'Cyberpunk Metaverse',
            time: '3h 1m 50s',
            value: '0.13 ETH',
            category: 'Retrowave'
        },
    ]

    const filteredData = data.filter((item) => item.category === active)

    return (
        <section>
            <div className='container space-y-5'>
                <h2 className='text-center'>Explore NFT Marketplace</h2>
                <p className='md:text-lg text-center'>Now launch your NFT Collections with just 3 Clicks.Connect,<br /> Create, & Publish!</p>
                <div className='flex w-full justify-center gap-5 pt-4'>
                    {['Exclusive', 'Random', 'Sci-Fi', 'Retrowave'].map((item, index) => {
                        return (
                            <div key={index} onClick={() => setActive(item)} className={`${item === active ? 'bg-[#2A47A1]' : 'bg-[#2A47A125]'} w-32 py-2 rounded-custom flex justify-center cursor-pointer border-transparent hover:border-[#2A47A1] hover:bg-[#2A47A1] transition-all duration-[0.2s] ease-in-out`}><span>{item}</span></div>
                        )
                    })}
                </div>
                <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 pt-8 gap-6'>
                    {
                        filteredData.map((item,index) => {
                            return(
                                <div key={index} className='flex flex-col relative rounded-b-xl'>
                                    <img src={item.imgSrc} alt="img" className='rounded-t-xl h-[300px] object-cover' />
                                    <img src={CardGrad1} alt="img" className='absolute bottom-0 z-[-1] h-full rounded-xl' />
                                    <img src={CardGrad2} alt="img" className='absolute bottom-0 right-0 z-[-1] h-full rounded-xl' />

                                    <div className='p-5 space-y-4 rounded-b-xl'>

                                        <p className='text-2xl font-semibold'>{item.name}</p>
                                        <div className='flex items-center'>
                                            <div className='flex relative'>
                                                <img src={avatar} alt="img" className='relative'/>
                                                <img src={avatar} alt="img" className='relative ml-[-15%]'/>
                                                <img src={avatar} alt="img" className='relative ml-[-15%]' />
                                            </div>
                                            <p>Multiple Owners</p>
                                        </div>
                                        <div className='flex justify-between items-end'>
                                            <div className='space-y-2'>
                                                <p className='text-lg'>Auction time</p>
                                                <p className='text-[#6C7AA0]'>{item.time}</p>
                                            </div>
                                            <div className='flex items-center gap-2 text-2xl font-medium'>
                                                <img src={ETH} alt="img" />
                                                <p>{item.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='flex justify-center py-8'>
                    <button className='bg-bgBtn px-5 py-4'>Show More</button>
                </div>
            </div>
        </section>
    )
}

export default ExploreNFTMarketplace
