import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCartList } from "../GadgetDetails/storage";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const allGadget = useLoaderData();
    const [cart,setCart ] = useState([])
     useEffect(()=>{
        const getCart = getCartList();
        const actualCart = allGadget.filter(gadget=> getCart.includes(gadget['product_id']));
        setCart(actualCart)
    },[])
    let sum = 0;
    cart.forEach(cartItem => {
        sum += cartItem.price;
    });
    return (
        <div className="mb-52">
            <div className="flex justify-between items-center my-10">
                <p className="text-2xl font-bold">Cart</p>
                <div className="flex items-center space-x-4">
                    <p className="text-2xl font-bold">Total cost: { sum }</p>
                    <button className="py-2 px-[2px] rounded-full bg-gradient-to-t from-pink-500 to-purple-600">
                        <span className="w-full p-2 rounded-full px-4 bg-white text-[#9036da]">Sort by Price</span>
                    </button>
                    <button className="py-2 px-6 rounded-full bg-gradient-to-t from-pink-500 to-purple-600 text-white">Purchase</button>
                </div>
            </div>
            <div>
                {
                    cart.map((cartItem,idx)=><CartItem key={idx} cartItem={cartItem}></CartItem>)
                }
            </div>
        </div>
    );
};

export default Cart;