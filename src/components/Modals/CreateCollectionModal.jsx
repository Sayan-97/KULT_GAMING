import React from 'react'
import ReactDOM from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '../../assets/svg/kult-icon.svg'

const CreateCollectionModal = ({ show, setCreateModal }) => {

    return show ? ReactDOM.createPortal(
        <>
            <div className='bg-background w-[100%] min-h-screen absolute top-0 right-0 z-50'>

                <div className='bg-[#120F2F] py-6 w-full'>
                    <div className='flex items-center pl-[10%] gap-6'>
                        <AiOutlineClose onClick={setCreateModal} className='text-xl cursor-pointer'/>
                        <img src={Logo} alt="img" />
                        <p className='text-lg font-medium'>Create Collection</p>
                    </div>
                </div>

            </div>
        </>, document.body
    ): null
}

export default CreateCollectionModal