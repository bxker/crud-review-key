let movies = [
    {
        id: 1,
        name: "Titanic",
        year: 1998,
        goodMovie: true
    },
    {
        id: 2,
        name: "Interstellar",
        year: 2014,
        goodMovie: true
    },
    {
        id: 3,
        name: "Avatar",
        year: 2008,
        goodMovie: true
    }
]

let id = 4;


function getMovies(req, res){
    res.status(200).json(movies)
}

function addMovies(req, res){
    const {name, year, goodMovie} = req.body
    movies.push({name, year, goodMovie, id})
    id++
    res.status(200).json(movies)
}

function editMovies(req, res){
    const id = +req.params.id
    const {name, year, goodMovie} = req.body

    let movie = {
        id,
        name,
        year, 
        goodMovie
    }
    let movieIndex = movies.findIndex(movie => movie.id === id);
    movies.splice(movieIndex, 1, movie)
    res.status(200).json(movies)
}

function deleteMovies(req, res){
    const id = +req.params.id

    let movieIndex = movies.findIndex(movie => movie.id === id);
    movies.splice(movieIndex, 1)
    res.status(200).json(movies)
}

module.exports = {
    getMovies,
    addMovies,
    editMovies,
    deleteMovies
}
