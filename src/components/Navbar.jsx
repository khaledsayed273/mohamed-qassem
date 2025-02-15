"use client"
// import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

function Navbar() {
    const pathName = usePathname()

    const [showNav, setShowNav] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <nav className={`${pathName === "/" ? "bg-[#FAF7EF]" : "bg-color2"} absolute w-full z-50`}>
            <div className="container mx-auto p-3 md:p-5 ">
                <div className='flex justify-between items-center '>
                    <Link href={"/"}>
                        <svg width="120" height="33" viewBox="0 0 166 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7828 17.5906L21.9226 17.661L20.0011 25.2249L19.774 26.0165L18.5687 25.2249H0V25.049C0.768599 24.7559 1.4091 24.1988 1.9215 23.3779C2.44554 22.5453 2.70757 21.5778 2.70757 20.4755V2.0581C2.70757 1.02612 1.80504 0.404584 0 0.193497V0H11.4067V0.193497C10.3819 0.287313 9.61332 0.474947 9.10092 0.756397C8.58852 1.02612 8.33232 1.46002 8.33232 2.0581V24.6445H9.83458C11.069 24.6445 12.1753 24.5389 13.1535 24.3278C14.1317 24.105 14.9411 23.8646 15.5816 23.6066C16.2338 23.3369 16.9267 22.8737 17.6603 22.217C18.4056 21.5602 18.9763 21.0032 19.3722 20.5458C19.7681 20.0885 20.3679 19.3555 21.1714 18.347C21.4393 18.0069 21.6431 17.7548 21.7828 17.5906Z" fill="#6D897A" />
                            <path d="M33.3642 7.52878C36.3221 7.52878 38.6687 8.34382 40.4039 9.97388C42.1507 11.5922 43.0241 13.7676 43.0241 16.5C43.0241 19.162 42.1449 21.3257 40.3864 22.9909C38.6396 24.6445 36.2989 25.4712 33.3642 25.4712C30.4063 25.4712 28.0539 24.662 26.3071 23.0437C24.5719 21.4254 23.7043 19.2441 23.7043 16.5C23.7043 13.838 24.5777 11.6802 26.3245 10.0267C28.083 8.36141 30.4295 7.52878 33.3642 7.52878ZM34.7617 24.8731C36.9743 24.8731 38.0806 23.0906 38.0806 19.5256C38.0806 17.8252 37.8768 16.1423 37.4692 14.4771C37.0733 12.8001 36.392 11.3284 35.4254 10.0618C34.4589 8.78358 33.306 8.14446 31.9667 8.14446C29.7541 8.14446 28.6478 9.94456 28.6478 13.5448C28.6478 15.2217 28.8458 16.8987 29.2417 18.5757C29.6493 20.2409 30.3422 21.7068 31.3204 22.9733C32.2986 24.2399 33.4457 24.8731 34.7617 24.8731Z" fill="#6D897A" />
                            <path d="M57.1908 7.52878C59.7644 7.52878 62.3264 7.97441 64.8768 8.86567V26.5267C64.8768 27.242 64.1955 28.0981 62.833 29.0949C61.4821 30.0917 59.8634 30.9478 57.9768 31.6631C56.0903 32.3902 54.4599 32.7537 53.0858 32.7537C51.9212 32.7537 50.7974 32.4899 49.7144 31.9622C48.643 31.4344 47.7987 30.6077 47.1815 29.4819L51.863 28.0746C52.3172 29.0597 52.8354 29.8278 53.4177 30.379C53.9999 30.9302 54.5065 31.2585 54.9374 31.3641C55.3683 31.4696 55.8574 31.5224 56.4047 31.5224C57.2898 31.5224 58.0467 31.1354 58.6756 30.3614C59.3044 29.5991 59.6189 28.4968 59.6189 27.0544V23.9584C58.3029 24.967 56.5969 25.4712 54.5007 25.4712C51.8572 25.4712 49.761 24.7265 48.2121 23.2372C46.6633 21.7479 45.8889 19.766 45.8889 17.2916C45.8889 14.4771 46.8613 12.1493 48.8061 10.3081C50.7509 8.45522 53.5458 7.52878 57.1908 7.52878ZM56.8764 24.3278C58.0176 24.3278 58.9318 23.9291 59.6189 23.1317V10.1322C58.4776 8.85394 57.1675 8.21482 55.6885 8.21482C54.1397 8.21482 52.9751 8.83635 52.1949 10.0794C51.4263 11.3108 51.042 12.9995 51.042 15.1455C51.042 17.7607 51.5951 19.9478 52.7015 21.7068C53.8194 23.4542 55.2111 24.3278 56.8764 24.3278Z" fill="#6D897A" />
                            <path d="M77.943 7.52878C80.9009 7.52878 83.2475 8.34382 84.9826 9.97388C86.7295 11.5922 87.6029 13.7676 87.6029 16.5C87.6029 19.162 86.7236 21.3257 84.9652 22.9909C83.2184 24.6445 80.8776 25.4712 77.943 25.4712C74.985 25.4712 72.6326 24.662 70.8858 23.0437C69.1507 21.4254 68.2831 19.2441 68.2831 16.5C68.2831 13.838 69.1565 11.6802 70.9033 10.0267C72.6618 8.36141 75.0083 7.52878 77.943 7.52878ZM79.3404 24.8731C81.553 24.8731 82.6594 23.0906 82.6594 19.5256C82.6594 17.8252 82.4556 16.1423 82.048 14.4771C81.652 12.8001 80.9708 11.3284 80.0042 10.0618C79.0376 8.78358 77.8847 8.14446 76.5455 8.14446C74.3329 8.14446 73.2266 9.94456 73.2266 13.5448C73.2266 15.2217 73.4245 16.8987 73.8205 18.5757C74.2281 20.2409 74.921 21.7068 75.8992 22.9733C76.8774 24.2399 78.0245 24.8731 79.3404 24.8731Z" fill="#6D897A" />
                            <path d="M96.1448 25.8054L91.5157 24.9083L91.6205 22.7447V6.17431C91.6205 5.48241 91.341 5.11301 90.7821 5.0661C90.2231 5.00746 89.338 5.18337 88.1269 5.59382V5.38273L97.1754 1.1258L96.8959 2.88486V7.75746H101.315L101.141 8.6194H96.8959V24.5741L102.189 24.4334V24.5741L96.8959 25.8054H96.1448Z" fill="#6D897A" />
                            <path d="M117.893 7.75746H123.395V7.89819C122.755 8.13273 122.196 8.53145 121.718 9.09435C121.241 9.64552 120.693 10.6541 120.076 12.1199L113.77 27.1775C113.456 27.8929 113.223 28.4147 113.071 28.7431C112.92 29.0832 112.664 29.5346 112.303 30.0975C111.953 30.6722 111.598 31.0944 111.237 31.3641C110.876 31.6455 110.41 31.8918 109.84 32.1029C109.269 32.3257 108.629 32.4371 107.918 32.4371L106.556 30.8364C109.63 30.8364 111.75 29.6871 112.914 27.3886L105.193 10.2026L103.866 7.75746H112.879V7.89819C110.539 8.19136 109.921 9.58102 111.028 12.0672L115.238 21.9179L119.395 12.0672C119.709 11.3284 119.884 10.701 119.919 10.185C119.954 9.66898 119.843 9.26439 119.587 8.97122C119.343 8.66631 119.098 8.44936 118.853 8.32036C118.621 8.17964 118.3 8.03891 117.893 7.89819V7.75746Z" fill="#6D897A" />
                            <path d="M135.169 7.52878C138.441 7.52878 140.956 8.32623 142.715 9.92111C144.485 11.5043 145.37 13.58 145.37 16.1482C145.37 19.033 144.345 21.3081 142.296 22.9733C140.246 24.6386 137.667 25.4712 134.557 25.4712C133.672 25.4712 132.735 25.3539 131.745 25.1194V29.5522C131.745 30.5373 131.867 31.2527 132.112 31.6983C132.368 32.1439 132.886 32.5426 133.666 32.8945V33L124.862 31.8214V31.7159C125.48 31.5517 125.905 31.282 126.138 30.9067C126.371 30.5314 126.487 29.8865 126.487 28.9717V9.76279C125.94 9.39925 125.148 9.18817 124.111 9.12953V8.97122C125.8 8.49041 127.71 8.13273 129.841 7.89819C131.984 7.65192 133.76 7.52878 135.169 7.52878ZM135.99 24.8204C138.703 24.8204 140.066 22.5922 140.077 18.1359C140.077 16.9398 139.967 15.7905 139.745 14.6882C139.536 13.5741 139.204 12.5069 138.75 11.4867C138.295 10.4664 137.643 9.65725 136.793 9.05917C135.955 8.44936 134.959 8.14446 133.806 8.14446C133.445 8.14446 133.125 8.16791 132.845 8.21482C132.566 8.26173 132.321 8.32623 132.112 8.40832C131.914 8.47868 131.792 8.51386 131.745 8.51386V22.9558C133.212 24.1988 134.627 24.8204 135.99 24.8204Z" fill="#6D897A" />
                            <path d="M165.825 21.7244L166 21.8827C165.453 22.9382 164.474 23.8001 163.065 24.4685C161.656 25.137 160.02 25.4712 158.157 25.4712C155.152 25.4712 152.742 24.6445 150.925 22.9909C149.12 21.3374 148.217 19.2383 148.217 16.6935C148.217 13.9025 149.254 11.6802 151.327 10.0267C153.4 8.36141 155.868 7.52878 158.733 7.52878C161.528 7.52878 163.52 8.37313 164.707 10.0618C165.546 11.258 165.726 12.4307 165.249 13.58C164.771 14.6588 163.863 15.2042 162.524 15.2159H153.545C153.568 17.7841 154.261 19.8246 155.624 21.3374C156.986 22.8502 158.739 23.6066 160.882 23.6066C163.223 23.5949 164.87 22.9675 165.825 21.7244ZM157.633 8.07409C156.538 8.07409 155.595 8.67217 154.803 9.86834C154.011 11.0528 153.592 12.6301 153.545 14.6002L159.799 14.5299C160.614 14.5299 161.091 13.9904 161.231 12.9115C161.394 11.6919 161.086 10.5485 160.305 9.48134C159.595 8.54318 158.704 8.07409 157.633 8.07409Z" fill="#6D897A" />
                        </svg>
                    </Link>

                    <ul className={`flex flex-col items-center justify-center md:flex-row absolute transition-all duration-500  md:static top-12 w-full md:w-auto h-[95vh] md:h-auto ${showNav ? "right-0 " : "right-full"}   ${pathName === "/" ? "text-color2 bg-[#FAF7EF]" : "text-white bg-color2"} md:bg-transparent`} >
                        <li onClick={() => setShowNav(false)} className='md:mx-5 my-5 md:my-0'>
                            <Link className={`text-lg hover:opacity-70`} href={"/"}>الصفحه الرئيسه</Link>
                        </li>
                        <li className='md:mx-5 my-5 md:my-0 relative'>
                            <button onClick={() => setShowDropDown(!showDropDown)} className={`flex items-center text-lg opacity-70 hover:opacity-100`}>الاقسام
                                <svg className='ms-2' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4401 1.2124L7.55006 6.1024C6.97256 6.6799 6.02756 6.6799 5.45006 6.1024L0.560059 1.2124" stroke={`${pathName === "/" ? "#6D897A" : "white"}`} strokeOpacity="0.5" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <svg className={`absolute top-[47px] left-1/2 ${showDropDown ? "block" : "hidden"}`} width="15" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 0L9.33013 7.5H0.669873L5 0Z" fill="#6D897A" />
                            </svg>
                            <ul className={`${showDropDown ? "block" : "hidden"}  border-t-color2 border-t-2 text-gray-500 overflow-auto max-h-[240px] z-10 px-3 w-[188px] bg-white absolute left-1/2 -translate-x-1/2 top-14`}>
                                <li className='my-4 md:my-5 text-xs hover:opacity-70'>
                                    <Link className='block' onClick={() => {
                                        setShowDropDown(false)
                                        setShowNav(false)
                                    }} href={"/products"}>
                                        جميع الاقسام
                                    </Link>
                                </li>
                                <li className='my-4 md:my-5 text-xs hover:opacity-70'><Link className='block' onClick={() => {
                                    setShowDropDown(false)
                                    setShowNav(false)
                                }} href={`/products?category=aalb-tort`}>
                                    علب تورت
                                </Link>
                                </li>
                                <li className='my-4 md:my-5 text-xs hover:opacity-70'>
                                    <Link className='block' onClick={() => {
                                        setShowDropDown(false)
                                        setShowNav(false)
                                    }} href={`/products?category=aalb-alshykolat`}>
                                        علب الشيكولاته

                                    </Link>
                                </li>
                                <li className='my-4 md:my-5 text-xs hover:opacity-70'>
                                    <Link className='block' onClick={() => {
                                        setShowDropDown(false)
                                        setShowNav(false)
                                    }} href={"/"}>
                                        اطباق ايطالي
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className='md:mx-5 my-5 md:my-0'>
                            <Link className='text-lg opacity-70 hover:opacity-100' href={"/"}>تواصل معنا</Link>
                        </li>
                    </ul>
                    <button onClick={() => setShowNav(!showNav)} className='md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${pathName === "/" ? "text-color1" : "text-white"} `}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
