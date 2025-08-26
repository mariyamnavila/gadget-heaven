import { useState } from "react";
import { Helmet } from "react-helmet";
import './Dashboard.css'
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
const Dashboard = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538e2] text-center text-white pt-8 pb-8 space-y-4">
                <h2 className="font-bold text-4xl">Dashboard</h2>
                <p className="w-2/3 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div id="dash" >
                    <button onClick={() => { handleClick() }} className={`py-4 px-16 text-xl border border-white bg-[#9538e2] rounded-full mr-6 ${isActive ? '' : 'active'}`}>Cart</button>
                    <button onClick={() => { handleClick() }} className={`py-4 px-16 text-xl border border-white bg-[#9538e2] rounded-full ${isActive ? 'active' : ''}`}>Wishlist</button>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                {
                    isActive ? <Wishlist></Wishlist> : <Cart />
                }
            </div>
        </div>
    );
};

export default Dashboard;