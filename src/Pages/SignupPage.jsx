import React from "react";
import { Link } from "react-router-dom";
function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-gray-400 text-base md:text-lg p-2 pl-4"></div>
      <div className="bg-white m-2 md:m-4 p-0 md:p-8 min-h-[80vh] flex flex-col justify-between">
        <header className="flex justify-between items-start pt-4 md:pt-6 px-4 md:px-8">
          <span className="text-xl md:text-2xl font-normal">Skill Groove</span>
          <Link to="/login" className="text-base md:text-lg font-normal hover:underline">login</Link>
        </header>
        <main className="flex flex-1 flex-col items-center justify-center w-full">
          <h2 className="text-xl md:text-2xl font-normal mb-6 md:mb-8 mt-4">Signup as</h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-8 w-full justify-center items-center px-4 md:px-0">
            <button 
              className="text-white text-lg md:text-2xl w-full md:w-72 h-16 md:h-32 rounded-none transition duration-200"
              style={{ backgroundColor: '#CA4A4A' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#B43E3E'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#CA4A4A'}
            >
              Service Provider
            </button>
            <button 
              className="text-white text-lg md:text-2xl w-full md:w-72 h-16 md:h-32 rounded-none transition duration-200"
              style={{ backgroundColor: '#CA4A4A' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#B43E3E'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#CA4A4A'}
            >
              Customer
            </button>
          </div>
        </main>
        <div className="text-black text-xs md:text-sm px-4 md:px-8 pb-4 text-center md:text-left">
          note: we have 3 roles, service provider, customer and admin<br/>
          (with all access and just a single account with defined creds)
        </div>
      </div>
    </div>
  );
}
export default SignupPage; 