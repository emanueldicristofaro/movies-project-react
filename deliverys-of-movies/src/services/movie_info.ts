import axios from "axios";
import { API_PATH, API_KEY } from "../constants"

//https://api.themoviedb.org/3/movie/436270?api_key=e8aad3e67aa5ad1137adbd3aac72274e

const fetchMovie = async (id: string|undefined) => {

    const { data } = await axios.get(`${API_PATH}/movie/${id}?api_key=${API_KEY}`);
    return data
}

export default fetchMovie