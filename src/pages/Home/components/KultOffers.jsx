import React from 'react'

import Gamepedia from '../../../assets/img/gamepedia.png'
import Launchpad from '../../../assets/img/launchpad.png'
import NFTImg from '../../../assets/img/netImg.png'
import Grad from '../../../assets/gradient/kult-offers-grad.png'

const KultOffers = () => {

    const offers = [
        {
            imgSrc: Gamepedia,
            title: 'Gamepedia',
            des: 'A comprehensive, curated and community-driven Web3 gaming directory positioned as the main traffic source'
        },
        {
            imgSrc: Launchpad,
            title: 'Launchpad',
            des: 'Working as a tierless and permissionless launchpad, breaks the barriers of entry to provide equal pool weight for all contributors'
        },
        {
            imgSrc: NFTImg,
            title: 'NFT Marketplace',
            des: 'Fastest NFT Marketplace Connect, Create & Publish. The supply & exchange ground for gamers.To the point NFT sales & rentals'
        },
    ]

    return (
        <section>
            <div className='container grid justify-items-center space-y-44'>
                <h2>Kult Offers</h2>
                <div className='w-full grid grid-cols-1 max-sm:gap-32 md:grid-cols-2 md:gap-y-32 md:gap-x-5 lg:grid-cols-3 lg:gap-6'>
                    {
                        offers.map(( item, index ) => {
                            return(
                                <div key={index} className='bg-[#120F2F] pb-16 pt-40 rounded-xl grid justify-items-center gap-6 relative'>
                                    <img src={item.imgSrc} alt="img" className='absolute top-[-30%] z-10' />
                                    <img src={Grad} alt="img" className='absolute top-[-50%] z-[0]' />
                                    <h3>{item.title}</h3>
                                    <p className='text-center w-[70%]'>{item.des}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default KultOffers