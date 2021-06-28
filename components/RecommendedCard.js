function RecommendedCard() {
    return (
        <div className='relative mt-8'>
            <div>
                <h1 className='text-bold text-xl font-semibold text-[#D90429]'>
                    Recommended for you
                </h1>
            </div>

            <div className='rounded-lg mt-2 '>
                <img
                    src='/assets/images/image2.jpg'
                    className='  w-full h-40 rounded-xl  object-cover'
                />
            </div>
            <div className='text-white absolute top-12 left-2 font-bold'>
                <h1 className='text-xl '>Just in</h1>
                <h1 className='text-md text-gray-200'>
                    Deals just for you <br />
                    at least 40% off
                </h1>
            </div>

            <div className='bg-white absolute bottom-4 left-2 px-2 py-1'>
                Buy now
            </div>
        </div>
    )
}

export default RecommendedCard
