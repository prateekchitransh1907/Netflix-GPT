import { useEffect } from "react";
import { FETCH_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      FETCH_OPTIONS
    );
    const json = await data.json();
    const movieTrailer = json.results.filter((clip) => clip.type === "Trailer");
    const officialTrailer =
      movieTrailer.length === 0 ? json.results[0] : movieTrailer[0];
    dispatch(addTrailerVideos(officialTrailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
