const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-40 md:pt-96 px-12 w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="font-bold md:text-6xl text-white text-xs ">{title}</h1>
      <p className="md:py-6 md:w-1/2 text-white hidden md:inline-block">
        {overview}
      </p>
      <div className="flex my-2 md:my-0">
        <button className="bg-white text-black font-semibold md:py-2 md:px-12 px-2 rounded-md shadow-md hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-slate-rgba(24, 100, 171, 0.1) text-white py-2 px-12 rounded-md border-gray-500 border-2 shadow-md bg-opacity-50 hidden md:block">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
