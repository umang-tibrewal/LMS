import React from 'react';

function Signup() {
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex w-full max-w-3xl shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 bg-slate-200 p-8">
          <h1 className="font-bold text-2xl text-black text-center font-sans">Sign Up</h1>
          <p className="text-sm mt-7 text-black text-opacity-70 text-center">
            If you already a member, easily log in
          </p>
          <form className="flex-1 mb-8">
            <input
              className="p-2 mt-8 rounded-xl border w-full focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              name="email"
              placeholder="Your email"
            />
            <div className="relative mt-4">
              <input
                className="p-2 rounded-xl border w-full focus:outline-none focus:ring-2 focus:ring-black-500"
                type="password"
                name="password"
                placeholder="Your password"
              />
              <input
                className="p-2 rounded-xl border w-full mt-2 focus:outline-none focus:ring-2 focus:ring-black-500"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
            </div>
            <button className="Login-button rounded-xl bg-black-500 text-white py-2 mt-4 w-full hover:bg-black-600 transition duration-300">
              Sign Up
            </button>
          </form>
          <div className="mt-3 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button className="bg-black border border-gray-300 py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:bg-black-100 transition duration-300">
            <img className="w-6 mr-3" src="./img/google_logo_icon.png" alt="" />
            Sign Up with Google
          </button>
          <button className="bg-black border border-gray-300 py-2 w-full rounded-xl mt-3 flex justify-center items-center text-sm hover:bg-black-100 transition duration-300">
            <img className="w-6 mr-3" src="./img/google_logo_icon.png" alt="" />
            Sign Up with FaceBook
          </button>
          <div className="mt-3 text-xs flex justify-between items-center">
            <p>
              <a href="#" className="text-black hover:text-white">
                If you already have an account?
              </a>
            </p>
            <button className="py-2 px-5 bg-black text-white border rounded-xl hover:bg-gray-800 transition duration-300">
              Login
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-green-500 flex items-center p-8">
          <div className="pl-8">
            <h2 className="text-2xl font-bold mb-4 text-white">LMS - Learning and Management Software</h2>
            <p className="text-white">
              "In today's world, the only sustainable competitive advantage is your ability to learn faster than your
              competitors."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;