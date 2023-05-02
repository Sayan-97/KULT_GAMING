import React, {useState} from 'react'
import CreateCollectionModal from '../../components/Modals/CreateCollectionModal'

const Marketplace = () => {

    const [show, setShow] = useState(false)
    const setCreateModal = () => (
        setShow(!show)
    )

    return (
        <section>
            <div className='container relative'>
                <button onClick={setCreateModal} className='bg-bgBtn px-5 py-2 rounded-custom'>Create Collection</button>

                <CreateCollectionModal
                    show={show}
                    setCreateModal={setCreateModal}
                />
            </div>
        </section>
    )
}

export default Marketplace