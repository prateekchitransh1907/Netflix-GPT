import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute">
        <img className="-z-10" src={BG_IMG} alt="netflix-background" />
      </div>
      <div className="relative">
        <GptSearchBar />
        <GptSearchResults />
      </div>
    </div>
  );
};

export default GptSearch;
