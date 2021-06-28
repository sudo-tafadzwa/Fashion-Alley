function CategoryCard() {
    return (
        <div className='flex'>
            <div className='mr-2 relative'>
                <img
                    className='mt-2 w-full h-28 rounded-xl object-cover'
                    src='/assets/images/image5.jpg'
                />
                <div className='bg-white absolute bottom-2 left-2 px-1'>
                    <h4>New hits</h4>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
