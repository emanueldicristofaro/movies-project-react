import axios from "axios";
import { API_PATH, API_KEY } from "../constants"
import MovieGenre from "../inferfaces"

//https://api.themoviedb.org/3/discover/movie?api_key=e8aad3e67aa5ad1137adbd3aac72274e&with_genres=28

const fetchMovies = async (movie: any) => {

    const { data } = await axios.get(`${API_PATH}/discover/movie?api_key=${API_KEY}&with_genres=${movie.genre_ids}`);
    const { results } = data
    return results as MovieGenre[]
}

export default fetchMovies