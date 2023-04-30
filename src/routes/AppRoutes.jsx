import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Gamepedia, Home, Launchpad, Marketplace } from '../pages'

const AppRoutes = () => {
    return (
        <Routes>
            {/* Landing Page / Home Page */}
            <Route path='/' element={<Home />}/>

            {/* Gamepedia Page */}
            <Route path='/gamepedia' element={<Gamepedia />} />

            {/* Launchpad Page */}
            <Route path='/launchpad' element={<Launchpad />}/>

            {/* Marketplace Page */}
            <Route path='/nftmarketplace' element={<Marketplace />}/>
        </Routes>
    )
}

export default AppRoutes