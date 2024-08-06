"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SliderImages({ images }) {



    const settings = {
        customPaging: function (i) {
            const item = images[i];
            return (
                <div key={i} className='w-[120px] h-[120px] relative border border-[#B6B597] rounded-md'>
                    <Image
                        blurDataURL={item.placeholder}
                        placeholder='blur'
                        sizes="(min-width: 808px) 50vw, 100vw"
                        src={item.path}
                        alt={`Thumbnail ${i}`}
                        layout="fill"
                    />
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="slider-container detailsSlider bg-[#FAF7EF] h-[600px] lg:h-[700px] p-2 lg:p-5 rounded-lg relative w-[330px] min-[351px]:w-[340px] min-[395px]:w-[390px] min-[496px]:w-[450px]  min-[700px]:w-[600px] lg:w-full mx-auto">
            <Slider {...settings}>
                {images.map((item, index) => (
                    <div onClick={() => setActiveImage(item)} key={index} className='relative h-[380px] lg:h-[500px] overflow-hidden rounded-xl'>
                        <Image blurDataURL={item.placeholder} placeholder='blur' sizes="(min-width: 808px) 50vw, 100vw" src={item.path} fill alt='1' />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderImages
