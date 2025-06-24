import React from "react";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div className="container m-auto">
      <div className="text-gray-400 text-base md:text-lg p-2 pl-4"></div>
      <div className="bg-white m-2 md:m-4 p-0 md:p-8 min-h-[80vh] flex flex-col justify-between">
        <header className="flex justify-between items-start pt-4 md:pt-6 px-4 md:px-8">
          <span className="text-xl md:text-2xl font-normal">Skill Groove</span>
          <Link to="/signup" className="text-base md:text-lg font-normal hover:underline">signup</Link>
        </header>
        <main className="flex flex-1 flex-col items-center justify-center w-full px-4 md:px-0">
          <h2 className="text-xl md:text-2xl font-normal mb-6 md:mb-8 mt-4">login</h2>
          <form className="w-full max-w-xs md:max-w-md flex flex-col items-center gap-3 md:gap-4">
            <input
              type="text"
              placeholder="username"
              className="w-full bg-gray-300 px-4 py-2 text-base md:text-lg outline-none placeholder-black"
            />
            <div className="w-full flex flex-col gap-2">
              <input
                type="password"
                placeholder="password"
                className="w-full bg-gray-300 px-4 py-2 text-base md:text-lg outline-none placeholder-black"
              />
              <div className="flex justify-end">
                <Link to="/forget-password" className="text-black text-xs md:text-sm hover:underline">forget password</Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full md:w-1/2 text-white text-lg md:text-xl py-2 mt-2 rounded-none transition duration-200"
              style={{ backgroundColor: '#CA4A4A' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#B43E3E'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#CA4A4A'}
            >
              Login
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
export default LoginPage;                                                                                                                                                                                                                          