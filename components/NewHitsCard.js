import React from 'react'

function NewHitsCard() {
    return (
        <div>
            <div>
                <img
                    className='mt-2 w-full h-40 rounded-xl object-cover'
                    src='/assets/images/image4.jpg'
                />
            </div>
            <div className='mt-2 justify-center flex items-center flex-col'>
                <h1 className='font-semibold text-sm'>Chelsea Boots</h1>
                <h4 className='text-gray-400 text-xs'>Ladies winter wear</h4>
                <h6 className='text-sm text-[#D90429]'>$75</h6>
            </div>
        </div>
    )
}

export default NewHitsCard
