import {Helmet} from "react-helmet";
import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
// import { MyComponent } from "../MyComponent";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget | Gadget heaven</title>
            </Helmet>
            <Banner></Banner>
            <Gadgets></Gadgets>
            {/* <MyComponent /> */}
        </div>
    );
};

export default Home;