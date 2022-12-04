export default interface Movie {

    id: number
    title: string
    vote_average: number
    poster_path: string
}

export default interface Show {

    id: number
    name: string
    vote_average: number
    poster_path: string
}

export default interface MovieInfo {

    id: number
    name: string
    overview: string
    vote_average: number
    poster_path: string
}