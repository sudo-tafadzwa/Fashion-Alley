import NewHitsCard from './NewHitsCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

function NewHitsSwiper() {
    return (
        <div className='mt-8'>
            <h1 className='text-bold text-xl font-semibold text-[#D90429]'>
                New Hits
            </h1>
            <Swiper
                autoplay={true}
                slidesPerView={2.5}
                spaceBetween={20}
                className='mySwiper'
            >
                <SwiperSlide>
                    <NewHitsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <NewHitsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <NewHitsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <NewHitsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <NewHitsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <NewHitsCard />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default NewHitsSwiper
