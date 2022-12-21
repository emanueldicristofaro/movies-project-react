import Header from '../modules/header'
import Footer from '../modules/footer'
import ShowInfoService from '../../services/show_info'
import ShowGenre from '../../inferfaces'
import ListShowsGenre from '../../services/shows_genre'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap";

function show_info() {

    const { id } = useParams();
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/'
    const [show, setShow] = useState<any>({})
    const [shows, setShows] = useState<Array<ShowGenre>>([])

    const searchShow = async (id: string|undefined) => {

        const response = await ShowInfoService(id)
        setShow(response)
    }

    const listShowsGenre = async(show: any) => {

        const response = await ListShowsGenre(show)
        setShows(response)
    }

    useEffect(()=>{
        searchShow(id)
    }, [])

    useEffect(()=>{
        listShowsGenre(show)
    }, [])

    return (

        <div id="show_info">

            <Header />

            <Carousel>
                {shows.map((sho) =>(
                <Carousel.Item key={sho.id}>
                    <img src={`${IMAGE_PATH + sho.backdrop_path}`} alt="" height={700} width="100%"/>
                    <Carousel.Caption>
                        <div className="caption">
                            <h5>{sho.name}</h5>
                            <p>⭐{sho.vote_average}</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>

            <div id="card">
                <div className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                    <img className="locandina" src={`${IMAGE_PATH + show.poster_path}`}/>
                    <h1>{show.name}</h1>
                    <h4>⭐ {show.vote_average}</h4>
                    </div>
                    <div className="movie_desc">
                    <p className="text">
                        {show.overview} 
                    </p>
                    </div>
                </div>
                <img className="blur_back" src={`${IMAGE_PATH + show.backdrop_path}`}/>
                </div>        
            </div>
            <Footer />
        </div>
    )

}

export default show_info