import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/Slices/CartSlice';

const FoodCard = ({id,name,price,img,description,rating,category}) => {

  const dispatch = useDispatch();
  return (
    <div className='w-[250px] bg-white p-5 my- ml-9 flex flex-col gap-2 rounded-xl shadow-lg shadow-black]'>
      <img src={img} alt="img" className='w-auto h-[130px]'/>
      <div className='flex justify-between'>
        <h1 className='font-medium'>{name}</h1>
        <span className='text-red-500 font-semibold'>Rs.{price}</span>
      </div>
      <p className='text-sm font-normal'>{description.slice(0,50)}...</p>
      <div className='flex justify-between items-center'>
        <span className='flex items-center'><AiFillStar className='mr-1 text-yellow-500' /> {rating}
        </span>
        <button onClick={()=>dispatch(addItem({id,name,price,img,rating}))} className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to cart </button>
      </div>
    </div>
  )
}

export default FoodCard