import React from 'react'
import Purchase from '../../../assets/img/purchase.png'
import Launch from '../../../assets/img/launch.png'
import Kyc from '../../../assets/img/kyc.png'
import Share from '../../../assets/img/share.png'
import Gradient1 from '../../../assets/gradient/Ellipse_21.png'
import Gradient2 from '../../../assets/gradient/Ellipse_22.png'
import Gradient3 from '../../../assets/gradient/Ellipse_23.png'
import Gradient4 from '../../../assets/gradient/Ellipse_24.png'

const JoinKult = () => {

    const pcardData = [
        {
            imgSrc:Purchase,
            gradImg:Gradient1,
            name:'Purchase',
            desc:'Purchase KULT Coin today and become the part of the biggest growing gaming platform.'


        },
        {
            imgSrc:Launch,
            gradImg:Gradient2,
            name:'Launch',
            desc:'Purchase KULT Coin today and become the part of the biggest growing gaming platform.'


        },
        {
            imgSrc:Kyc,
            gradImg:Gradient3,
            name:'Complete KYC',
            desc:'Purchase KULT Coin today and become the part of the biggest growing gaming platform.'


        },
        {
            imgSrc:Share,
            gradImg:Gradient4,
            name:'Share',
            desc:'Purchase KULT Coin today and become the part of the biggest growing gaming platform.'


        },
        
    ]
    return (
        <section>
            <div className='container space-y-5'>
                <h2 className='text-center'>How to Join Kult</h2>
                <p className='text-center'>Kult encourages users to read our comprehensive guide to enable themselves<br />to launch their project with complete guidance and ease.</p>

                <div className='w-full grid md:grid-cols-2 lg:grid-cols-4 pt-8 gap-6'>
                   {
                    pcardData.map((item,index)=>{
                        return(
                            <div key={index} className='p-5 grid grid-cols-1 relative h-[345px] bg-[#120F2F] rounded-xl'>
                            <div className='flex items-center justify-center'>
                                <img src={item.imgSrc} alt="" srcset="" className='w-24' />
                                <img src={item.gradImg} alt="" srcset="" className='absolute flex justify-center ' />
                            </div>
                            <div className='text-center space-y-5'>
                                <p className='text-2xl font-Clash font-semibold'>{item.name}</p>
                                <p>{item.desc}</p>
    
                            </div>
                        </div>
                        )
                    })
                   }
                  
                   
                </div>
            </div>
        </section>
    )
}
export default JoinKult;










