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
const AddToCart = (id, price) => {
    const storedList = getCartList();
    const objects = storedList.map(object => object.id)
    if (objects.includes(id)) {
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
        let sum = 0;
        storedList.forEach(cartItem => {
            sum += cartItem.price;
        });
        console.log(sum);
        if (sum > 10000) {
            toast.error('Cart is Full', {
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
            storedList.push({ "id": id, "price": price });
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
}

const RemoveItemFromCart = (id) => {
    const storedList = getCartList();
    console.log(storedList);
    const removed = storedList?.filter(gadget => gadget.id !== id);
    console.log(removed);
    localStorage.setItem('cart', removed);
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

const RemoveItem = (id) => {
    const storedWishList = getWishList();
    console.log(storedWishList);
    const removed = storedWishList?.filter(gadget => gadget !== id);
    console.log(removed);
    localStorage.setItem('wishlist', removed);
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

export {
    AddToCart,
    AddToWishlist,
    getCartList,
    getWishList,
    RemoveItem,
    RemoveItemFromCart
}
