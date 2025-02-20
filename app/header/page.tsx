"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const navLinks = [
  { name: "home", path: "/" },
  { name: "About", path: "/about" },
  { name: "user", path: "/about/user" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          NextBrand
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-600 focus:outline-none"
        >
          {isOpen ? <p>close</p> : <p>open</p>}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`${
                  pathname === path
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
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
        <ul className="lg:hidden bg-white py-2 px-4">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`block py-2 px-4 ${
                  pathname === path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
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
