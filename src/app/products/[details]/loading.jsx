import React from 'react'

function loading() {
    return (
        <div className='flex justify-center items-center my-7 h-screen'>
            <div className='animate-spin flex justify-center items-center h-full'>
                <div className='w-12 h-12 bg-transparent border-8 border-t-color1 border-r-color2 border-l-transparent border-b-color1  rounded-full'>
                </div>
            </div>
        </div>
    )
}

export default loading
