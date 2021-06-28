function HomeCard() {
    return (
        <div className='relative'>
            <div className='rounded-lg '>
                <img
                    src='/assets/images/image4.jpg'
                    className='  w-full h-40 rounded-xl  object-cover'
                />
            </div>
            <div className='text-white absolute top-6 left-2 font-bold'>
                <h1 className='text-xl '>Get ready for summer</h1>
                <h1 className='text-md text-gray-200'>
                    With the joys of <br />
                    premium fashion
                </h1>
            </div>

            <div className='bg-white absolute bottom-4 left-2 px-2 py-1'>
                Buy now
            </div>
        </div>
    )
}

export default HomeCard
