import React from "react";

const Banner = () => {
  return (
    <>
    <div className=" p-14">
      <div className='bg-yellow-200 flex justify-around items-center h-[500px]  bg-cover rounded-xl'>
        <div className="  flex flex-col float-start ">
          <h1 className="text-[60px] leading-10">Order your</h1>
          <h1 className="text-[60px]">favourite food here</h1>
          <p className="w-[550px] text-justify mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis accusantium ipsa unde fugit ad officiis reprehenderit, similique ipsum explicabo modi porro dolores accusamus corrupti neque voluptate? Harum, cum accusamus imilique ipsum explicabo modi porro dolores.
          </p>
          <button className="bg-white px-2 py-2 rounded-2xl w-32 mt-7 font-medium">View menu</button>
        </div>
        <div>
          <img src="src/assets/p3.png" alt="" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
