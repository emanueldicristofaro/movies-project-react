import axios from "axios";
import { API_PATH, API_KEY } from "../constants"
import Movie from "../inferfaces"

const fetchMovies = async () => {

    const { data } = await axios.get(`${API_PATH}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`);
    const { results } = data
    return results as Movie[]
}

export default fetchMovies
