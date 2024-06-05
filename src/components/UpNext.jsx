import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

function UpNext({ silder }) {
    return (
        <div className='w-[100%] md:w-[40%] h-[400px] overflow-auto'>
            <h2 className='text-xl text-yellow-500 font-medium text-left'>Up Next</h2>
            <div className='w-full flex flex-col gap-2 mt-5'>
                {silder.map((item) => {
                    return (
                        <div key={`upnext_${item.id}`} className='w-full flex flex-row p-5 bg-gray-900'>
                            <div className='w-[25%]'>
                                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
                            </div>
                            <div className='w-[75%] text-left p-5 text-white'>
                                <p className='text-xl'>{item.title}</p>
                                <p className='line-clamp-3'>{item.overview}</p>
                                <p className='text-yellow-500'>Rating: {item.vote_average.toFixed(1)}/10</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UpNext