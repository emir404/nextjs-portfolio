"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaDatabase, FaAddressBook, FaStackpath} from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Header = () => {
    let [ isMenuOpen, setIsMenuOpen ] = useState(false);

    let routes = [
        {
            path: "/",
            icon: <FaHome></FaHome>,
            name: "home"
        },
        {
            path: "/about",
            icon: <FaUser></FaUser>,
            name: "about"
        },
        {
            path: "/projects",
            icon: <FaDatabase></FaDatabase>,
            name: "projects"
        },
        {
            path: "/contact",
            icon: <FaAddressBook></FaAddressBook>,
            name: "contact"
        },
      ];

    const pathname: string = usePathname();

    let styleString = (path: string, type: string) => {
        let styles = {
            lg: "flex flex-row text-xl justify-center items-center gap-1 hover:text-zinc-100 px-4 py-2",
            sm: "p-2 text-xl text-center hover:text-zinc-100",
        };
        
        if (pathname === path) {
          if (type === "lg") {
            return styles.lg + " bg-gray-900/75 rounded-lg";
          } else if (type === "sm") {
            return styles.sm + " bg-gray-900/75";
          }
        } else {
          if (type === "lg") {
            return styles.lg;
          } else if (type === "sm") {
            return styles.sm;
          }
        }

        return "hidden";
    };

    return (
        <header className="
            flex
            w-full
            h-20
        ">
          <nav className="
            w-full
            h-full
            flex
            flex-row
            justify-center
            items-center
            gap-2
            text-zinc-300
            border-b-2
            border-gray-700
            md:flex
            xs:hidden
          ">
              {routes.map( (route, index) => {
                  return (
                      <Link href={route.path} className={styleString(route.path, "lg")}>
                          {route.icon}
                          {route.name}
                      </Link>
                  );
                })
              }
          </nav>
          <div className="absolute flex flex-col w-full h-full md:hidden lg:hidden">
            <BiMenuAltLeft onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-4xl m-4">
            </BiMenuAltLeft>
            <div className={twMerge(isMenuOpen && "flex flex-col" || "hidden", "bg-gray-900/50 w-full transition-all duration-500")}>
              {routes.map( (route, index) => {
                  return (
                      <Link href={route.path} className={styleString(route.path, "sm")}>
                          {route.name}
                      </Link>
                  );
                })
              }
            </div>
          </div>
        </header>
    );
};

export default Header;