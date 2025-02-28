"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";


const navLinks = [
  { name: "Courses", path: "/courses" },
  { name: "Posts", path: "/post" },
  { name: " Article", path: "/createArticle" },
  { name: "About Us",path: "/about" },
  { name: " My porfile", path:"AccountPage" },


];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="bg-gray-800 shadow-lg">
  <div className="container mx-auto px-4 py-3 flex items-center justify-between">
    <Link href="/" className="text-xl font-bold text-white">
      ConnectEDU
    </Link>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="lg:hidden text-white focus:outline-none"
    >
      {isOpen ?
      <div className="flex flex-col">
        <span className="bg-white w-6 h-1 mb-1"></span>
        <span className="bg-white w-6 h-1 mb-1"></span>
        <span className="bg-white w-6 h-1 mb-1"></span>
      </div>
      : <div className="">
                <span className="bg-white w-6 h-1 mb-1 "></span>
                <span className="bg-white w-6 h-1 mb-1 "></span>
        </div>
   
    }
   </button>
    {/* Desktop Menu */}
    <ul className="hidden lg:flex space-x-6">
      {navLinks.map(({ name, path }) => (
        <li key={path}>
          <Link
            href={path}
            className={`${
              pathname === path
                ? "text-white font-semibold border-b-2 border-white"
                : "text-white hover:text-gray-300"
            } transition-all px-3 py-2`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Mobile Dropdown Menu */}
  {isOpen && (
    <ul className="lg:hidden py-2 px-4">
      {navLinks.map(({ name, path }) => (
        <li key={path}>
          <Link
            href={path}
            className={`${
              pathname === path
                ? "text-white font-semibold border-b-2 border-white"
                : "text-white hover:text-gray-300"
            } transition-all block py-2`}
            onClick={() => setIsOpen(false)}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )}
</nav>

  );
};

export default Navbar;
