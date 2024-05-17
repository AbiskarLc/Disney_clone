import React from "react";
// md:w-[300px] md:h-[400px] border-2 border-gray-700 hover:border-white w-[150px] h-[200px] rounded-lg object-cover
const VrMovieCard = ({ list, index, genreId }) => {
    console.log(list)
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";
  return (
    <div className=" flex-shrink-0 flex flex-col gap-1 md:w-[300px] md:h-[400px] w-[150px] h-[250px]  cursor-pointer hover:scale-90 transition-all duration-150">
    <img
      className=" md:w-[300px] flex-shrink-0 md:h-[350px] border-2 border-gray-700 hover:border-white w-[150px] h-[200px] rounded-lg object-cover"
      src={`${IMAGE_BASE_URL}${list.backdrop_path}`}
      alt=""
    />
    <h2 className=" text-sm md:text-lg font-semibold text-justify text-white ">{list.original_title}</h2>
    </div>
  );
};

export default VrMovieCard;
