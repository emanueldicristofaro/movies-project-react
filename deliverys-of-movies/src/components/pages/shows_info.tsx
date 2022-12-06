import Header from '../modules/header'
import Footer from '../modules/footer'
import ShowInfoService from '../../services/show_info'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"

function show_info() {

    const { id } = useParams();
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/'
    const [show, setShow] = useState<any>({})

    const searchShow = async (id: string|undefined) => {

        const response = await ShowInfoService(id)
        setShow(response)
    }

    useEffect(()=>{
        searchShow(id)
    }, [])

    return (

        <div id="show_info">
            <Header />
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