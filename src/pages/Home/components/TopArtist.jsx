import React from 'react'
import CardImg1 from '../../../assets/img/ArtistCardImg1.jpg'
import CardImg2 from '../../../assets/img/ArtistCardImg2.jpg'
import CardImg3 from '../../../assets/img/ArtistCardImg3.jpg'
import CardImg4 from '../../../assets/img/ArtistCardImg4.jpg'
import CardImg5 from '../../../assets/img/ArtistCardImg5.jpg'
// import CardImg6 from '../../../assets/img/ArtistCardImg6.jpg'
import ArtistImg1 from '../../../assets/img/ArtistImg1.jpg'


const TopArtist = () => {

    const artistData = [
        {
            cardimgSrc: CardImg1,
            artistimgSrc: ArtistImg1,
            name: 'The legends of Elysium',
            tag: '#47'


        },
        {
            cardimgSrc:CardImg2,
            artistimgSrc: ArtistImg1,
            name: 'Mika Sins',
            tag: '#35'


        },
        {
            cardimgSrc:CardImg3,
            artistimgSrc: ArtistImg1,
            name: 'Michal Doe',
            tag: '#45'


        },
        {
            cardimgSrc:CardImg4,
            artistimgSrc: ArtistImg1,
            name: 'Carl John',
            tag: '#89'


        },
        // {
        //     cardimgSrc:CardImg5,
        //     artistimgSrc: ArtistImg1,
        //     name: 'The legends of Elysium',
        //     tag: '#47'


        // },
        // {
        //     cardimgSrc:CardImg6,
        //     artistimgSrc:ArtistImg1,
        //     name: 'The legends of Elysium',
        //     tag: '#47'


        // },



    ]

    return (
        <section>
            <div className='container space-y-5'>
                <h2 className='text-center'>Top Live Artist</h2>
                <p className='text-center'>Check out the Top Live Artists of the week. With the right amount of care and <br />garnish, you can be featured on our front page as well!</p>

                <div className='w-full grid lg:grid-cols-4 pt-8 gap-6  '>

                    {artistData.map((item,index) => {
                        return (


                            <div key={index} className='relative w-full h-full flex justify-center'>
                                <img src={item.cardimgSrc} alt="artistBannerImg" srcset="" className='rounded-xl h-[340px] w-full object-cover' />

                                <div className='absolute w-full flex justify-center items-center  gap-3 bottom-0 py-5 rounded-b-xl' style={{ background: 'rgba(184, 184, 184, 0.36)', backdropFilter: 'blur(6.5px)' }}>
                                    <img src={item.artistimgSrc} alt="" srcset="" className='bottom-[53%] absolute z-1 border-2 border-white rounded-[50%] object-cover w-[75px] h-[75px]' />
                                    <div className='flex gap-2 mt-8'>
                                        <p>{item.name}</p>
                                        <p>{item.tag}</p>

                                    </div>
                                </div>


                            </div>
                        )
                    })}

                </div>

            </div>
        </section>
    )
}

export default TopArtist;