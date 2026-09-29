const API_KEY = 'd7228488e7c9c3bb71260ab40d2696f8'
const BASE_URL = 'https://api.themoviedb.org/3'


export const getPopularMovies = async ()=>{
    const response = await fetch(`${Base_url}/moive/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
    

};


export const searchMovies = async (query)=>{
    const response = await fetch(`${Base_url}/moive/popular?api_key=${API_KEY}&query=${encodedURIComponent(query)}`)
    const data = await response.json();
    return data.results;
    

};