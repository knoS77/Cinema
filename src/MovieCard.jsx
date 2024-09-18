import React from "react";

const MovieCard = ( {movie} ) => {
    return(
        <div>
            <div className="Poster">
    <div className="Poster__img">
            
              <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300' } alt={movie.Title} />

          </div>
          <div className="Poster__title">
              {movie.Title}
          </div>
          <div className="Poster__year">
              {movie.Year}
          </div>
    </div>
        </div>
    )
}
export default MovieCard;