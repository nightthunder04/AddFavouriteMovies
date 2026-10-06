import { createContext , useState,useContext,useEffect } from "react";


const MovieContext = createContext()

export const useMovieContext = ()=> useContext(MovieContext)

export const MoiveProvider = ({children}) => {

    const [favourite,setFavourites] = useState([])


    useEffect(()=>{
        const storeFavs =  localStorage.getItem("favourites")

        if (storedfavs) setFavourites(JSON.parse(storeFavs))
    },[])



    useEffect(()=>{
        localStorage,setItem('favourites',JSON.stringify(favourites))
    },[favourites])


    const addToFafvourites = (movie) => {
          setFavourites(prev => [...prev ,movie])
        
    }


    const removeFavourites = (movidId) => {
        setFavourites(prev => prev.filter(movie => movid.id !== movidId))
    }


    const isFavourite = (movidId) => {
        return favourites.some(movie = movie.id === movidId)
    }


const value = {
    favourite,
    addToFafvourites,
    removeFavourites,
    isFavourite
}



    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}