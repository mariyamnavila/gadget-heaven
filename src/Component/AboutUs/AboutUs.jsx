import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const AboutUs = () => {
    const allBrand = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>About Us | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538e2] text-center text-white pt-8 pb-8 space-y-4">
                <h2 className="font-bold text-4xl">About Us</h2>
                <p className="w-2/3 mx-auto"><span className="font-bold">Gadget Heaven</span> is an online hub for the latest and most innovative tech products, where gadget enthusiasts can explore, compare, and shop for a wide variety of devices. From laptops, smartphones, and cameras to headphones, smartwatches, and accessories, Gadget Heaven brings together premium technology with detailed specifications and reviews to help customers make smarter choices.</p>
                <p className="font-semibold text-2xl">Brands We have</p>
                <div>
                    {
                        allBrand.map((brand, idx) => <p key={idx} className="btn btn-active bg-[] rounded-ss-lg rounded-ee-lg rounded-none text-[#9538e2] font-bold mr-3">{brand.brand}</p>)
                    }
                </div>
            </div>
            <div className="max-w-5xl mx-auto my-16 ">
                 <h4 className="font-bold text-3xl text-center mb-7">Frequently Asked Questions (FAQ)</h4>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What type of products does Gadget Heaven offer?</div>
                    <div className="collapse-content">
                        <p>We feature a wide range of gadgets including laptops, smartphones, headphones, cameras, smartwatches, and other accessories.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Are the products on Gadget Heaven authentic?</div>
                    <div className="collapse-content">
                        <p>Yes, we ensure that all products listed are genuine and come from trusted brands or verified sellers.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Does Gadget Heaven provide product reviews?</div>
                    <div className="collapse-content">
                        <p>Absolutely! Each product includes specifications, descriptions, and ratings to help you make informed decisions.</p>
                    </div>
                </div><div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Can I compare gadgets before buying?</div>
                    <div className="collapse-content">
                        <p>Yes, our comparison feature allows you to evaluate multiple products side by side.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How often is Gadget Heaven updated with new products?</div>
                    <div className="collapse-content">
                        <p>We regularly update our catalog with the latest gadgets and trending tech releases.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Is there customer support available?</div>
                    <div className="collapse-content">
                        <p>Yes, our support team is available to assist you with any questions or issues regarding products or services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;