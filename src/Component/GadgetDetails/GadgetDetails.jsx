import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Helmet } from "react-helmet";

const GadgetDetails = () => {
    const { gadgetId } = useParams();
    const allGadget = useLoaderData();
    const selectedGadget = allGadget.find(gadget => gadget.product_id === gadgetId);
    const { product_title, product_image, price, description, Specification, availability, rating } = selectedGadget;
    return (
        <div >
            <Helmet>
                <title>Gadget Details | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538e2] text-center text-white pt-8 pb-60 space-y-4">
                <h2 className="font-bold text-4xl">Product Details</h2>
                <p className="w-2/3 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 flex relative -top-48">
                <div>
                    <img className="w-[425px] h-[505px] object-fill rounded-2xl mr-8" src={product_image} alt="" />
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold text-3xl">{product_title}</h4>
                    <p className="font-semibold text-xl">Price:${price}</p>
                    <div className="bg-[#309C081A] text-[#309C08] rounded-full border border-[#309C08] px-4 py-2 w-[87px]">
                        <p
                            className="text-[14px] font-medium "
                        >
                            {availability === true ? 'In Stock' : 'Out of stock'}
                        </p>
                    </div>
                    <p className="text-xl text-[#09080F99]">{description}</p>
                    <p className="font-bold text-xl">Specification:</p>
                    <div>
                        {
                            Specification.map((feature, idx) => <p key={idx} className="text-[#09080F99] text-xl">
                                {idx + 1}. {feature}</p>)
                        }
                    </div>
                    <p className="text-xl font-semibold">Rating ⭐ </p>
                    <div className="flex items-center">
                        <Rating
                        className="mr-4"
                            initialRating={rating}
                            readonly
                            emptySymbol={<MdOutlineStarBorder className="text-[#f9c004] text-3xl" />}
                            fullSymbol={<MdOutlineStarPurple500 className="text-[#f9c004] text-3xl" />}
                        />
                        <div className="bg-slate-300 py-2 px-4 rounded-full">
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="bg-[#9036da] text-[18px] font-bold text-white btn rounded-full mr-4">Add to Card <IoCartOutline className="text-2xl"/></button>
                        <a className="btn p-3 rounded-full bg-white"><FaRegHeart className="text-xl"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;