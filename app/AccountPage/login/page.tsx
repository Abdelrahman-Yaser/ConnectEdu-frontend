// app/welcome/page.tsx
import Link from "next/link";


export default function LoginPage() {
  return (
    <>


      <div className="container mx-auto mt-5 flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="mb-4 text-center">
          <Link href="/AccountPage" className="text-3xl font-bold text-gray-800 flex items-center">
ConnectEDU
          </Link>
        </div>

        {/* Site Brief */}
        <div className="text-center mb-4 text-lg text-gray-700">
          A platform to connect learners, alumni and educators for easier learning.
        </div>

        {/* Form Container */}
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
          <h3 className="mb-4 text-xl font-semibold text-center text-gray-800">
            <i className="fa-solid fa-right-to-bracket mr-2"></i> Login
          </h3>

          <form>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Remember Me */}
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-gray-700">
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>

            {/* Forgot Password */}
            <div className="mt-3 text-center">
              <Link href="/AccountPage/forgetPassword" className="text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>
          </form>

          {/* Register Link */}
          <div className="mt-4 text-center">
            <p className="text-gray-700">
              Don't have an account?{" "}
              <Link href="/AccountPage/register" className="text-blue-500 hover:underline">
                Request Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
