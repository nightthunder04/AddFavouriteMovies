import '../css/MovieCard.css'

function MovieCard({movie}){

   function onFavourite(){
      alert("Clicked")
   }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />

                <div className="movie-overlay">
                    <button className="favourite-btn"  onClick={onFavourite}>
                        🤍
                    </button>
                </div>

            </div>
        <div className="movie-info">
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
        </div>
        
        </div>
    )
}

export default MovieCard