// import React from 'react'

import React, { useState } from 'react'
import CardGrad1 from '../../../assets/svg/CardGrad1.png'
import CardGrad2 from '../../../assets/svg/CardGrad2.png'



import IgoImage1 from '../../../assets/img/IGOsImage1.jpg'
// import IgoImage2 from '../../../assets/img/IGOsImage2.jpg'
import IgoImage3 from '../../../assets/img/IGOsImage3.jpg'
import IgoImage4 from '../../../assets/img/IGOsImage4.jpg'
import IgoImage5 from '../../../assets/img/IGOsImage5.jpg'
import IgoImage6 from '../../../assets/img/IGOsImage6.jpg'
import IgoImage7 from '../../../assets/img/IGOsImage7.jpg'
import IgoImage8 from '../../../assets/img/IGOsImage8.jpg'
import IgoImage9 from '../../../assets/img/IGOsImage9.jpg' 
import IgoImage10 from '../../../assets/img/IGOsImage10.jpg'



const KultIgo = () => {
    const [active, setActive] = useState('Ongoing')

    const data = [
        {
            cardImg: IgoImage1,
            name: 'Genesis Sharks Mystery Box',
            desc: 'Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!',
            totalValume: '388489 ETH',
            FloorPrice: '789 ETH',
            SalesPrice: '3h 1m 50s',
            value: '599 USD',
            TotalUnits: '10000',
            category: 'Ongoing'
        },
        // {
        //     cardImg: IgoImage2,
        //     name: 'Grand Theft Auto',
        //     desc: 'Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!',
        //     totalValume: '388489 ETH',
        //     FloorPrice: '789 ETH',
        //     SalesPrice: '3h 1m 50s',
        //     value: '599 USD',
        //     TotalUnits: '10000',
        //     category: 'Ongoing'
        // },
        {
            cardImg: IgoImage3,
            name: 'Fire Drago’s Roaring Thunder',
            desc: 'Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!',
            totalValume: '388489 ETH',
            FloorPrice: '789 ETH',
            SalesPrice: '3h 1m 50s',
            value: '599 USD',
            TotalUnits: '10000',
            category: 'Ongoing'
        },
        {
            cardImg: IgoImage4,
            name: 'Robowars Genesis Ultimate  Edition',
            desc: 'Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!',
            totalValume: '388489 ETH',
            FloorPrice: '789 ETH',
            SalesPrice: '3h 1m 50s',
            value: '599 USD',
            TotalUnits: '10000',
            category: 'Ongoing'
        },
        {
            cardImg: IgoImage5,
            name: 'Tiny World Huge Adventure',
            desc: 'Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!',
            totalValume: '388489 ETH',
            FloorPrice: '789 ETH',
            SalesPrice: '3h 1m 50s',
            value: '599 USD',
            TotalUnits: '10000',
            category: 'Ongoing'
        },
        {
            cardImg: IgoImage6,
            name: 'Valorant Metastyle Commander',
            desc: 'Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!',
            totalValume: '388489 ETH',
            FloorPrice: '789 ETH',
            SalesPrice: '3h 1m 50s',
            value: '599 USD',
            TotalUnits: '10000',
            category: 'Ended'
        },
        {
            cardImg: IgoImage7,
            name: 'Age of Kids Sarcasm Edition',
            desc: 'Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!',
            totalValume: '388489 ETH',
            FloorPrice: '789 ETH',
            SalesPrice: '3h 1m 50s',
            value: '599 USD',
            TotalUnits: '10000',
            category: 'Upcoming'
        },
        {
            cardImg: IgoImage7,
            name: 'Age of Kids Sarcasm Edition',
            desc: 'Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!',
            totalValume: '388489 ETH',
            FloorPrice: '789 ETH',
            SalesPrice: '3h 1m 50s',
            value: '599 USD',
            TotalUnits: '10000',
            category: 'Ongoing'
        },
        {
            cardImg: IgoImage8,
            name: 'Tiny World Huge Adventure',
            desc: 'Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!',
            totalValume: '388489 ETH',
            FloorPrice: '789 ETH',
            SalesPrice: '3h 1m 50s',
            value: '599 USD',
            TotalUnits: '10000',
            category: 'Upcoming'
        },
        {
            cardImg: IgoImage9,
            name: 'Alen Walker Origins',
            desc: 'Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!',
            totalValume: '388489 ETH',
            FloorPrice: '789 ETH',
            SalesPrice: '3h 1m 50s',
            value: '599 USD',
            TotalUnits: '10000',
            category: 'Upcoming'
        },
        {
            cardImg: IgoImage9,
            name: 'Alen Walker Origins',
            desc: 'Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!',
            totalValume: '388489 ETH',
            FloorPrice: '789 ETH',
            SalesPrice: '3h 1m 50s',
            value: '599 USD',
            TotalUnits: '10000',
            category: 'Ongoing'
        },
        {
            cardImg: IgoImage10,
            name: 'God of War- Kratos Rebirth',
            desc: 'Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!',
            totalValume: '388489 ETH',
            FloorPrice: '789 ETH',
            SalesPrice: '3h 1m 50s',
            value: '599 USD',
            TotalUnits: '10000',
            category: 'Ended'
        },
    ]


    const filteredData = data.filter((item) => item.category === active)
    return (
        <section>

            <div className=' container space-y-5 pb-8'>
                <h2 className='text-center'>Kult IGO’s</h2>
                <p className='md:text-lg text-center'>Check out the Top Live Artists of the week. With the right amount of care and <br /> garnish, you can be featured on our front page as well!</p>

                <div className='flex w-full justify-center gap-5 pt-4'>
                    {['Ongoing', 'Upcoming', 'Ended'].map((item, index) => {
                        return (
                            <div key={index} onClick={() => setActive(item)} className={`${item === active ? 'bg-[#2A47A1]' : 'bg-[#2A47A125]'} w-32 py-2 rounded-custom flex justify-center cursor-pointer border-transparent hover:border-[#2A47A1] hover:bg-[#2A47A1] transition-all duration-[0.2s] ease-in-out`}><span>{item}</span></div>
                        )
                    })}
                </div>


                <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 pt-8 gap-6'>

                    {
                        filteredData.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col relative'>
                                    <img src={item.cardImg} alt="" srcset="" className='rounded-t-xl h-[200px] object-cover' />
                                    <img src={CardGrad1} alt="img" className='absolute bottom-0 z-[-1] h-full rounded-xl' />
                                    <img src={CardGrad2} alt="img" className='absolute bottom-0 right-0 z-[-1] h-full rounded-xl' />

                                    <div className='p-5 space-y-4 '>
                                        <div className='space-y-3' >
                                            <p className='text-2xl font-semibold h-[70px]'>{item.name}</p>
                                            <p className='text-sm text-[#A4A5AD]'>Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='text-base font-medium text-[#A4A5AD]'>
                                                <p>Total Volume</p>
                                                <p>Floor Price</p>
                                                <p>Sales Price</p>
                                                <p>Total units</p>
                                            </div>
                                            <div className='text-base font-semibold text-end'>
                                                <p>{item.totalValume}</p>
                                                <p>{item.SalesPrice}</p>
                                                <p>{item.SalesPrice}</p>
                                                <p>{item.TotalUnits}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }

                </div>

            </div>
        </section >


    )
}

export default KultIgo;






