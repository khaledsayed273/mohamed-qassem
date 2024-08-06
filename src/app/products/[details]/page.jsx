import Link from 'next/link'
import React from 'react'
import SliderImages from './components/SliderImages'
import BtnsAndContact from './components/BtnsAndContact'

const getDetails = async (baseUrl, slug) => {

  try {
    const req = await fetch(`${baseUrl}/products/${slug}`, { next: { revalidate: 3600 } })
    const res = await req.json()
    const data = await res
    return data

  } catch (e) {
    return e
  }
}

async function page({ params }) {
  const baseUrl = process.env.baseUrl

  const res = await getDetails(baseUrl, params.details)
  const details = await res?.data

  return (
    <main className='min-h-screen'>
      {res.status && (
        <div className='container mx-auto mt-20 md:mt-28 px-2 md:px-5'>
          <div className='mb-5 text-sm text-gray-400'>
            <Link className='me-2' href={"/products"}>الاقسام</Link>
            {`>`}
            <Link className='mx-2' href={`/products/?filter[category_slug]=${details.category.slug}`}>منتجات اخرى</Link>
            {`>`}
            <span className='mx-2'>{details.name}</span>
          </div>

          <div className='my-10'>
            <div className='grid lg:grid-cols-2 gap-7'>
              <div>
                <SliderImages  images={details.image} />
                <div className='p-2 md:p-5 border border-gray-300 rounded-md my-10'>
                  <h3 className='md:text-2xl'>الوصف</h3>
                  <p className='mt-5 text-sm md:text-base text-gray-500'>
                    {details.description}
                  </p>
                </div>
                <div className='p-2 md:p-5 border border-gray-300 rounded-md my-10'>
                  <h3 className='md:text-2xl border-b border-b-gray-300 pb-3'>معلومات اضافيه</h3>
                  <h4 className='md:text-xl border-b border-b-gray-300 my-5 pb-3 text-gray-500'>الخامه: ---</h4>
                  {details.sizes.length > 0 && (
                    <>
                      <h5 className='mb-4 md:text-xl text-gray-600 '>الحجم والاسعار: </h5>
                      <ol className='text-gray-600 list-disc	px-5'>
                        {details.sizes.map((item, index) => (
                          <li key={index} className='my-2 md:text-lg xl:text-xl'>مقاس {item.name} : {item.price} جنيها</li>
                        ))}
                      </ol>
                    </>
                  )}
                  {details.color && (
                    <span className='my-5 inline-block text-[#4B5563] lg:text-lg xl:text-xl	'>اللون: {details.color}</span>
                  )}
                </div>
              </div>
              <div className="relative">
                <div className="sticky top-5  border border-[#D1D5DB] p-5 md:p-10 rounded-md">
                  <span className='text-[#9CA3AF]'>{details.material}</span>
                  <h1 className='text-[#374151] font-bold lg:text-2xl xl:text-3xl my-5'>
                    {details.name}
                  </h1>
                  <div className='flex mb-5'>
                    {Array.from({ length: details.rate }).map((index) => (
                      <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-300 me-1">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <span className='text-gray-500'>السعر:</span>
                    <span className='md:text-2xl'> {details.price} جنيها</span>
                  </div>
                  <div>
                    <BtnsAndContact slug={details.slug} sizes={details.sizes} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default page
