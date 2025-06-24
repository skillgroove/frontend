import React from "react";
import { Link } from "react-router-dom";
import grooveLogo from "../assets/grovelogo.png";
function GuestPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-gray-400 text-lg p-2 pl-4">guest page</div>
      <div className="bg-white m-4 min-h-[80vh] flex flex-col">
        <header className="flex justify-end gap-8 text-lg font-normal pt-8 pr-12">
          <Link to="/login" className="hover:underline">login</Link>
          <Link to="/signup" className="hover:underline">signup</Link>
        </header>
        <main className="flex flex-1 flex-col items-start justify-center pl-12 pt-8">
          <span className="mb-8 text-black text-base">First guest page</span>
          <div className="flex flex-row items-center gap-4">
            <img
              src={grooveLogo}
              alt="Skill Groove Logo"
              className="w-16 h-16 md:w-24 md:h-24"
              draggable="false"
            />
            <h1 className="text-4xl md:text-6xl font-normal">Skill Groove</h1>
          </div>
        </main>
      </div>
    </div>
  );
}
export default GuestPage;
