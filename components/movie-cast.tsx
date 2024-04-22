import { API_URL } from "../app/constants";

async function getCredits(id: string) {
	const response = await fetch(`${API_URL}/${id}/credits`);
	return response.json();
}

const MovieCast = async ({ id }: { id: string }) => {
	const credits = await getCredits(id);
	return (
		<div>
			{credits.map((credits) => (
				<img src={credits.profile_path} alt={credits.original_name} />
			))}
		</div>
	);
};

export default MovieCast;
