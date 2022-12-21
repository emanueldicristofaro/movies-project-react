import Header from '../modules/header'
import Footer from '../modules/footer'
import MovieInfoService from '../../services/movie_info'
import ListMoviesGenre from '../../services/movies_genre'
import MovieGenre from '../../inferfaces'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap";

function movies_info(){

    const { id } = useParams();
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/'
    const [movie, setMovie] = useState<any>({})
    const [movies, setMovies] = useState<Array<MovieGenre>>([])

    const searchMovie = async (id: string|undefined) => {

        const response = await MovieInfoService(id)
        setMovie(response)
    }

    const listMoviesGenre = async(movie: any) => {

        const response = await ListMoviesGenre(movie)
        setMovies(response)
    }

    useEffect(()=>{
        searchMovie(id)
    }, [])

    useEffect(()=>{
        listMoviesGenre(movie)
    }, [])

    return (

        <div id="movies_info">

        <Header />

            <Carousel>
                {movies.map((mov) =>(
                <Carousel.Item key={mov.id}>
                    <img src={`${IMAGE_PATH + mov.backdrop_path}`} alt="" height={700} width="100%"/>
                    <Carousel.Caption>
                        <div className="caption">
                            <h5>{mov.title}</h5>
                            <p>⭐{mov.vote_average}</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
                  
            <div id="card">
                <div className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                    <img className="locandina" src={`${IMAGE_PATH + movie.poster_path}`}/>
                    <h1>{movie.original_title}</h1>
                    <h4>⭐ {movie.vote_average}</h4>
                    </div>
                    <div className="movie_desc">
                    <p className="text">
                        {movie.overview} 
                    </p>
                    </div>
                </div>
                <img className="blur_back" src={`${IMAGE_PATH + movie.backdrop_path}`}/>
                </div>        
            </div>

        <Footer />
        </div>
    )  
}

export default movies_info