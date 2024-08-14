import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/Slices/CartSlice";

const CartItem = ({id,name,price,img}) => {

  const dispatch = useDispatch(); 

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete onClick={()=>dispatch(removeItem({id,img,name,price}))} className="absolute right-7 text-gray-700"/>
      <img
        src={img}
        alt="image"
        className="w-[50px] h-[50px]"
      />
      <div className="">
        <h6 className="font-semibold text-lg w-[250px] text-gray-800">{name} </h6>
        
        <div className="flex justify-between ">
          <span className="text-red-600 font-semibold">Rs.{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FaPlus
              className="border text-gray-600 hover:text-white hover:bg-green-600 p-1 rounded-sm"
              size={20}
            />
            <span>1</span>
            <FaMinus
              className="border text-gray-600 hover:text-white hover:bg-green-600 p-1"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
