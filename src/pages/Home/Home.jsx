import React from 'react'
import { ExploreNFTMarketplace, Hero, KultOffers, UpcomingIGO,TopArtist, TopCollection, KultIgo, JoinKult, TeamMember } from './components'
// import TopArtist from './components/TopArtist'

const Home = () => {
    return (
        <div className='space-y-10'>
            <Hero />
            <KultOffers />
            <UpcomingIGO/>
            <ExploreNFTMarketplace />
            <TopArtist/>
            <TopCollection/>
            <KultIgo/>
            <JoinKult/>
            <TeamMember/>
        </div>
    )
}

export default Home
