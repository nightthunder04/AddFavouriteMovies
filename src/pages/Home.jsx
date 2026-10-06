import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies ,getPopularMovies } from "../services/api"
import '../css/Home.css'

function Home(){
         
    const [searchQuery , setSearchQuery] = useState("");

    const [movies, setMovies]= useState([]);
    const [error , setError ] = useState(null);
    const[loading , setLoading] = useState(true);

    useEffect(() =>{
        const loadPopularMovies = async () =>{
            try{
                const popularMovies =  await getPopularMovies()
                setMovies(popularMovies)
            }catch(err){
                console.log(err);
                setError("Failed to load the movies...")
                
            }
            finally{
                setLoading(false)
            }
        };
        loadPopularMovies();
    },[])

    // const movies = getPopularMovies() 





    // const movies = [
    //     {id:1, title:"Jhon Wick", release_date:"2020"},
    //     {id:2, title:"Terminator", release_date:"2021"},
    //     {id:3, title:"Shiv ji the boss", release_date:"2022"},
    //     {id:4, title:"Robot", release_date:"2023"}
    // ]
    

    const handleSearch = async(e)=>{
        e.preventDefault()
       if (!searchQuery.trim()) return
    //    if(loading) return
       setLoading(true)
       try{
           const searchResult =  await searchMovies(searchQuery)
           setMovies(searchResult)
           setError(null)      



       }catch(err){
          console.log(err)
          setError("Failed to search movies....")
       }
    //    setSearchQuery("");
    }
    

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text"
                 placeholder="Search for movies..."
                  className="search-input" 
                  value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  />
                <button type="submit" className="search-button">Search</button>
            </form>
                 
                 {loading ? (
                    <div className="loading">Loading...</div>
                 ) :
                  <div className="movie-grid">

            {movies.map ((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
                 
           </div>
                 }


          

        </div>
      
    )
}

export default Home