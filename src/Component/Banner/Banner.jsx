import { Link, NavLink } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import banner from '../../assets/banner.jpg';
const Banner = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/stats'}>Statistics</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
    </>
    return (
        <div>
            <div className="relative -top-24  border border-[rgba(149,56,226,0.48)] rounded-3xl mt-8">

                <div className="bg-[#9538e2] mx-2 my-2 border rounded-3xl">
                    <div className="max-w-7xl text-center text-white mx-auto space-y-6 pb-52">
                        <div className="navbar p-0 min-h-0">
                            <div className="navbar-start">
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h8m-8 6h16" />
                                        </svg>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        {links}
                                    </ul>
                                </div>
                                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                            </div>
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                    {links}
                                </ul>
                            </div>
                            <div className="navbar-end">
                                <a href='/dashboard' className="btn btn-circle bg-white mr-4 text-xl"><IoCartOutline /></a>
                                <a
                                    href='/dashboard'
                                    className="btn btn-circle bg-white"><FaRegHeart />
                                </a>
                            </div>
                        </div>
                        <h1 className="text-6xl font-bold w-[90%] mx-auto pt-12 ">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="w-2/3 mx-auto ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <Link to={'/dashboard'}><button className="btn rounded-full py-4 px-7 bg-white text-[#9538e2] mt-4 font-bold text-xl ">Shop Now</button></Link>

                    </div>
                </div>
            </div>
            <div className='relative -top-64 mx-auto max-w-5xl h-[563px] border-[16px] border-[#FFFFFF4D] outline outline-2 outline-offset-1 outline-white rounded-[32px]'>
                {/* absolute top-[430px] left-32 */}
                <img className='w-[1000px] h-[532px] rounded-[18px] object-center' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;