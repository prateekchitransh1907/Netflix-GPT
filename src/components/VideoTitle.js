const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-96 px-12 w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl text-white ">{title}</h1>
      <p className="py-6 w-1/2 text-white">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black font-semibold py-2 px-12 rounded-md shadow-md hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-slate-rgba(24, 100, 171, 0.1) text-white py-2 px-12 rounded-md border-gray-500 border-2 shadow-md bg-opacity-50">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
