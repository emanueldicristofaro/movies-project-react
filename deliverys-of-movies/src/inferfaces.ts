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

export default interface MovieGenre {

    id: number
    title: string
    vote_average: number
    backdrop_path: string
}

export default interface ShowGenre {

    id: number
    name: string
    vote_average: number
    backdrop_path: string
}