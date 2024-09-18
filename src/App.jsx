import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard.jsx';
import Hero from './Hero/Hero.jsx';
import search from "./Header/search.svg";

// 98a06411
let API_URL = 'http://www.omdbapi.com/?apikey=98a06411';

const movie1 = {
  "Poster": "https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_SX300.jpg",
  "Title": "Attack on Titan",
  "Type": "series",
  "Year": "2013–2023",
  "imdbID": "tt2560140"
}
const movie2 = {
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  "Title": "Shutter Island",
  "Type": "movie",
  "Year": "2010",
  "imdbID": "tt1130884"
}
const movie3 = {
  "Poster": "https://m.media-amazon.com/images/M/MV5BYmRhZjkyMjEtNjRkMS00MDQ0LTg2NGMtMTQ3ZjE0NjJmMjM2L2ltYWdlXkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SX300.jpg",
  "Title": "13 Reasons Why",
  "Type": "series",
  "Year": "2017–2020",
  "imdbID": "tt1837492"
}
const movie4 = {
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjZkMjNkYzktM2ZiNC00ZWI1LTgwMjMtNjgzNDU5ZjQ5NzU2XkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX300.jpg",
"Title": "Space Sweepers",
"Type": "movie",
"Year": "2021",
"imdbID": "tt12838766"
}
const movie5 = {
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "Title": "Batman v Superman: Dawn of Justice",
  "Type": "movie",
  "Year": "2016",
  "imdbID": "tt2975590",
}
const movie6 = {
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",

  "Title": "Spider-Man",
  
  "Type": "movie",
  
  "Year": "2002",
  
  "imdbID": "tt0145487"
}


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTern, setSearchTern] = useState('');
  const seacrhMovies = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  }
  useEffect(() => {
    seacrhMovies('13 ');
  }, []);
  return(
    <div>
<header>
    <div className="header__container">
        <div className="header__title">
           Vilm 
        </div>
        <div className="search">
            <input onChange={(e) => setSearchTern(e.target.value)} type="text" />
            <img onClick={() => seacrhMovies(searchTern)} src={search} alt="" />
        </div>
    </div>
</header>
      <Hero/>
      <main className='main'>

      <section>
        <div className="one__title">
        <h2>Trending Movies</h2>
        </div>

      {movies?.length > 0 
        ? (
          <div className="Poster__container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
      </div>
        ) : (
          <div className='Poster__container'>
           {/* <h3 className='empty'>Not found</h3> */}
          <MovieCard movie={movie1} />
          <MovieCard movie={movie2} />
          <MovieCard movie={movie3} />
          <MovieCard movie={movie4} />
          <MovieCard movie={movie5} />
          <MovieCard movie={movie6} />
          </div>
        )
      }


      </section>


      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </main>
    </div>
  )
}

export default App;

