import { RxCrossCircled } from "react-icons/rx";
import { AddToCart } from "../GadgetDetails/storage";

const WishListItem = ({ wishListItem, removeAfterAddToCart, removeItem }) => {
    const {
        product_id,
        product_image,
        price,
        product_title,
        description
    } = wishListItem;
    return (
        <div className="bg-white p-8 rounded-2xl flex justify-between items-center mb-6">
            <div className="flex items-center">
                <div>
                    <img className="w-[274px] h-[192px] rounded-xl mr-8" src={product_image} alt="" />
                </div>
                <div className="space-y-4">
                    <p className="text-2xl font-semibold">{product_title}</p>
                    <p className="text-xl text-[#6b6b6f]"><span className="text-black  font-semibold">Description: </span>{description}</p>
                    <p className="text-2xl font-semibold">Price: ${price}</p>
                    <button onClick={() => { AddToCart(product_id), removeAfterAddToCart(product_id) }} className="py-3 px-6 bg-[#9036da] text-white text-xl rounded-full">Add to Cart</button>
                </div>
            </div>
            <div onClick={() => removeItem(product_id)}>
                <RxCrossCircled className="text-red-600 text-[36px]" />
            </div>
        </div>
    );
};

export default WishListItem;