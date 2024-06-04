import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const MOVIE_API_ENDPOINT = "https://api.themoviedb.org/3/trending/movie/day?api_key=c6542f09475e8cba87d72e6cc115c099&language=en-US&page=1"

function Home() {
	const [silder, setSilder] = useState([])

	useEffect(() => {
		axios.get(MOVIE_API_ENDPOINT).then((res) => {
			const result = res.data.results
			if (result) {
				setSilder(result)
			}
		})
	}, [])

	return (
		<>
			<div className='w-full flex flex-col md:flex-row gap-5'>
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
								<>
									<SwiperSlide key={item.id} >
										<img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" />
										<div className='w-full h-[25%] absolute bottom-0 bg-black opacity-50'></div>
										<div className='flex flex-col w-full h-[30%] absolute bottom-0 text-white justify-center'>
											<p className='w-full text-xl'>{item.title}</p>
											<p className='w-full whitespace-nowrap text-ellipsis overflow-hidden px-5'>{item.overview}</p>
											<p className='absolute bottom-0 pl-5'>Rating: {item.vote_average.toFixed(1)}/10</p>
											<p className='w-full absolute bottom-0 text-right pr-5'>Popularity: {item.popularity}</p>
										</div>
									</SwiperSlide>

								</>
							)
						})}
					</Swiper>
				</div>
				<div className='w-[100%] md:w-[40%] h-[400px] overflow-auto'>
					<h2 className='text-xl text-yellow-500 font-medium text-left'>Up Next</h2>
					<div className='w-full flex flex-col gap-2 mt-5'>
						{silder.map((item) => {
							return (
								<>
									<div className='w-full flex flex-row p-5 bg-gray-900'>
										<div className='w-[25%]'>
											<img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
										</div>
										<div className='w-[75%] text-left p-5 text-white'>
											<p className='text-xl'>{item.title}</p>
											<p className='line-clamp-3'>{item.overview}</p>
											<p className='text-yellow-500'>Rating: {item.vote_average.toFixed(1)}/10</p>
										</div>
									</div>
								</>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default Home