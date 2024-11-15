import { useDispatch, useSelector } from "react-redux";
import { FETCH_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      FETCH_OPTIONS
    );
    const json = await data.json();
    console.log("pop", json);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
