import React from 'react'
import Right from './contact/Right'
import Form from './contact/Form'

function Contact() {
    const baseUrl = process.env.baseUrl
    return (
        <div className='bg-white pb-16 pt-32'>
            <div className="container mx-auto px-2 md:px-5">
                <div className='grid lg:grid-cols-2 gap-5'>
                    <Right />
                    <div className='bg-[#FAF7EF] px-2 py-5 md:p-10'>
                        <h3 className='text-color2 text-center md:text-3xl font-bold'>اسال سؤالا</h3>
                        <Form baseUrl={baseUrl} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
