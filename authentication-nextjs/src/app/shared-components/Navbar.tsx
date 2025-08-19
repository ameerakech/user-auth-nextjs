import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (

        <nav className="bg-white text-black p-4 flex justify-between items-center">
        <div className="text-xl font-bold"> Exclusive</div>
            <div className="space-x-20">
                <Link href="#">Home</Link>
                <Link href="#">Contact</Link>
                <Link href="#">About</Link>
                <Link href="#">Sign Up</Link>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="p-2 rounded border"
                />
            </div>

        </nav>
    );
};

export default Navbar