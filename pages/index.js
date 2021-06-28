import Head from 'next/head'
import Image from 'next/image'
import HomeCard from '../components/HomeCard'
import CategorySwiper from '../components/CategorySwiper'
import RecommendedCard from '../components/RecommendedCard'
import NewHitsSwiper from '../components/NewHitsSwiper'

export default function Home() {
    return (
        <div className='mt-8'>
            <HomeCard />
            <CategorySwiper />
            <RecommendedCard />
            <NewHitsSwiper />
        </div>
    )
}
