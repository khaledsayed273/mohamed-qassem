import React from 'react'
import SectionSlider from '../slider/SectionSlider'
import Image from 'next/image'
import img from "../../../public/images/about/4.jpeg"
import Link from 'next/link'

function Sections() {

    const data = [
        {
            image: img,
            title: "علب التورت"
        },
        {
            image: img,
            title: "شنط كرافت"
        },
        {
            image: img,
            title: "علب الشيكولاته"
        },
        {
            image: img,
            title: "اطباق بلاستيك"
        },
    ]

    return (
        <section className='my-20 sm:my-32 md:my-44 lg:my-32 2xl:my-48 h-[450px] md:h-[500px]'>
            <div className="container mx-auto px-2 md:px-5">
                <div className='relative flex justify-center items-center'>
                    <h3 className='text-color2 text-2xl md:text-4xl	text-center '>الاقسام:</h3>
                    <svg className='absolute -bottom-10 ' width="142" height="20" viewBox="0 0 142 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 18L10.374 8.31063C16.8042 0.870424 28.41 1.09448 34.5483 8.77733L36.2487 10.9057C42.1551 18.2984 53.5846 17.6731 58.6493 9.68028V9.68028C63.5962 1.87322 74.6757 1.05557 80.7151 8.05185L83.3446 11.0979C89.8675 18.6544 101.762 18.0425 107.475 9.85665V9.85665C113.126 1.76083 124.85 1.05539 131.431 8.41531L140 18" stroke="#6D897A" strokeWidth="4" />
                    </svg>
                </div>
                <SectionSlider>
                    {data.map((item, index) => (
                        <Link key={index} href={"/"} className='bg-white rounded-t-2xl overflow-hidden'>
                            <div className='relative h-[292px]'>
                                <Image sizes="(min-width: 808px) 50vw, 100vw" placeholder='blur' src={item.image} fill alt={item.title} />
                            </div>
                            <h3 className='text-center font-semibold md:text-2xl py-4'>{item.title}</h3>
                        </Link>
                    ))}
                </SectionSlider>
            </div>
        </section>
    )
}

export default Sections
