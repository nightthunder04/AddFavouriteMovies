import '../css/MovieCard.css'
import { useMovieContext } from '../Context/MovieContext'

function MovieCard({movie}){


    const {isFavourite , addToFavourites, removeFavourites} = useMovieContext()
    const favourite = isFavourite(movie.id)

   function onFavourite(e){
    //   alert("Clicked")
    e.preventDefault()
    if (favourite) removeFavourites(movie.id)
        else addToFavourites(movie)
   }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />

                   <p>{movie.release_date?.split("-")[0]}</p>

                <div className="movie-overlay">
                    <button className={`favourite-btn  ${favourite ? "active":""}`}>
                        🤍
                    </button>
                </div>

            </div>
        <div className="movie-info">
            <h2>{movie.title}</h2>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
        
        </div>
    )
}

export default MovieCard