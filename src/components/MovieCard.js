import { MOVIE_POSTER_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-56 pr-8 shadow-slate-600 transform transition-transform duration-300 hover:scale-110">
      <img alt="movie-poster" src={MOVIE_POSTER_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
