import { toast } from "react-toastify";

const getCartList = () => {
    const storedListStr = localStorage.getItem('cart');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList
    } else {
        return []
    }
}
const AddToCart = (id) => {
    const storedList = getCartList();
    if (storedList.includes(id)) {
        toast.error('This product is already added to Cart', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        })
    } else {

        if (storedList) {
            console.log(storedList);
        } else {
            console.log('no storedlist found');
        }
        storedList.push(id );
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart', storedListStr)
        toast.success('This product is added to cart', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }
}


const getWishList = () => {
    const storedWishListStr = localStorage.getItem('wishlist');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr)
        return storedWishList
    } else {
        return []
    }
}

const AddToWishlist = (id) => {
    const storedWishList = getWishList();
    if (storedWishList.includes(id)) {
        toast.error('This product is already added to Wishlist', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        })
    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wishlist', storedWishListStr);
        toast.success('This product is added to Wishlist', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }
}

export { AddToCart, AddToWishlist, getCartList, getWishList }
