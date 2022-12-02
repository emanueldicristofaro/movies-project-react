//-----------------------------
// API Movies
//-----------------------------

import axios from "axios";
import React, { useEffect } from "react";

//-----------------------------

interface Movie {

    id: number,
    title: String,
    poster_path: String
}

export function getMovies(Movie: Movie){

    const API_PATH = 'https://api.themoviedb.org/3'
    const API_KEY = 'e8aad3e67aa5ad1137adbd3aac72274e'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    
    //Variables de estado
    const [movies, setMovies] = React.useState<Array<Movie>>([]);
    const [searchKey, setSearchKey] = React.useState('');

    //Funciones
    const fetchMovies = async (searchKey: any) =>{

        const type = searchKey ? "search" : "discover"
        const {data: {result}, } =
        await axios.get(`${API_PATH}/${type}/movie?api_key=${API_KEY}&sort_by=popularity.desc`);
        setMovies(result);
    }

    useEffect(()=>{
        fetchMovies(searchKey);
    }, [])

      return (      
        <div id="primary">

            {/* Renderizado de peliculas */}
            <div className = "container mt-3">
                <div className="row">
                    {movies.map((mov) =>(
                        <div key={mov.id} className="col-md-4 mb-3">
                            <img src={`${IMAGE_PATH + mov.poster_path}`} alt="" height={600} width="100"/>
                            <h4 className="text-center">{mov.title}</h4>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      );
}
