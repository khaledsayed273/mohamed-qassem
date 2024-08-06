import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import whatsAppIcon from "../../../public/images/whatsAppShare.svg"
import AsideSlider from '../slider/AsideSlider'

const getLatesProducts = async (baseUrl) => {
    try {
        const req = await fetch(`${baseUrl}/products/home/latest`, { next: { revalidate: 3600 } })
        const res = await req.json()
        return res

    } catch (e) {
        return e
    }
}

async function LatestProducts() {
    const baseUrl = process.env.baseUrl
    const latestProductsRes = await getLatesProducts(baseUrl)
    const res = await latestProductsRes?.data

    return (
        <aside className='my-44 sm:my-32 md:my-44 lg:my-44 2xl:my-48 h-[400px] sm:h-[450px] md:h-[400px]'>
            {latestProductsRes.status ? (
                <div className="container mx-auto px-2 md:px-5">
                    <div className='relative flex justify-center items-center'>
                        <h3 className='text-color2 text-2xl md:text-4xl	text-center '>أفضل المنتجات مبيعًا</h3>
                        <svg className='absolute -bottom-10 ' width="142" height="20" viewBox="0 0 142 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 18L10.374 8.31063C16.8042 0.870424 28.41 1.09448 34.5483 8.77733L36.2487 10.9057C42.1551 18.2984 53.5846 17.6731 58.6493 9.68028V9.68028C63.5962 1.87322 74.6757 1.05557 80.7151 8.05185L83.3446 11.0979C89.8675 18.6544 101.762 18.0425 107.475 9.85665V9.85665C113.126 1.76083 124.85 1.05539 131.431 8.41531L140 18" stroke="#6D897A" strokeWidth="4" />
                        </svg>
                    </div>
                    <AsideSlider>
                        {res.map((item, index) => (
                            <div key={index} className='bg-white relative rounded-t-2xl overflow-hidden'>
                                <Link href={`/products/${item.slug}`} className='relative block h-[250px]'>
                                    <Image sizes="(min-width: 808px) 50vw, 100vw" blurDataURL={item.image.placeholder} placeholder='blur' src={item.image.path} fill alt={item.name} />
                                </Link>
                                <Link href={"/"}>
                                    <Image className='top-5 right-5 absolute hover:opacity-70' width={37} height={37} src={whatsAppIcon} alt='' />
                                </Link>
                                <div className='flex flex-col items-end p-3 pb-5'>
                                    {/* <span className='text-sm text-gray-400'>{item.name}</span> */}
                                    <h3 className='md:text-lg my-2'>{item.name}</h3>
                                    <p dir="rtl" className='text-color2 md:text-lg '>{item.price} جنيها</p>
                                </div>
                            </div>
                        ))}
                    </AsideSlider>
                </div>
            ) : (
                <div className='flex justify-center items-center my-7 h-full'>
                    <div className='animate-spin flex justify-center items-center h-full'>
                        <div className='w-12 h-12 bg-transparent border-8 border-t-color1 border-r-color2 border-l-transparent border-b-color1  rounded-full'>
                        </div>
                    </div>
                </div>
            )}

        </aside>
    )
}

export default LatestProducts
