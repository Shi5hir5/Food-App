// import React from "react";
// import { IoMdCloseCircle } from "react-icons/io";
// import CartItem from "./CartItem";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// const Cart = () => {

//   const [activeCart, setActiveCart]= useState(true)

//   const cartItems = useSelector((state) =>state.cart.cart);

//   return (
//     <>
//       <div className={`fixed right-0 top-0 w-[20vw] h-full bg-white p-5 ${activeCart ? "translate-x-0": "translate-x-full"} transition-all duration-500 z-50`}>
//         <div className="flex justify-between items-center my-3">
//           <span className="text-xl font-semibold">My order</span>
//           <IoMdCloseCircle  onClick={()=>setActiveCart(!activeCart)}className="text-2xl cursor-pointer" />
//         </div>
//         <CartItem/>

//         <div className="absolute bottom-0">
//         <h3 className="font-medium text-gray-800">Items:</h3>
//         <h3 className="font-medium text-gray-800">Total Amount:</h3>
//         <hr className="w-[20vw] lg:w-[18vw] my-2"/>
//         <button className="bg-green-500 text-white font-medium  px-3 py-2 rounded-lg w-[20vw] lg:w-[18vw] mb-5">Checkout </button>
//       </div>
//       </div>
      
//     </>
//   );
// };

// export default Cart;
