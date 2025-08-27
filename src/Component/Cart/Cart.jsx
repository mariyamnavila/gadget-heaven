import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getCartList } from "../GadgetDetails/storage";
import CartItem from "../CartItem/CartItem";
import success from '../../assets/Group.png';

const Cart = () => {
    const allGadget = useLoaderData();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate()
    let sum = 0;
    cart.forEach(cartItem => {
        sum += cartItem.price;
    });
    useEffect(() => {
        const getCart = getCartList();
        const actualCart = allGadget.filter(gadget => getCart.includes(gadget['product_id']));
        setCart(actualCart)
    }, [])
    const sortByPrice = () => {
        const sorted = [...cart].sort((a, b) => b.price - a.price);
        setCart(sorted);
    }
    const emptyCart = () => {
        const empty = [];
        setCart(empty);
        localStorage.removeItem('cart');
        navigate('/');
    }
    return (
        <div className="mb-52">
            <div className="flex justify-between items-center my-10 btn-disabled">
                <p className="text-2xl font-bold">Cart</p>
                <div className="flex items-center space-x-4">
                    <p className="text-2xl font-bold">Total cost: {sum}</p>
                    <button onClick={() => sortByPrice()} className="py-2 px-[2px] rounded-full bg-gradient-to-t from-pink-500 to-purple-600">
                        <span className="w-full p-2 rounded-full px-4 bg-white text-[#9036da]">Sort by Price</span>
                    </button>
                    <button
                        disabled={sum=== 0 }
                        // id="purchase"'disabled'
                        className="btn py-2 px-6 rounded-full bg-gradient-to-t from-pink-500 to-purple-600 text-white"
                        onClick={() => {
                            document.getElementById('my_modal_5').showModal()
                        }}
                    >
                        Purchase
                    </button>
                    <dialog id="my_modal_5" className="ml-0 m-0 modal modal-bottom sm:modal-middle ">
                        <div className="modal-box text-center w-[400px] ml-0 space-y-4">
                            <img className="mx-auto block mb-6 " src={success} alt="" />
                            <p className="text-2xl font-bold border-b pb-3">Payment Successfully</p>
                            <p className="text-[#6b6b6f]">Thanks for purchasing</p>
                            <p className="text-[#6b6b6f]">Total:{sum}</p>
                            <div className=" w-full">
                                <form method="dialog">
                                    <button onClick={() => { emptyCart() }} className="btn rounded-full bg-slate-200 w-full">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
            <div>
                {
                    cart.map((cartItem, idx) => <CartItem key={idx} cartItem={cartItem}></CartItem>)
                }
            </div>
        </div>
    );
};

export default Cart;