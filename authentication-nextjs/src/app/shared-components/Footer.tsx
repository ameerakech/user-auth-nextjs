import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaGooglePlay,
    FaApple,
} from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi2";


const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-6 md:px-0">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">

                <div className="flex-1 min-w-[250px]">
                    <h2 className="text-3xl font-semibold mb-6">Exclusive</h2>
                    <h3 className="text-2xl font-medium mb-4">Subscribe</h3>
                    <p className="mb-4 text-lg">Get 10% off your first order</p>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent border border-white rounded-md py-3 px-5 text-lg flex-1 outline-none placeholder:text-neutral-400"
                        />
                        <button
                            type="submit"
                            className="ml-[-44px] flex items-center text-white"
                            aria-label="Subscribe"
                        >
                            <HiOutlinePaperAirplane size={32} />
                        </button>
                    </form>
                </div>

                <div className="flex-1 min-w-[200px]">
                    <h3 className="text-2xl font-medium mb-6">Support</h3>
                    <address className="not-italic mb-4 text-1xl leading-relaxed">
                        111 Bijoy sarani, Dhaka,<br />
                        DH 1515, Bangladesh.
                    </address>
                    <p className="mb-2 text-1xl">exclusive@gmail.com</p>
                    <p className="text-1xl">+88015-88888-9999</p>
                </div>

                <div className="flex-1 min-w-[150px]">
                    <h3 className="text-2xl font-medium mb-6">Account</h3>
                    <ul className="space-y-3 text-1xl">
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Login / Register</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </div>

                <div className="flex-1 min-w-[150px]">
                    <h3 className="text-2xl font-medium mb-6">Quick Link</h3>
                    <ul className="space-y-3 text-1xl">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="flex-1 min-w-[250px]">
                    <h3 className="text-2xl font-medium mb-6">Download App</h3>
                    <p className="mb-3 text-lg">Save $3 with App New User Only</p>
                    <div className="flex gap-2 items-center mb-4">

                        <div>
                            <span className="text-white text-xs">QR</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="flex items-center border rounded px-2 py-1 gap-1 hover:bg-gray-700">
                                <FaGooglePlay size={24} />
                                <span className="text-lg">Google Play</span>
                            </a>
                            <a href="#" className="flex items-center border rounded px-2 py-1 gap-1 hover:bg-gray-700">
                                <FaApple size={24} />
                                <span className="text-lg">App Store</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-6 text-2xl">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white border-opacity-25 text-center ">
                Copyright Rimel 2022. All right reserved
            </div>
        </footer>
    );
};

export default Footer;