import React, { useRef } from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";
//import openAi from "../utils/openai";

const GptSearchBar = () => {
  const currLang = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    alert(
      "GPT is a paid feature! Please contact Prateek Chitransh to enable it. "
    );
    // const aiResult = await openAi.chat.completions.create({
    //   messages: [
    //     {
    //       role: "user",
    //       content:
    //         "ACT as a movie recommendation system and suggest some movies for the query " +
    //         searchText.current.value +
    //         ". Only give me names of 10 such movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Chake De, Koi Mil Gaya",
    //     },
    //   ],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(aiResult);
  };
  return (
    <div className="md:pt-[20%] pt-[50%]  flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12 py-4 rounded-lg"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={language[currLang].searchTextPlaceHolder}
          className="rounded-md p-4 mx-4 col-span-9 text-xs md:text-xl"
        />
        <button
          onClick={handleGptSearchClick}
          className="py-4 mx-2 col-span-3 text-white bg-red-500 rounded-md md:w-40 w-auto"
        >
          {language[currLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
