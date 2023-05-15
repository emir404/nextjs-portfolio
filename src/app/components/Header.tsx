"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaDatabase, FaBookmark, FaAddressBook} from "react-icons/fa";

const Header = () => {
    const pathname: string = usePathname();

    const styleString = (path: string) => {
        let defaultStyle = "flex items-center gap-2 text-xl transition-all duration-200 ease-in-out px-4 py-2";
        
        if (pathname === path) {
            return defaultStyle + " bg-gray-900/75 rounded-lg";
        };

        return defaultStyle;
    };

    return (
        <header className="
            flex
            flex-row
            justify-center
            items-center
            w-full
            h-20
            gap-2
            text-zinc-300
            border-b-2
            border-gray-700
        ">
            <Link href={"/"} className={styleString("/")}>
                <FaHome className="text-2xl"/> home
            </Link>
            <Link href={"/about"} className={styleString("/about")}>
                <FaUser className="text-2xl" /> about me
            </Link>
            <Link href={"/projects"} className={styleString("/projects")}>
                <FaDatabase className="text-2xl"/> projects
            </Link>
            <Link href={"/contact"} className={styleString("/contact")}>
                <FaAddressBook className="text-2xl" /> contact
            </Link>
            <Link href={"/blog"} className={styleString("/blog")}>
                <FaBookmark className="text-2xl" /> blog
            </Link>
        </header>
    );
};

export default Header;