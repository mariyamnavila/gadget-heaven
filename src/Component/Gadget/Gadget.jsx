import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
    const { product_id,product_image, price, product_title } = gadget
    return (
        <div className="p-5 rounded-2xl bg-white space-y-2">
            <img className="rounded-xl w-[280px] h-[180px] object-cover" src={product_image} alt="" />
            <p className="text-2xl font-semibold">{product_title}</p>
            <p className="text-[#6b6b6f] text-xl">Price: {price}$</p>
            <Link to={`/gadget/${product_id}`}>
                <button className="mt-3 py-2 px-[2px] rounded-full bg-gradient-to-t from-pink-500 to-purple-600">
                    <span className="w-full p-2 rounded-full px-4 bg-white text-[#9036da]"> View Details</span>
                </button>
            </Link>
        </div>
    );
};

export default Gadget;