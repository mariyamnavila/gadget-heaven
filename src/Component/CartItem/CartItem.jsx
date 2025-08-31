import { RxCrossCircled } from "react-icons/rx";
import { RemoveItemFromCart } from "../GadgetDetails/storage";

const CartItem = ({ cartItem, removeItem }) => {
    const {
        product_id,
        product_image,
        price,
        product_title,
        description
    } = cartItem
    return (
        <div className="bg-white p-8 rounded-2xl flex justify-between mb-6">
            <div className="flex items-center">
                <div>
                    <img className="w-52 h-32 rounded-xl mr-8" src={product_image} alt="" />
                </div>
                <div className="space-y-4">
                    <p className="text-2xl font-semibold">{product_title}</p>
                    <p className="text-xl text-[#6b6b6f]">{description}</p>
                    <p className="text-2xl font-semibold text-[#09080FCC]">Price: ${price}</p>
                </div>
            </div>
            <div onClick={() => {
                removeItem(product_id)
                RemoveItemFromCart(product_id)
            }}>
                <RxCrossCircled className="text-red-600 text-[36px]" />
            </div>
        </div>
    );
};

export default CartItem;