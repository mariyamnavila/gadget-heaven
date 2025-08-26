import {Helmet} from "react-helmet";
import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget | Gadget heaven</title>
            </Helmet>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;