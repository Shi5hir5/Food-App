import React from "react";
import { IoMdCart } from "react-icons/io";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  return (
    <>
      <div className="bg-yellow-100 ">
        <nav className=" text-xl flex flex-col lg:flex-row justify-between  items-center py-3 px-14">
          <div>
            <img src="src/assets/logo.png" alt="" className="w-10" />
          </div>

          <div>
            <input
              type="search"
              placeholder="Search here... "
              className=" border border-gray-400  rounded-lg outline-none px-2 py-1 "
            />
          </div>
          <div className="flex items-center text-2xl font-medium cursor-pointer ">
            <IoMdCart onClick={() => setActiveCart(!activeCart)} size={40} />

            {activeCart ? (
              <div className="fixed right-0 top-0 w-[20vw] h-full bg-white p-5  translate-x-0 transition-all duration-500 z-50">
                <div className="flex justify-between items-center my-3">
                  <span className="text-xl font-semibold">My order</span>
                  <IoMdCloseCircle
                    onClick={() => setActiveCart(!activeCart)}
                    className="text-2xl cursor-pointer"
                  />
                </div>
                {cartItems.length > 0 ? cartItems.map((item) => {
                  return (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      img={item.img}
                    />
                  );
                }): <h2 className="text-center text-red-500 text-3xl flex items-center h-[500px]">Your cart is empty!!</h2>}

                <div className="absolute bottom-0">
                  <h3 className="font-medium text-gray-800">Items:</h3>
                  <h3 className="font-medium text-gray-800">Total Amount:</h3>
                  <hr className="w-[20vw] lg:w-[18vw] my-2" />
                  <button className="bg-green-500 text-white font-medium  px-3 py-2 rounded-lg w-[20vw] lg:w-[18vw] mb-5">
                    Checkout
                  </button>
                </div>
              </div>
            ) : (
              " "
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
