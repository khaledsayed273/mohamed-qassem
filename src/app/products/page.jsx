import React from 'react'
import Card from './components/Card'
import SideBar from './components/SideBar'
import Link from 'next/link'

const getProducts = async (category) => {
  const baseUrl = process.env.baseUrl


  try {
    const req = await fetch(`${baseUrl}/products${category ? `?filter[category_slug]=${category}` : ""}`, { next: { revalidate: 3600 } })
    const res = await req.json()
    const data = await res.data
    return data
  } catch (e) {
    return e
  }

}

async function page({searchParams}) {

    const products = await getProducts(searchParams.category)    

    const data = await products.data
    return (
        <main>
            <div className='container mx-auto my-20 md:my-28 px-2 md:px-5'>
                <div className='mb-5 text-sm text-gray-400'>
                    <Link className='me-2' href={"/products"}>الاقسام</Link>
                    {`>`}
                    <span className='mx-2'>منتجات اخرى</span>
                </div>
                <div className='grid lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    <div>
                        <SideBar />
                    </div>
                    <div className='lg:col-span-2 xl:col-span-3'>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:gap-5 lg:gap-7'>
                            {data?.map((item, index) => (
                                <Card item={item} key={index} />
                            ))}
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
