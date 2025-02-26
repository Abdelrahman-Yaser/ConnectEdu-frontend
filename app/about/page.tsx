// app/about/page.tsx
import React from "react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col">
      {/* Optional Navbar would go here */}

      <div className="container mx-auto py-16 px-4">
        {/* Header Section */}
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4 flex items-center justify-center">
            <i className="fas fa-info-circle mr-3"></i> About Us
          </h1>
          <p className="text-xl mb-8">
            Welcome to <strong>ConnectEDU</strong>, a platform designed to connect learners, alumni, and educators for easier learning and collaboration.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid gap-12 md:grid-cols-2 text-white">
          <div>
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-lg">
              Our mission is to provide a seamless learning experience by bridging the gap between students, professors, and alumni. We aim to create a community where knowledge is shared freely and efficiently.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-lg">
              We envision a world where education is accessible to everyone, and learning is a continuous journey that extends beyond the classroom.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Our Team</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Our team is composed of passionate educators, developers, and designers who are dedicated to making learning more interactive and engaging.
          </p>
        </div>
      </div>
    </div>
  );
}
