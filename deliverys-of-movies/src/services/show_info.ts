import axios from "axios";
import { API_PATH, API_KEY } from "../constants"

//https://api.themoviedb.org/3/tv/119051?api_key=e8aad3e67aa5ad1137adbd3aac72274e

const fetchShow = async (id: string|undefined) => {

    const { data } = await axios.get(`${API_PATH}/tv/${id}?api_key=${API_KEY}`);
    return data
}

export default fetchShow