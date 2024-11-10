import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex my-2">
          {movies?.map((movie, i) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
