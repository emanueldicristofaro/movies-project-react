import React, { Component } from "react"
import alita from '../assets/img/Alita.jpg';
import padrino from '../assets/img/Padrino.png';
import it from '../assets/img/It.jpg';

class ImageList extends Component{

    render(){
        return(
            <div id="ImageList">
                <div id="listMoviesExample" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#listMoviesExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#listMoviesExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#listMoviesExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={alita} className="d-block w-100" alt="Alita" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Alita Ángel de Batalla</h5>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={padrino} className="d-block w-100" alt="Padrino" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Padrino</h5>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={it} className="d-block w-100" alt="IT" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>IT (2017)</h5>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#listMoviesExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#listMoviesExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>
        )
    }
}

export default ImageList;