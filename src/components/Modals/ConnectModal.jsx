import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import { AiOutlineClose } from 'react-icons/ai'

import Metamask from '../../assets/img/metamask.png'
import Coinbase from '../../assets/img/coinbase.png'
import Walletconnect from '../../assets/img/walletconnect.png'

const ConnectModal = ({ show, setConnectModal, handleLogin }) => {

    const modalRef = useRef();

    useEffect(() => {
        // Add event listener to modal overlay
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setConnectModal();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [setConnectModal]);

    
    const connects = [
        { logo: Metamask, name: 'Metamask', link: '/' },
        { logo: Coinbase, name: 'Coinbase Wallet', link: '/' },
        { logo: Walletconnect, name: 'WalletConnect', link: '/' }
    ]

    return show ? ReactDOM.createPortal(
        <>
            <div className='transparent-bg w-[100%] h-[100vh] fixed top-0 right-0 flex justify-center items-center z-50'>

                <div ref={modalRef} className='bg-accent w-[50%] p-6 rounded-custom space-y-4'>
                    <div className='w-full flex justify-end'>
                        <AiOutlineClose className={`cursor-pointer`} onClick={setConnectModal} />
                    </div>

                    <div className='space-y-2'>
                        <p className='text-2xl font-medium'>Connect Your Wallet</p>
                        <p className='font-medium'>If you don't have a <span className='bg-bgBtn text-transparent bg-clip-text'>wallet</span> yet, you can select a provider and create one now.</p>
                    </div>

                    <div className='border border-gray-700 rounded-custom divide-y divide-gray-700'>
                        {connects.map((item, index) => {
                            return(
                                <div key={index} className='p-4 flex items-center justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <img src={item.logo} alt="img" />
                                        <p className='text-lg'>{item.name}</p>
                                    </div>
                                    <button onClick={() => { handleLogin(); setConnectModal() }} className='bg-bgBtn px-5 py-2 rounded-custom'>Connect</button>
                                </div>
                            )
                        })}
                        <div className='p-4 flex justify-center'>
                            <Link>Show More</Link>
                        </div>
                    </div>

                </div>

            </div>
        </>, document.body
    ) : null
}

export default ConnectModal