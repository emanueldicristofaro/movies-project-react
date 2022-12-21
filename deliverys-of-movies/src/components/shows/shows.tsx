import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Show from "../../inferfaces"
import fetchShows from "../../services/shows";

export default function Shows(){

    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/'
    const [shows, setShows] = useState<Array<Show>>([]);

    const listShows = async () => {

        const response = await fetchShows();
        setShows(response);
    }

    useEffect(()=>{
        listShows()
    }, [])

    return (  

        <div id="primary">
            {/* Renderizado de series de TV */}
            <div className = "container mt-3">
                <div className="row">

                    <Carousel>
                    {shows.map((sho) =>(
                    <Carousel.Item key={sho.id}>
                        <img src={`${IMAGE_PATH + sho.poster_path}`} alt="" height={700} width="100%"/>
                        <Carousel.Caption>
                            <div className="caption">
                                <h5><a href={`show_info/${sho.id}`}>{sho.name}</a></h5>
                                <p>⭐{sho.vote_average}</p>
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