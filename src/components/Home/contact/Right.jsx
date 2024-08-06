import React from 'react'

function Right() {
    return (
        <div className='flex flex-col justify-center'>
            <h3 className='text-color2 text-xl md:text-2xl lg:text-4xl font-semibold'>تواصل معنا:</h3>
            <p className='text-[#1F2937] text-lg md:text-xl my-10'>للحصول على المساعدة الفورية، يرجى التواصل معنا.</p>
            <div>
                <div className='flex items-center'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9999 13.9299C12.4096 13.9299 12.8153 13.8492 13.1939 13.6924C13.5724 13.5357 13.9163 13.3058 14.2061 13.0161C14.4958 12.7264 14.7256 12.3824 14.8824 12.0039C15.0392 11.6254 15.1199 11.2197 15.1199 10.8099C15.1199 10.4002 15.0392 9.99451 14.8824 9.61597C14.7256 9.23743 14.4958 8.89349 14.2061 8.60377C13.9163 8.31405 13.5724 8.08423 13.1939 7.92744C12.8153 7.77064 12.4096 7.68994 11.9999 7.68994C11.1724 7.68994 10.3788 8.01865 9.79371 8.60377C9.2086 9.18888 8.87988 9.98247 8.87988 10.8099C8.87988 11.6374 9.2086 12.431 9.79371 13.0161C10.3788 13.6012 11.1724 13.9299 11.9999 13.9299Z" stroke="#6D897A" strokeWidth="1.5" />
                        <path d="M3.62069 8.99C5.59069 0.330002 18.4207 0.340003 20.3807 9C21.5307 14.08 18.3707 18.38 15.6007 21.04C14.6328 21.9735 13.3404 22.4952 11.9957 22.4952C10.6509 22.4952 9.35861 21.9735 8.39069 21.04C5.63069 18.38 2.47069 14.07 3.62069 8.99Z" stroke="#6D897A" strokeWidth="1.5" />
                    </svg>
                    <span className='mx-2 text-[#1F2937] md:text-lg'>العنوان</span>
                    <p className='text-gray-500'>اسم المدينه-المنطيقه-اسم الشارع-رقم المبنى</p>
                </div>
                <div className='flex items-center my-5'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0005 8.5V13.5M20.7505 13.75C20.7505 18.58 16.8305 22.5 12.0005 22.5C7.17049 22.5 3.25049 18.58 3.25049 13.75C3.25049 8.92 7.17049 5 12.0005 5C16.8305 5 20.7505 8.92 20.7505 13.75Z" stroke="#6D897A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 2.5H15" stroke="#6D897A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className='mx-2 text-[#1F2937] md:text-lg'>مواعيد العمل:</span>
                    <p className='text-gray-500'>السبت الى الخميس من 8 صباحا الى 5 مساء</p>
                </div>
                <div className='flex items-center my-5'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z" stroke="#6D897A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 9.5L13.87 12C12.84 12.82 11.15 12.82 10.12 12L7 9.5" stroke="#6D897A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className='mx-2 text-[#1F2937] md:text-lg'>البريد الالكتروني:</span>
                    <p className='text-gray-500'>username1@gmail.com</p>
                </div>
                <div className='flex items-center my-5'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.97 18.83C21.97 19.19 21.89 19.56 21.72 19.92C21.55 20.28 21.33 20.62 21.04 20.94C20.55 21.48 20.01 21.87 19.4 22.12C18.8 22.37 18.15 22.5 17.45 22.5C16.43 22.5 15.34 22.26 14.19 21.77C13.04 21.28 11.89 20.62 10.75 19.79C9.58811 18.9401 8.49169 18.0041 7.47 16.99C6.45877 15.972 5.5261 14.8789 4.68 13.72C3.86 12.58 3.2 11.44 2.72 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C11.27 14.25 11.79 14.74 12.32 15.19C12.84 15.63 13.27 15.93 13.61 16.11C13.66 16.13 13.72 16.16 13.79 16.19C13.87 16.22 13.95 16.23 14.04 16.23C14.21 16.23 14.34 16.17 14.45 16.06L15.21 15.31C15.46 15.06 15.7 14.87 15.93 14.75C16.16 14.61 16.39 14.54 16.64 14.54C16.83 14.54 17.03 14.58 17.25 14.67C17.47 14.76 17.7 14.89 17.95 15.06L21.26 17.41C21.52 17.59 21.7 17.8 21.81 18.05C21.91 18.3 21.97 18.55 21.97 18.83Z" stroke="#6D897A" strokeWidth="1.5" strokeMiterlimit="10" />
                    </svg>
                    <span className='mx-2 text-[#1F2937] md:text-lg'>التيليفون</span>
                    <p className='text-gray-500'>01223456789</p>
                </div>
            </div>
        </div>
    )
}

export default Right
