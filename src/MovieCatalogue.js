// 1. import Axios library
import axios from 'axios';

// 2. import useState Hook
import { useEffect, useState } from 'react';

// want to use movie id which is in URL (at which this compnent renders) within our axios call to grab information from a URL (when using Router) we can use the useParams Hook
// import { useParams } from 'react-router-dom';

// to recreate behaviour of an anchor with added benefit/logic of React Router use the Link component
import{ Link } from 'react-router-dom';

function MovieCatalogue() {

  console.log('catalogue has rendered');

// 3. initialize state to keep track of the movie data which will be returned from the API
const [ movies, setMovies ] = useState( [] )

// 4. initialize useEffect to run the side effect of fetching data from movie API (this side effect runs a single time on page load)
useEffect( function() {

  console.log('side effect running')
  
  // 5. make asynchronous request to the TMDB API
  axios({
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      api_key: '4fd586fd71ff24a0a7664b064ce3fd46',
      include_adult: false
    }
  }).then( function(showMeTheMovies) {

    console.log(showMeTheMovies);

    // 6. save returned data within state
    setMovies(showMeTheMovies.data.results);
  })
  
}, [] );

  return (
    <section>
      <h2>Here are your viewing options:</h2>


      <ul className="catalogue">
      {/* 7. map through state and return a movie for each movie present in the returned API data */}

      {
        movies.map(function(movie) {
          return (
            // We want posters to be clickable and navigate to a unique URL to represent each specific movie
            <Link to={`${movie.id}`} key={movie.id}>
              <li>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`A poster for the movie ${movie.title}`} />
              </li>
            </Link>
          )
        })

      }

      </ul>

    </section>


  )
}

export default MovieCatalogue