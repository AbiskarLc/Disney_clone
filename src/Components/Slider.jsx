import React, { useContext, useEffect, useRef, useState } from 'react'
import { stateContext } from '../Context/stateContext'
import { HiOutlineChevronRight,HiOutlineChevronLeft } from "react-icons/hi";
import axios from 'axios';

const Slider = () => {


  const screenWidth = window.innerWidth;
  const  slideRef = useRef();
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";
  const {movieBaseURL,apiKey} = useContext(stateContext);
  const [movieList,setMovieLists] = useState([]);
  const getTrendingData = async () =>{

    try {
      
      const response = await axios.get(movieBaseURL+`/trending/all/day?api_key=${apiKey}`);

      if(response.data){

        setMovieLists(response.data.results);
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
 getTrendingData();
  },[])
  return (
    <div className='flex items-center px-4 justify-between'>
      <HiOutlineChevronLeft className='hidden md:block  text-[30px] text-white cursor-pointer' onClick={()=>{
        slideRef.current.scrollLeft -= screenWidth -150     }}/>
    <div className='flex scrollbar-none px-4 gap-10 overflow-x-auto scroll-smooth w-full md:px-12 py-4' ref={slideRef}>
      
       {
        movieList.map((list,index)=>{

          return <img key={index} className='min-w-full md:h-[350px] object-cover border-transparent border-2 cursor-pointer transition-all hover:border-white  object-left-top rounded-lg' src={`${IMAGE_BASE_URL}${list.backdrop_path}`} alt="" srcSet="" />
          
          
        })
       }
       
    </div>
    <HiOutlineChevronRight className='hidden md:block  text-[30px] text-white cursor-pointer'  onClick={()=>{ slideRef.current.scrollLeft += screenWidth-150}}/>
    </div>
  )
}

export default Slider