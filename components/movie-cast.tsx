"use client";

import { API_URL } from "../app/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import human from "../styles/movie-cast.module.css";

async function getCredits(id: string) {
	const response = await fetch(`${API_URL}/${id}/credits`);
	return response.json();
}

var settings = {
	dots: false,
	infinite: false,
	speed: 500,
	slidesToShow: 6,
	slidesToScroll: 3,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: false,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 0,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 0,
			},
		},
	],
};

const MovieCast = async ({ id }: { id: string }) => {
	const credits = await getCredits(id);
	return (
		<div className={human.container}>
			<div className={human.title}>Cast</div>
			<Slider {...settings}>
				{credits.map((credit, index) => (
					<div key={index} className={human.content}>
						<img src={credit.profile_path} alt={credit.original_name} />
						<div>{credit.name}</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default MovieCast;
