import { RxCrossCircled } from "react-icons/rx";

const CartItem = ({ cartItem }) => {
    const { product_image, price, product_title, description } = cartItem
    return (
        <div className="bg-white p-8 rounded-2xl flex justify-between items-center mb-6">
            <div className="flex items-center">
                <div>
                    <img className="w-52 h-32 rounded-xl mr-8" src={product_image} alt="" />
                </div>
                <div className="space-y-4">
                    <p className="text-2xl font-semibold">{product_title}</p>
                    <p className="text-xl text-[#6b6b6f]">{description}</p>
                    <p className="text-2xl font-semibold">Price: ${price}</p>
                </div>
            </div>
            <div>
                <RxCrossCircled className="text-red-600 text-[36px]" />
            </div>
        </div>
    );
};

export default CartItem;