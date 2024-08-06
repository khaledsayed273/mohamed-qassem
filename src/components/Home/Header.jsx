import Image from 'next/image'
import React from 'react'
import img from "../../../public/images/imageHomaPage.png"
import Link from 'next/link'

function Header() {
    return (
            <div className="container mx-auto py-1 px-2 md:px-5">
                <div className="grid lg:grid-cols-2 lg:justify-items-end items-center mt-24 md:mt-40 gap-16 md:gap-10">
                    <div>
                        <h1 className='text-color2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold lg:leading-[60px] xl:leading-[70px]'>اللمسة المثالية لكل حلوى: عبوات يتم توصيلها إليك</h1>
                        <h2 className='text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl mt-5 mb-8'>عزز جاذبية منتجاتك مع عبواتنا الفاخرة المصممة خصيصًا لإبراز إبداعاتك,تواصل معنا للحصول على مزيد من المعلومات حول منتجاتنا وخدماتنا</h2>
                        <Link className='bg-color2 text-white py-3 px-8 rounded-lg hover:opacity-70' href={"/"}>تواصل معنا</Link>
                    </div>
                    <Image className='mx-auto lg:mx-0 ' priority src={img} alt='image'/> 
                </div>
            </div>
    )
}

export default Header
