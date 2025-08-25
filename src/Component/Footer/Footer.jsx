
const Footer = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16">
                <footer className="footer text-base-content border-base-300 border-b px-10 py-8">
                    <aside className=" mx-auto text-center">
                        <h3 className=" mx-auto text-center text-3xl font-bold">
                            Gadget Heaven
                        </h3>
                        <p className="text-[#6b6b6f]">
                            Leading the way in cutting-edge technology and innovation.
                        </p>
                    </aside>
                </footer>
                <footer className="footer sm:footer-horizontal text-base-content p-10 flex justify-center gap-48">
                    <nav className="text-[#6b6b6f]">
                        <h6 className="font-bold mx-auto text-black">Services</h6>
                        <a className="link link-hover mx-auto">Product Support</a>
                        <a className="link link-hover mx-auto">Order Tracking</a>
                        <a className="link link-hover mx-auto">Shipping & Delivery</a>
                        <a className="link link-hover mx-auto">Returns</a>
                    </nav>
                    <nav className="text-[#6b6b6f]">
                        <h6 className="font-bold mx-auto text-black">Company</h6>
                        <a className="link link-hover mx-auto">About us</a>
                        <a className="link link-hover mx-auto">Careers</a>
                        <a className="link link-hover mx-auto">Contact</a>
                    </nav>
                    <nav className="text-[#6b6b6f]">
                        <h6 className="font-bold mx-auto text-black">Legal</h6>
                        <a className="link link-hover mx-auto">Terms of use</a>
                        <a className="link link-hover mx-auto">Privacy policy</a>
                        <a className="link link-hover mx-auto">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;