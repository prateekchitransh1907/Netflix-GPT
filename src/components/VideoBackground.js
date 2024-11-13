import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies);
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer.trailerVideos?.key +
          "?autoplay=1&loop=1&controls=0&vq=hd720&rel=0&showInfo=0"
        }
        title="YouTube video player"
        allow="autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
