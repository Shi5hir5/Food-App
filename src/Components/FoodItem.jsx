import React from 'react'
import FoodCard from './FoodCard';
import FoodData from '../Data/FoodData';

const FoodItem = () => {
  return (
    <div className='flex justify-center flex-wrap  lg:justify-start gap-10 ml-10 my-10'>
      {FoodData.map((item)=>{
        return <FoodCard key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} description={item.desc} rating={item.rating} category={item.category}/>       })}
     

    </div>
  )
}

export default FoodItem;