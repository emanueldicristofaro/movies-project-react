import '../src/styles/app.scss'
import '../src/styles/card_movie.scss'
import Home from './components/pages/home'
import MovieInfo from './components/pages/movies_info'
import ShowInfo from './components/pages/shows_info'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <div className = "App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie_info/:id" element={<MovieInfo />} />
            <Route path="show_info/:id" element={<ShowInfo />} />
          </Routes>
      </BrowserRouter>   
    </div>
  )
}

export default App
