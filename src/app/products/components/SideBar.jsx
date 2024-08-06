import Link from 'next/link'
import React from 'react'

const getCategories = async () => {
    const baseUrl = process.env.baseUrl
    try {
        const req = await fetch(`${baseUrl}/categories`, { next: { revalidate: 3600 } })
        const res = await req.json()
        const data = await res.data
        return data

    } catch (e) {
        return e
    }
}

async function SideBar() {
    const categories = await getCategories()
    return (
        <div className="border border-gray-200 rounded-md ">
            <div className='bg-[#FAF7EF] p-4'>
                <h2 className="text-xl md:text-2xl text-color1">الأقسام</h2>
            </div>
            <ul className="space-y-2 p-4">
                {categories.map(item => (
                    <li key={item.id}>
                        <Link className='p-2 hover:bg-gray-100  w-full border-b border-gray-200 rounded flex items-center text-sm md:text-base' href={`/products?category=${item.slug}`}>
                            <span className="text-gray-700 me-1.5">{item.name}</span>
                            <span className="text-gray-400">({item.products_count})</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SideBar
