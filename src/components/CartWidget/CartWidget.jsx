import React, { useContext } from 'react'
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {

   const { productQuantity } = useContext(CartContext);
   console.log(productQuantity);

   return (
      <div className="flex items-center w-fit relative cursor-pointer group">
         <div className=" transition-all ease-in-out duration-500 flex justify-center items-center bg-red-700 rounded-full w-6 h-6 absolute top-7 left-5 group-hover:scale-150">
            <span className=" text-white font-bold">{ productQuantity }</span>
         </div>
         <img src="./images/cart.png" alt="cart" />
      </div>
   )
}

export default CartWidget