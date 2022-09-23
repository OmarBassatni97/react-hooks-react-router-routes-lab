import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    { movies.map((movie,i) => {
      return (
        <div key={i}>
          <h3>Name: {movie.title}</h3>
          <p>Time:{movie.time}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre,i) => {
              return(
                <li key={i}>{genre}</li>
              )
            })}
          </ul>
        </div>
      )
    })}
    </div>;
}

export default Movies;
