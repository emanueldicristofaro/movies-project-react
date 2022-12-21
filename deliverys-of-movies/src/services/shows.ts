import axios from "axios";
import { API_PATH, API_KEY } from "../constants"
import Show from "../inferfaces"

const fetchShows = async () => {

    const { data } = await axios.get(`${API_PATH}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`);
    const { results } = data
    return results as Show[]
}

export default fetchShows