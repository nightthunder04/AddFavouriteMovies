import "./css/App.css"
import Favourite from './pages/Favourite';
// import MovieCard from './components/MovieCard'
import Home from './pages/Home';
import { MoiveProvider } from "./Context/MovieContext";
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {

  return (
    <MoiveProvider>

      <NavBar/>
   <main className='main-content'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favourites' element={<Favourite/>}/>
     </Routes>


   </main>
   </MoiveProvider>
  )
}



export default App;
