import { useState } from 'react'
import './MovieApp.css'
export const MovieApp = () => {

    const [search, setSearch] = useState('')
    const [movieList, setMovieList] = useState([])

    const urlBase='https://api.themoviedb.org/3/search/movie'
    const API_KEY='YOUR_API_KEY'

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMovies()
    }

    const fetchMovies = async () => {
        try{
            const response = await fetch(`${urlBase}?api_key=${API_KEY}&query=${search}&language=es-ES`)
            const data = await response.json()
            setMovieList(data.results)
        }catch(error){
            console.log('ha ocurrido un error',error)
        }
       
    }

    return (
        <div className='container'>
            <h1>Buscador de peliculas</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Busca tu pelicula'
                    value={search}
                    onChange={handleInputChange} />
                <button>Buscar</button>
            </form>

            {movieList &&
                <div className='movie-list'>

                    {movieList.map((movie) => (
                        <div className='movie-card' key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}
