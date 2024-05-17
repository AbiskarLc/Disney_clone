import React, { useContext, useEffect, useRef, useState } from "react";
import { stateContext } from "../Context/stateContext";
import axios from "axios";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import HrMovieCard from "./HrMovieCard";
import VrMovieCard from "./VrMovieCard";

const MovieList = ({ genreId, index }) => {
  const [lists, setLists] = useState([]);
  const imgRef = useRef(null);
  const screenWidth = window.innerWidth;
  const { apiKey, movieByGenreBaseURL } = useContext(stateContext);
  const getGenreData = async () => {
    try {
      const response = await axios.get(
        `${movieByGenreBaseURL}${apiKey}&with_genres=${genreId}`
      );

      if (response.data) {
        setLists(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenreData();
  }, []);

  return (
    <>
      <div>
        <HiOutlineChevronLeft
          className="hidden md:block  text-[35px] absolute left-2  z-10 text-white cursor-pointer"
          onClick={() => (imgRef.current.scrollLeft -= screenWidth)}
        />
      </div>
      <div
        ref={imgRef}
        className=" flex overflow-x-auto gap-5  scrollbar-none scroll-smooth p-2"
      >
        {lists.map((list, ind) =>
          index % 3 === 0 ? (
            <VrMovieCard list={list} index={ind} genreId={genreId} />
          ) : (
            <HrMovieCard list={list} index={ind} genreId={genreId} />
          )
        )}
      </div>

      <div>
        <HiOutlineChevronRight
          className="hidden md:block  text-[30px] absolute right-2  z-10 text-white cursor-pointer"
          onClick={() => (imgRef.current.scrollLeft += screenWidth)}
        />
      </div>
    </>
  );
};

export default MovieList;
