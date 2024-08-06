import React from 'react'
import img1 from "../../../public/images/about/1.png"
import img2 from "../../../public/images/about/2.png"
import img3 from "../../../public/images/about/3.png"
import Image from 'next/image'

function About() {
    return (
        <div className='bg-white py-10 lg:py-16 my-10 lg:my-20 relative'>
            <div className='container mx-auto px-3 md:px-5 '>
                <div className='flex flex-col-reverse justify-center items-center lg:flex-row md:gap-20'>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <div>
                            <Image
                                src={img3}
                                alt="Cake Box 3"
                                className="rounded-lg"
                                layout="responsive"
                                priority
                            />
                        </div>
                        <div>
                            <div className='mb-5'>
                                <Image
                                    src={img1}
                                    alt="Cake Box 1"
                                    className="rounded-lg"
                                    height={400}
                                    priority
                                />
                            </div>
                            <div>
                                <Image
                                    src={img2}
                                    alt="Cake Box 2"
                                    className="rounded-lg"
                                    height={400}
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className='text-gray-600 mb-7 lg:mb-0'>
                        <h3 className='text-color2 text-2xl lg:text-4xl font-semibold mb-5'>نبذة عنا:</h3>
                        <p className='text-sm md:text-xl'>اننا نقدم حلولًا شاملة للتغليف والتعبئة لاحتياجات متنوعة، من خلال مجموعة واسعة من المنتجات عالية الجودة بتصاميم جذابة وأسعار تنافسية.</p>
                        <span className='my-3 block'>معنا، يمكنك:</span>
                        <ol style={{ "listStyleType": "inherit", padding: "5px 20px" }}>
                            <li className='my-2'>إبراز منتجاتك بأفضل طريقة ممكنة.</li>
                            <li className='my-2'>تعزيز تجربة عملائك بشكل إيجابي.</li>
                            <li className='my-2'>الارتقاء بأعمالك إلى مستوى جديد من النجاح.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className='absolute top-[95%] lg:top-[70%] -z-10 left-0 right-0 rotate-180'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="white"  d="M0,128L8.9,154.7C17.8,181,36,235,53,224C71.1,213,89,139,107,112C124.4,85,142,107,160,117.3C177.8,128,196,128,213,149.3C231.1,171,249,213,267,197.3C284.4,181,302,107,320,69.3C337.8,32,356,32,373,69.3C391.1,107,409,181,427,202.7C444.4,224,462,192,480,170.7C497.8,149,516,139,533,128C551.1,117,569,107,587,106.7C604.4,107,622,117,640,128C657.8,139,676,149,693,170.7C711.1,192,729,224,747,218.7C764.4,213,782,171,800,138.7C817.8,107,836,85,853,69.3C871.1,53,889,43,907,48C924.4,53,942,75,960,101.3C977.8,128,996,160,1013,186.7C1031.1,213,1049,235,1067,229.3C1084.4,224,1102,192,1120,154.7C1137.8,117,1156,75,1173,80C1191.1,85,1209,139,1227,154.7C1244.4,171,1262,149,1280,170.7C1297.8,192,1316,256,1333,272C1351.1,288,1369,256,1387,245.3C1404.4,235,1422,245,1431,250.7L1440,256L1440,320L1431.1,320C1422.2,320,1404,320,1387,320C1368.9,320,1351,320,1333,320C1315.6,320,1298,320,1280,320C1262.2,320,1244,320,1227,320C1208.9,320,1191,320,1173,320C1155.6,320,1138,320,1120,320C1102.2,320,1084,320,1067,320C1048.9,320,1031,320,1013,320C995.6,320,978,320,960,320C942.2,320,924,320,907,320C888.9,320,871,320,853,320C835.6,320,818,320,800,320C782.2,320,764,320,747,320C728.9,320,711,320,693,320C675.6,320,658,320,640,320C622.2,320,604,320,587,320C568.9,320,551,320,533,320C515.6,320,498,320,480,320C462.2,320,444,320,427,320C408.9,320,391,320,373,320C355.6,320,338,320,320,320C302.2,320,284,320,267,320C248.9,320,231,320,213,320C195.6,320,178,320,160,320C142.2,320,124,320,107,320C88.9,320,71,320,53,320C35.6,320,18,320,9,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    )
}
export default About
