import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/svg/kult-logo.svg'
import kultIcon from '../assets/svg/kult-icon.svg'
import ConnectModal from './Modals/ConnectModal'

import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../store/auth/authSlice';

import { Popover, Transition } from '@headlessui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { RiUserLine } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { HiOutlineCollection } from 'react-icons/hi'
import { BiEdit } from 'react-icons/bi'
import { AiTwotoneSetting } from 'react-icons/ai'
import { IoExitOutline } from 'react-icons/io5'

const Header = () => {

    const [active, setActive] = useState('Home')

    const [show, setShow] = useState(false)
    const setConnectModal = () => (
        setShow(!show)
    )

    const links = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Gamepedia',
            link: '/gamepedia'
        },
        {
            title: 'Launchpad',
            link: '/launchpad'
        },
        {
            title: 'NFT Marketplace',
            link: '/nftmarketplace'
        },
    ]

    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth.authState);

    const handleLogin = () => {
        dispatch(toggleState(true)); // Dispatches the action with the 'true' payload
    };

    const handleLogout = () => {
        dispatch(toggleState(false)); // Dispatches the action with the 'false' payload
    };

    const dropdown = [
        { icon: RiUserLine, name: 'Profile', link: '/' },
        { icon: AiOutlineHeart, name: 'Favourites', link: '/' },
        { icon: AiOutlineEye, name: 'Watchlist', link: '/' },
        { icon: HiOutlineCollection, name: 'My Collection', link: '/' },
        { icon: BiEdit, name: 'Create', link: '/' },
        { icon: AiTwotoneSetting, name: 'Settings', link: '/' },
        { icon: IoExitOutline, name: 'Disconnect', link: '/' },
    ]

    return (
        <header className='sticky py-10 z-50'>
            <nav className='container flex items-centern justify-between'>
                <img src={Logo} alt="img" />
                <ul className='flex items-center justify-between w-[45%]'>
                    {links.map((item, index) => {
                        return (
                            <Link onClick={() => setActive(item.title)} key={index} to={item.link} className={`hover:text-white ${item.title === active ? 'text-white transform scale-105' : ''}`}>{item.title}</Link>
                        )
                    })}
                </ul>
                {authState ? (
                    <>

                        <Popover className='relative bg-bgBtn p-[1px] rounded-custom'>
                            {({ open, close }) => (
                                <>
                                    <Popover.Button
                                        className={`${open ? '' : ''} flex items-center gap-4 bg-background h-full px-4 py-2 rounded-custom`}
                                    >
                                        <img src={kultIcon} alt="img" />
                                        <span>0x2a..y12</span>
                                        <MdKeyboardArrowDown
                                            className={`transform ${open ? '' : 'rotate-180'} text-xl`}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-40 mt-5 w-screen min-w-[350px] max-w-max -translate-x-1/2 transform shadow-2xl">
                                            <div className='bg-[#120F2F] rounded-custom divide-y divide-[#3b3b3b] grid'>
                                                {dropdown.map((item, index) => {
                                                    const Icon = item.icon
                                                    return (
                                                        <div>
                                                            <Link onClick={item.name === 'Disconnect' ? handleLogout : ''} key={index} to={item.link} className='flex items-center gap-2 p-4 hover:scale-105 transition-all ease-in-out'><Icon className='text-xl' /> {item.name}</Link>
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                    </>
                ) : (
                    <>
                        <button onClick={setConnectModal} className='bg-bgBtn px-8 py-2 rounded-custom'>Connect</button>

                        <ConnectModal
                            show={show}
                            setConnectModal={setConnectModal}
                            handleLogin={handleLogin}
                        />
                    </>
                )}

            </nav>
        </header>
    )
}

export default Header
