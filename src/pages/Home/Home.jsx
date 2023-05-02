import React from 'react'
import { ExploreNFTMarketplace, Hero, KultOffers } from './components'

const Home = () => {
    return (
        <div className='space-y-10'>
            <Hero />
            <KultOffers />
            <ExploreNFTMarketplace />
        </div>
    )
}

export default Home
