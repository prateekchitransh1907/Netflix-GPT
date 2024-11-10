import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MovieContainer from "./MovieContainer";
import MovieListContainer from "./MovieListContainer";
const Browse = () => {
  //fetch data from TMDB and update store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MovieContainer />
      <MovieListContainer />
      {/**
         Movie Container 
           - Plays a movie trailer 
           - Has a Title, info and play button 
         Movie List Container 
            - has movie list X N
            - has movie cards X M
         */}
    </div>
  );
};

export default Browse;
