import Header from '../modules/header'
import Footer from '../modules/footer'
import MovieInfo from '../../inferfaces'
import MovieInfoService from '../../services/movie_info'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"

function movies_info(){

    const { id } = useParams();
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/'
    const [movie, setMovie] = useState<Array<MovieInfo>>([])

    const searchMovie = async (id: string|undefined) => {

        const response = await MovieInfoService(id)
        console.log(response)
        setMovie(response)
    }

    useEffect(()=>{
        searchMovie(id)
    }, [])

    return (

        <div id="movies_info">
            <Header />
            <div id="card">
                <div className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                    <img className="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"/>
                    <h1>Bright</h1>
                    <h4>2017, David Ayer</h4>
                    <span className="minutes">117 min</span>
                    <p className="type">Action, Crime, Fantasy</p>
                    </div>
                    <div className="movie_desc">
                    <p className="text">
                        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. 
                    </p>
                    </div>
                </div>
                <div className="blur_back bright_back"></div>
                </div>        
            </div>
            <Footer />
        </div>
    )

}

export default movies_info