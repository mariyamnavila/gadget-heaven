import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishList } from "../GadgetDetails/storage";
import WishListItem from "../WishListItem/WishListItem";
const Wishlist = () => {
    const allGadget = useLoaderData();
    const [wishlist,setWishList ] = useState([])
     useEffect(()=>{
        const WishList = getWishList();
        const actualWishList = allGadget.filter(gadget=> WishList.includes(gadget['product_id']));
        setWishList(actualWishList)
    },[])
    return (
        <div className="mb-52">
            <div className="flex justify-between items-center my-10">
                <p className="text-2xl font-bold">WishList</p>
            </div>
            <div>
                {
                    wishlist.map((wishListItem,idx)=><WishListItem key={idx} wishListItem={wishListItem}></WishListItem>)
                }
            </div>
        </div>
    );
};

export default Wishlist;