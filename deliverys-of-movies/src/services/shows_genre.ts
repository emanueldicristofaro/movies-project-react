import axios from "axios";
import { API_PATH, API_KEY } from "../constants"
import ShowGenre from "../inferfaces"

//https://api.themoviedb.org/3/discover/tv?api_key=e8aad3e67aa5ad1137adbd3aac72274e&with_genres=10765

const fetchShows = async (show: any) => {

    const { data } = await axios.get(`${API_PATH}/discover/tv?api_key=${API_KEY}&with_genres=${show.genre_ids}`);
    const { results } = data
    return results as ShowGenre[]
}

export default fetchShows