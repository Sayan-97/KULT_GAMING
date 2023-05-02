import React from 'react'
import { FreeToPlay, PartneredGames, RecentlyAdded, Trending } from './components'

const Gamepedia = () => {
    return (
        <div className='py-8'>
            <Trending />
            <RecentlyAdded />
            <FreeToPlay />
            <PartneredGames />
        </div>
    )
}

export default Gamepedia
