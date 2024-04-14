import duck from "../styles/movie-videos.module.css";

import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
	const response = await fetch(`${API_URL}/${id}/videos`);
	return response.json();
}

const MovieVideos = async ({ id }: { id: string }) => {
	const videos = await getVideos(id);
	return (
		<div className={duck.container}>
			{videos.map((video) => (
				<iframe
					key={video.id}
					src={`https://youtube.com/embed/${video.key}`}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title={video.name}
				/>
			))}
		</div>
	);
};

export default MovieVideos;
