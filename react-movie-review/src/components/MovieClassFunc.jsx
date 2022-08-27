import '../App.css';
import React, { Component } from 'react';


class MovieClassFunc extends Component {
    constructor(props) {
		super();
		this.state = { movies: [] };
	}

  componentDidMount() {
		fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=AgcJPGDHmMKVzoVFwDxsflVdSEQMuqtv")
        .then((response) => {
            response.json()
            .then((moviedata) => {
            this.setState({ movies: moviedata.results});
                console.log(moviedata);
            });
        })

        .catch((error) => {
            console.log(error);
        });
	}
  render() {
    return (
      <>
         {this.state.movies.map((movie, id) => {
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
}

export default MovieClassFunc;
