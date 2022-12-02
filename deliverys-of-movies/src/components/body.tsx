import React, { Component } from "react"
import { getMovies } from "../services/movies"

class Body extends Component{
    
    render(){

        return(
            
            <div id="body">
                <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Películas populares</h5>

                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Series populares</h5>
                        
                    </div>
                    </div>
                </div>
                </div>

            </div>                  
        )
    }
}

export default Body