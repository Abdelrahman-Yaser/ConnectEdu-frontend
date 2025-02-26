// app/courses/page.tsx
import Link from "next/link";
import React from "react";

export default function CoursesPage() {
  return (
    <>
      {/* Overlay (optional, if you want a dark overlay effect) */}
      <div className="fixed inset-0 bg-black opacity-50 -z-10"></div>

      {/* Navbar */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold flex items-center">
            <i className="fas fa-graduation-cap mr-2"></i> ConnectEDU
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" title="Open Menu">
            <i className="fas fa-bars"></i>
            <span className="sr-only">Menu</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/courses" className="text-white transition">
              Courses
            </Link>
            <Link href="/posts" className="text-gray-300 hover:text-white transition">
              Posts
            </Link>
            <Link href="/articles" className="text-gray-300 hover:text-white transition">
              Articles
            </Link>
            <Link href="/about_us" className="text-gray-300 hover:text-white transition">
              About Us
            </Link>
          </div>

          {/* Profile & Logout */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/profile" className="text-white hover:text-gray-300 transition">
              <i className="fa-solid fa-user mr-1"></i> My Profile
            </Link>
            <Link
              href="/"
              className="border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-gray-800 transition"
            >
              <i className="fas fa-sign-out-alt mr-1"></i> Logout
            </Link>
          </div>
        </div>
      </nav>

      {/* Courses Content */}
      <div className="container mx-auto mt-5 px-4">
        <div className="text-center text-2xl font-bold mb-5 text-gray-800">
          <i className="fas fa-book mr-2"></i> Available Courses
        </div>
        <div className="flex flex-wrap gap-3">
          {/* Course Card (repeated for each course) */}
          {[...Array(8)].map((_, index) => (
            <Link key={index} href="/materials">
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.33%-1rem)]">
                <h4 className="text-xl font-semibold text-gray-800">CS500</h4>
                <p className="text-gray-600">Prof. Name</p>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, saepe!
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
