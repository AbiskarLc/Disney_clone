import React from "react";
import genre from "../Constants/GenreConstant";
import MovieList from "./MovieList";

const GenreMoviesLists = () => {
  return (
    <div className=" mt-6 flex justify-start flex-col">
      {genre.map(
        (item, index) =>(
            <div key={item.id} className="flex flex-col gap-2 p-4 md:px-16">
              <h2 className=" text-xl md:text-2xl text-white font-semibold">
                {item.name}
              </h2>
              <div className=" flex items-center relative">
                  <MovieList genreId={item.id} index={index}/>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default GenreMoviesLists;
