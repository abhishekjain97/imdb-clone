import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Slider from '../components/Slider';
import UpNext from '../components/UpNext';
import Featured from '../components/Featured';

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
				<Slider silder={silder} />
				<UpNext silder={silder} />
			</div>

			<div className='flex flex-col w-[100%] mt-5'>
				<div className='w-full text-left'>
					<p className='text-xl text-yellow-500 font-medium'>Featured today</p>
				</div>
				<div className='w-[100%] mt-5'>
					<Featured  silder={silder} />
				</div>
			</div>
			
		</>
	)
}

export default Home