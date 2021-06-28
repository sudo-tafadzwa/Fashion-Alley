import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import CategoryCard from './CategoryCard'

function CategorySwiper() {
    return (
        <div className='mt-4'>
            <h1 className='text-bold text-xl font-semibold text-[#D90429]'>
                Categories
            </h1>
            <Swiper
                autoplay={true}
                slidesPerView={2.5}
                spaceBetween={20}
                className='mySwiper'
            >
                <SwiperSlide>
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CategorySwiper
