import Movies from "../movies/movies"
import Shows from "../shows/shows"

function Body () {

        return(

            <div id="body">
                <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Películas populares</h5>
                        <Movies />
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Series populares</h5>
                        <Shows />
                    </div>
                    </div>
                </div>
                </div>

            </div>                  
        )
}

export default Body