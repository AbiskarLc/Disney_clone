import React from "react";
import disney from "../assets/disney.png";
import marvel from "../assets/marvel.png";
import starwar from "../assets/starwar.png";
import pixar from "../assets/pixar.png";
import nationalG from "../assets/nationalG.png";
import disney_mp from "../assets/video/disney.mp4";
import marvel_mp from "../assets/video/marvel.mp4";
import pixar_mp from "../assets/video/pixar.mp4";
import starwar_mp from "../assets/video/star-wars.mp4";
import ng_mp from "../assets/video/national-geographic.mp4";

const Production = () => {
  const productionData = [
    {
      id: 1,
      image: disney,
      video: disney_mp,
    },
    {
      id: 2,
      image: pixar,
      video: pixar_mp,
    },
    {
      id: 3,
      image: marvel,
      video: marvel_mp,
    },
    {
      id: 4,
      image: starwar,
      video: starwar_mp,
    },
    {
      id: 5,
      image: nationalG,
      video: ng_mp,
    },
  ];
  return (
    <div className=" flex md:flex-row md:flex-wrap md:place-content-center mt-8 flex-col px-8 md:px-16 gap-10 md:gap-8">
      {productionData.map((ele, index) => {
        return (
          <div key={ele.id} className=" relative md:h-[auto] md:w-[250px]  border-2 rounded-xl cursor-pointer shadow-xl shadow-black border-gray-600 hover:border-white md:hover:scale-110 hover:scale-90 transition ease-in-out duration-150">
            <video
              src={ele.video}
              autoPlay
              loop
              muted
              playsInline
              className="opacity-0 w-full hover:opacity-70 rounded-xl  absolute top-0"
            />
           
            <img className=" w-full z-[1]" src={ele.image} alt={`${ele.image} image`} />
           
          </div>
        );
      })}
    </div>
  );
};

export default Production;
