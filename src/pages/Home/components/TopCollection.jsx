import React from 'react'
import ArtistImg1 from '../../../assets/img/TopArtist1.jpg';
import ArtistImg2 from '../../../assets/img/TopArtist2.jpg';
import ArtistImg3 from '../../../assets/img/TopArtist3.jpg';
import ArtistImg4 from '../../../assets/img/TopArtist4.jpg';
import ArtistImg5 from '../../../assets/img/TopArtist5.jpg';
import ArtistImg6 from '../../../assets/img/TopArtist6.jpg';
import ArtistImg7 from '../../../assets/img/TopArtist7.jpg';
import ArtistImg8 from '../../../assets/img/TopArtist8.jpg';
import ArtistImg9 from '../../../assets/img/TopArtist9.jpg';
import ArtistImg10 from '../../../assets/img/TopArtist1.jpg';
import ArtistImg11 from '../../../assets/img/TopArtist9.jpg';
import ArtistImg12 from '../../../assets/img/TopArtist12.jpg';

const TopCollection = () => {

    const collectionData = [
        {
            userimgSrc: ArtistImg1,
            name: "Robert Fox",
            tag: '#394'

        },
        {
            userimgSrc: ArtistImg2,
            name: "Jerome Bell",
            tag: '#394'

        },
        {
            userimgSrc: ArtistImg3,
            name: "Devon Lane",
            tag: '#394'

        },
        {
            userimgSrc: ArtistImg4,
            name: "Neo Love",
            tag: '#394'

        },
        {
            userimgSrc: ArtistImg5,
            name: "Jane Cooper",
            tag: '#394'

        },
        {
            userimgSrc: ArtistImg6,
            name: "Cody Fisher",
            tag: '#394'

        },
        {
            userimgSrc: ArtistImg7,
            name: "Jane Cooper",
            tag: '#394'

        },
        {
            userimgSrc: ArtistImg8,
            name: "Mia SK",
            tag: '#394'

        },
        {
            userimgSrc: ArtistImg9,
            name: "Jenny Wilson",
            tag: '#394'

        },
        {
            userimgSrc: ArtistImg10,
            name: "Ralph Edwards",
            tag: '#394'

        },
        {
            userimgSrc: ArtistImg11,
            name: "John Deo",
            tag: '#394'

        },
        {
            userimgSrc: ArtistImg12,
            name: "Guy Hawkins",
            tag: '#394'

        },
    ]

    return (
        <section>
            <div className='container space-y-5'>
                <h2 className='text-center'>Top Collections of <br />Last 7 Days</h2>

                <div className='w-full grid grid-cols-4 justify-center items-center pt-8 gap-10'>


                    {collectionData.map((item, index) => {
                        return (
                            <div key={index} className='flex gap-5 items-center'>
                                <div className='bg-gradient-to-r from-primary to-secondary p-[3px] rounded-full inline-flex'>
                                    <img src={item.userimgSrc} alt="userImg" srcset="" className='relative w-[80px] h-[80px] rounded-full object-cover' />
                                </div>

                                <div className='space-y-2'>
                                    <p className='text-lg'>{item.name}</p>
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









