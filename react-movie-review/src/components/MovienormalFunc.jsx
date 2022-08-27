import '../App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";



function MovienormalFunc() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      axios
        .get("https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=AgcJPGDHmMKVzoVFwDxsflVdSEQMuqtv")
        .then((moviedata) => {
          setMovies(moviedata.data.results);
          return(moviedata.results);
        })
        .catch((err) => {
          return(err);
        });
    }, []);
  return (
    <>
        {movies.map((movie, id) => {
			return (
				<div key={movie.id} className='d-format'>
                    <h4>Byline: <span>{movie.byline}</span></h4> 
                    <h4>Critics Pick: <span>{movie.critics_pick}</span></h4> 
                    <h4>Title: <span>{movie.display_title}</span></h4> 
                    <h4>Headline: <span>{movie.headline}</span></h4> 
                    <h4>Multimedia:<span><img src={movie.multimedia?.src} alt="" /></span></h4>
                </div>
			);
		})}
    </>
  )
}

export default MovienormalFunc;