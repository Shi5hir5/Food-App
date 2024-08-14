import React from 'react'

const CategoryMenu = () => {
  return (
    <div>
        <h1 className='text-3xl font-medium ml-16'>Find the best food</h1>
        <div className=" ml-16 mt-10 *:mx-2">
          <button className='py-3 px-3 bg-gray-300 rounded-lg hover:bg-green-600 hover:text-white font-bold '>All</button>
          <button className='py-3 px-3 bg-gray-300 rounded-lg hover:bg-green-600 hover:text-white font-bold '>Breakfast</button>
          <button className='py-3 px-3 bg-gray-300 rounded-lg hover:bg-green-600 hover:text-white font-bold '>Lunch</button>
          <button className='py-3 px-3 bg-gray-300 rounded-lg hover:bg-green-600 hover:text-white font-bold '>Snacks</button>
          <button className='py-3 px-3 bg-gray-300 rounded-lg hover:bg-green-600 hover:text-white font-bold '>Dinner</button>
        </div>
    </div>
  )
}

export default CategoryMenu