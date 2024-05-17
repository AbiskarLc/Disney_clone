import React, { useState } from "react";
import logo from "../assets/disney_logo.png";
import profile from "../assets/profile.jpg"
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";
import DropdownItems from "./DropdownItems";
const Navbar = () => {


  const [toggleMenu,setToggleMenu] = useState(false);
  
  const menuItems = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WatchList",
      icon: HiPlus,
    },
    {
      name: "originals",
      icon: HiStar,
    },
    {
      name: "movies",
      icon: HiPlayCircle,
    },
    {
      name: "series",
      icon: HiTv,
    },
  ];
  return (
    <nav className="flex items-center gap-4    mx-auto bg-gray-800 p-2 shadow-lg">
      <div>
        <img
          src={logo}
          className="w-[100px] h-[60px] object-cover md:w-[115px] rounded-md"
          alt="logo image of Disney"
          srcSet=""
        />
      </div>
      <div className="flex flex-1 gap-5 justify-between">
      <div className="md:flex hidden gap-3 cursor-pointer ">
        {menuItems.map((menu, index) => {
          return <HeaderItems key={index} menu={menu} />;
        })}
      </div>
      <div className="md:hidden flex gap-1 cursor-pointer"> 
  {
      menuItems.map((menu,index)=> index<3 && (
       <HeaderItems key={index} menu={menu}/>
      ))
  }
       <div className=" flex  text-white hover:underline items-center text-[18px] gap-1">
      <HiDotsVertical className=" text-2xl " onClick={()=> setToggleMenu(toggleMenu?false:true)}/>
      <div className={toggleMenu?"text-white md:hidden flex flex-col gap-2 shadow-lg rounded-lg bg-black absolute top-[80px] left-[220px] p-2 border-2 border-transparent":"hidden"}>
    {
          toggleMenu && 
          menuItems.map((menu,index)=>index>=3 &&(
            <DropdownItems key={index} menu={menu}/>
          ))
        }
    </div>
      </div>
        
       
      </div>
      <img src={profile} className="w-[50px] h-[50px] cursor-pointer rounded-full" alt="profile Image" />
      </div>
    </nav>
   
    
  );
};

export default Navbar;
