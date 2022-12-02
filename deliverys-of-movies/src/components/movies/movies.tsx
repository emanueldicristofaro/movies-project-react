import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import fetchMovies from "../../services/movies"
import Movie from "../../inferfaces"

export default function Movies(){

    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const [movies, setMovies] = useState<Array<Movie>>([])

    const listMovies = async () => {

        const response = await fetchMovies()
        setMovies(response)
    }

    useEffect(()=>{
        listMovies()
    }, [])

    return (  

        <div id="primary">
            {/* Renderizado de peliculas */}
            <div className = "container mt-3">
                <div className="row">

                    <Carousel>
                    {movies.map((mov) =>(
                    <Carousel.Item key={mov.id}>
                        <img src={`${IMAGE_PATH + mov.poster_path}`} alt="" height={700} width="100%"/>
                        <Carousel.Caption>
                            <div className="className">
                                <h5>{mov.title}</h5>
                                <p>⭐{mov.vote_average}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))}
                    </Carousel>
                </div>
            </div>
        </div>
      )
}
