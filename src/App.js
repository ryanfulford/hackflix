import './index.css';

// import 2 pieces from router library to configure our routes within this app
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import MovieCatalogue from './MovieCatalogue';
import MovieInfo from './MovieInfo';

function App() {
  return (
    <div className="wrapper">
      {/* app consists of 3 components: header, movie catalogue, movie details (render when user selects movies) */}
      <Header />

      {/* define routing configuration (this is often done within the App component) */}
      {/* Step 1 - use Routes component to act as a parent contisner for all definied routes AKA defined URL paths */}
      <Routes>

        {/* Step 2 - define individual routes/URL paths which are available wihin your app, as well as the components which are visible at those paths */}
        {/* This is where you define which component is visible at what path */}
        <Route path="/" element={ <MovieCatalogue /> } />

        {/* MovieInfo component should be shown when the route looks like: homepage.com/movieIdHere */}
        <Route path="/:movieId" element={ <MovieInfo /> }/>

      </Routes>


      {/* MovieCatalogue component is only visible on the homepage */}
    </div>
  );
}

export default App;
