import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import '../featured.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

function Featured({ silder }) {

	const [swiperRef, setSwiperRef] = useState(null);

	return (
		<Swiper
			onSwiper={setSwiperRef}
			slidesPerView={4}
			centeredSlides={true}
			spaceBetween={20}
			loop={true}
			autoplay={{
					delay: 2500,
					disableOnInteraction: false,
			}}
			navigation={true}
			modules={[Autoplay, Navigation]}
			className="mySwiper w-[100%] h-[400px]"
		>
			{silder.map((item) => {
				return (
					<SwiperSlide key={`featured_${item.id}`} className='flex text-center text-lg bg-white justify-center align-middle'>
						<img 
							src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" 
							className='w-[100%] h-[100%] block object-cover'
						/>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default Featured