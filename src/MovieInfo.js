// import axios to make async request
import axios from 'axios';

// import useState and useEffect
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function MovieInfo () {

  // call the useParams Hook and log it out
  // console.log( useParams() );

  // call useParams Hook and extract movieId property from within the params object
  const {movieId: movie_id} = useParams();

  // initialize state to represent the movie details which will be returned to us from the API
  const [details, setDetails] = useState( {} );

  // define a side effect which will fetch data about movie after component renders
  useEffect( function() {

    // use axios to make a request to the movie id endpoint 
    axios({
      url: `https://api.themoviedb.org/3/movie/${movie_id}`,
      params: {
        api_key: '4fd586fd71ff24a0a7664b064ce3fd46',
      }
    }).then( function(movieInfo) {
      console.log(movieInfo);

      // use the API data and update state
      setDetails(movieInfo.data)
    })
    // specify the side effect should only run one time after component has rendered with dependency array
    }, []);

  return (
    <section className="poster">
      <div className='description'>
        {/* render movie tagline, summary, and title */}
        <h3>{details.tagline}</h3>
        <h2>{details.title}</h2>
        <p>{details.overview}</p>
      </div>
      <div className='poster-image'>
        {/* render the movie poster */}
        <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={`A poster for the movie ${details.title}`} />
      </div>
    </section>
  )
}

export default MovieInfo;