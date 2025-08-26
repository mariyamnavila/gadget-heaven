import { useLoaderData } from "react-router-dom";
import Gadget from "../Gadget/Gadget";
import { useEffect, useState } from "react";
import './Gadget.css'
import NoInfo from "../NoInfo/NoInfo";
const Gadgets = () => {
    const allGadget = useLoaderData();
    const [gg, setGg] = useState([]);
    const [isActive, setIsActive] = useState(null);
    const handleClick = (e) => {
        setIsActive(e)
    }
    useEffect(() => {
        setGg(allGadget)
        setIsActive('all')
    }, [])
    const filtered = e => {
        if (e === 'all') {
            setGg(allGadget)
            handleClick(e)
        }
        else {
            const category = allGadget.filter(gadget => gadget.category === e)
            handleClick(e)
            setGg(category)
        }
    }
    const show = () => {
        console.log(gg);
        if (gg.length === 0) {
            return <NoInfo></NoInfo>
            
        }
        else {
            return <div className="grid grid-cols-3 gap-5">{ gg.map((gadget, idx) => <Gadget key={idx} gadget={gadget}></Gadget>) }</div>
        }
    }
    return (
        <div className="relative -top-36 max-w-7xl mx-auto ">
            {/* relative top-60 */}
            <h2 className="text-4xl font-bold text-center mb-12">Explore Cutting-Edge Gadgets</h2>
            <div className="flex items-start ">
                <div className="w-60 bg-white rounded-2xl p-6 mr-6">
                    <button
                        onClick={() => { filtered('all') }}
                        className={`btn rounded-full w-full mb-4 bg-[#f2f2f3] ${isActive === 'all' ? 'active' : ''}`}
                    >
                        All Product
                    </button>
                    <button
                        onClick={() => { filtered('Laptops') }}
                        className={`btn rounded-full w-full mb-4 bg-[#f2f2f3] ${isActive === 'Laptops' ? 'active' : ''}`}
                    >
                        Laptops
                    </button>
                    <button
                        onClick={() => { filtered('Smartphones') }}
                        className={`btn rounded-full w-full mb-4 bg-[#f2f2f3] ${isActive === 'Smartphones' ? 'active' : ''}`}
                    >
                        Smartphones
                    </button>
                    <button
                        onClick={() => { filtered('Headphones') }}
                        className={`btn rounded-full w-full mb-4 bg-[#f2f2f3] ${isActive === 'Headphones' ? 'active' : ''}`}
                    >
                        Headphones
                    </button>
                    <button
                        onClick={() => { filtered('Smartwatches') }}
                        className={`btn rounded-full w-full mb-4 bg-[#f2f2f3] ${isActive === 'Smartwatches' ? 'active' : ''}`}>
                        Smartwatches
                    </button>
                    <button
                        onClick={() => { filtered('Cameras') }}
                        className={`btn rounded-full w-full mb-4 bg-[#f2f2f3] ${isActive === 'Cameras' ? 'active' : ''
                            }`}
                    >
                        Cameras
                    </button>
                    <button
                        onClick={() => { filtered('Accessories') }}
                        className={`btn rounded-full w-full mb-4 bg-[#f2f2f3] ${isActive === 'Accessories' ? 'active' : ''} `}
                    >
                        Accessories
                    </button>
                </div>
                {/* <div className="grid grid-cols-3 gap-5"> */}
                    {
                        show()
                    }
                {/* </div> */}
            </div>
        </div>
    );
};

export default Gadgets;