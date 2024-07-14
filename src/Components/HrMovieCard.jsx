import React from 'react'

const HrMovieCard = ({list,index,genreId}) => {
    
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";
  return (
    <div className=' flex-shrink-0 flex gap-1  flex-col w-[200px] md:w-[300px] md:h-[250px] cursor-pointer hover:scale-90  transition duration-200'>
    <img
    className="w-[200px] flex-shrink-0 md:w-[300px]  md:h-[200px] rounded-lg border-2 border-gray-700 hover:border-white cursor-pointer"
    src={`${IMAGE_BASE_URL}${list.backdrop_path}`}
alt={`image no ${index} of ${genreId}`}
    srcSet=""
  />
  <h2 className=" text-[18px] font-semibold text-justify text-white ">{list.original_title.length>60?list.original_title.slice(0,60)+"...":list.original_title}</h2>
  </div>
  )
}

export default HrMovieCard