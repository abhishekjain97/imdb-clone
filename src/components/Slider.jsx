import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

function Slider({ silder }) {
    return (
        <div className='w-[100%] md:w-[60%] bg-gray-500'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {silder.map((item) => {
                    return (
                        <SwiperSlide key={`slider_${item.id}`} >
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" />
                            <div className='w-full h-[25%] absolute bottom-0 bg-black opacity-50'></div>
                            <div className='flex flex-col w-full h-[30%] absolute bottom-0 text-white justify-center'>
                                <p className='w-full text-xl'>{item.title}</p>
                                <p className='w-full whitespace-nowrap text-ellipsis overflow-hidden px-5'>{item.overview}</p>
                                <p className='absolute bottom-0 pl-5'>Rating: {item.vote_average.toFixed(1)}/10</p>
                                <p className='w-full absolute bottom-0 text-right pr-5'>Popularity: {item.popularity}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Slider