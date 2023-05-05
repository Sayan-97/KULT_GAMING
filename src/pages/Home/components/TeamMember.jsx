import React from 'react'
import TeamemberImg1 from '../../../assets/img/Team-member1.jpg'
import TeamemberImg2 from '../../../assets/img/Team-member1.jpg'
import TeamemberImg3 from '../../../assets/img/Team-member3.jpg'
import TeamemberImg4 from '../../../assets/img/Team-member4.jpg'
import TeamemberImg5 from '../../../assets/img/Team-member5.jpg'
import TeamemberImg6 from '../../../assets/img/Team-member6.jpg'


const TeamMember = () => {

    const teamMember = [
        {
            memberImg: TeamemberImg1,
            name: 'Karn Chakervarty',
            tag: 'CEO'

        },
        {
            memberImg: TeamemberImg2,
            name: 'Daniel Sohail',
            tag: 'CFO'

        },
        {
            memberImg: TeamemberImg3,
            name: 'Topobar Layek',
            tag: 'UI/UX'

        },
        {
            memberImg: TeamemberImg4,
            name: 'Swatanshu Dey',
            tag: 'Graphics'

        },
        {
            memberImg: TeamemberImg5,
            name: 'Sayan Dey',
            tag: 'Frontend'

        },
        {
            memberImg: TeamemberImg6,
            name: 'Amit Gorai',
            tag: 'UI/UX'

        },
    ]
    return (

        <section>
            <div className='container space-y-5'>
                <h2 className='text-center'>Our Team Member</h2>
                <p className='text-center'>Team at KULT believes in giving their utmost best to bring to the people the best product <br />possible. Our hardworking team is always there to support and guide projects in the right<br /> direction.</p>

                <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 pt-8 gap-6'>


                    {
                        teamMember.map((item, index) => { 
                            return (
                                <div key={index} className='w-full h-[155px] bg-[#120F2F] rounded-xl relative flex flex-col items-center my-7'>
                                    <div className='flex justify-center items-center top-[-35%] absolute'>
                                        <div className='bg-gradient-to-r from-primary to-secondary p-[3px] rounded-full'>
                                            <img src={item.memberImg} alt="" srcset="" className='rounded-full w-[100px] h-[100px] object-cover' />
                                        </div>
                                    </div>

                                    <div className='font-Clash text-center  absolute bottom-6'>
                                        <p className='text-xl font-semibold'>{item.name}</p>
                                        <p className='font-semibold'>{item.tag}</p>
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

export default TeamMember;



