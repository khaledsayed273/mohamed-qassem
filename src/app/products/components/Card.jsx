import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import whatsAppIcon from "../../../../public/images/whatsAppShare.svg"

function Card({ item }) {
    

    return (
        <div className='bg-white relative rounded-t-2xl overflow-hidden'>
            <Link href={`/products/${item.slug}`} className='relative block h-[250px]'>
                <Image blurDataURL={item.image.placeholder} placeholder='blur' src={item.image.path} sizes="(min-width: 808px) 50vw, 100vw" fill alt={item.name} />
            </Link>
            <Link href={"/"}>
                <Image className='top-5 right-5 absolute hover:opacity-70' width={37} height={37} src={whatsAppIcon} alt='whatsApp' />
            </Link>
            <div className='flex flex-col items-start p-3 pb-5'>
                <h3 className='md:text-lg my-2'>{item.name}</h3>
                <p className='text-color2 md:text-lg '>{item.price} جنيها</p>
            </div>
        </div>
    )
}

export default Card
