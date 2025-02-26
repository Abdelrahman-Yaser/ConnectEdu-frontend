// app/edit-course/page.tsx (or any appropriate path)
import React from "react";

export default function EditCourse() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-800 text-white p-6">
        <div className="mb-8">
          <a href="/" className="flex items-center text-2xl font-bold">
            <i className="fas fa-graduation-cap mr-2"></i> ConnectEDU
          </a>
        </div>
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="flex items-center hover:text-gray-300 transition-colors"
            >
              <i className="fas fa-home mr-2"></i> Dashboard
            </a>
          </li>
          <li>
            <a
              href="/manage_users"
              className="flex items-center hover:text-gray-300 transition-colors"
            >
              <i className="fas fa-users mr-2"></i> Manage Users
            </a>
          </li>
          <li>
            <a
              href="/manage_courses"
              className="flex items-center bg-gray-700 p-2 rounded"
            >
              <i className="fas fa-book mr-2"></i> Manage Courses
            </a>
          </li>
          <li>
            <a
              href="/manage_requests"
              className="flex items-center hover:text-gray-300 transition-colors"
            >
              <i className="fas fa-user-plus mr-2"></i> Registration Requests
            </a>
          </li>
          <li>
            <a
              href="/manage_alumni"
              className="flex items-center hover:text-gray-300 transition-colors"
            >
              <i className="fas fa-user-graduate mr-2"></i> Alumni Requests
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Edit Course</h1>
        <form className="space-y-6 max-w-lg">
          <div>
            <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              defaultValue="CS500"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="professor" className="block text-sm font-medium text-gray-700">
              Professor
            </label>
            <select
              id="professor"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Select Professor
              </option>
              <option value="1" selected>
                Prof. John Doe
              </option>
              <option value="2">Prof. Jane Smith</option>
              <option value="3">Prof. Ahmed Ali</option>
              <option value="4">Prof. Sara Mohamed</option>
            </select>
          </div>

          <div>
            <label htmlFor="courseSummary" className="block text-sm font-medium text-gray-700">
              Course Summary
            </label>
            <textarea
              id="courseSummary"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, saepe!
            </textarea>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Save Changes
            </button>
            <a
              href="/manage_courses"
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
