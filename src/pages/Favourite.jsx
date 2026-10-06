import '../css/Favourites.css'
import { useMovieContext } from '../Context/MovieContext';
import MovieCard from '../components/MovieCard';



function Favourite(){

    const {Favourites} = useMovieContext();

    if (favourite){
        return
          <div className="movie-grid">

            {Favourites.map ((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
                 
           </div>
    }

    return(
    <div className="favourite-empty">
        <h2>No Favourite movies yet</h2>
        <p>Start adding movies to your favourite and they will appear here</p>
    </div>
    )
}

export default Favourite;