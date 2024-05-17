import React from "react";

const HeaderItems = ({menu}) => {
  return (
    <div className=" flex  text-white hover:underline items-center  gap-1">
      <menu.icon className=" text-[24px]  md:text-xl hover:border-b-2 md:hover:border-none"/>
      <p className="hidden md:block  md:text-sm">{menu.name.toUpperCase()}</p>
    </div>
  );
};

export default HeaderItems;
