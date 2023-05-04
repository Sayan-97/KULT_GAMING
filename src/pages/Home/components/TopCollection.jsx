import React from 'react'
import ArtistImg from '../../../assets/img/TopArtist1.jpg';

const TopCollection = () => {

   const collectionData =[
       {
     userimgSrc:ArtistImg,
     name:"Jerome Bell",
     tag:'#394'

    },
       {
     userimgSrc:ArtistImg,
     name:"Jerome Bell",
     tag:'#394'

    },
       {
     userimgSrc:ArtistImg,
     name:"Jerome Bell",
     tag:'#394'

    },
       {
     userimgSrc:ArtistImg,
     name:"Jerome Bell",
     tag:'#394'

    },
       {
     userimgSrc:ArtistImg,
     name:"Jerome Bell",
     tag:'#394'

    },
       {
     userimgSrc:ArtistImg,
     name:"Jerome Bell",
     tag:'#394'

    },
       {
     userimgSrc:ArtistImg,
     name:"Jerome Bell",
     tag:'#394'

    },
       {
     userimgSrc:ArtistImg,
     name:"Jerome Bell",
     tag:'#394'

    },
       {
     userimgSrc:ArtistImg,
     name:"Jerome Bell",
     tag:'#394'

    },
       {
     userimgSrc:ArtistImg,
     name:"Jerome Bell",
     tag:'#394'

    },
       {
     userimgSrc:ArtistImg,
     name:"Jerome Bell",
     tag:'#394'

    },
       {
     userimgSrc:ArtistImg,
     name:"Jerome Bell",
     tag:'#394'

    },
   ]

    return (
        <section>
            <div className='container space-y-5'>
                <h2 className='text-center'>Top Collections of <br />Last 7 Days</h2>

                <div className='w-full grid grid-cols-4 justify-center items-center pt-8 gap-10'>


                    {collectionData.map((item, index)=>{
                        return(
                            <div className='flex gap-5 items-center'>
                        <div className='bg-gradient-to-r from-primary to-secondary p-[3px] rounded-full inline-flex'>
                            <img src={ArtistImg} alt="userImg" srcset="" className='relative w-[80px] h-[80px] rounded-full object-cover' />
                        </div>

                        <div className='space-y-2'>
                            <p className='text-lg'>Robert Fox</p>
                            <p className='text-[#5416E9]'>#394</p>
                        </div>
                    </div>
                        )
                    })}

                </div>

            </div>
        </section >

    )
}

export default TopCollection;









