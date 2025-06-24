import React from 'react';
export default function ServiceProvider() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-2 py-6">
      <div className="bg-white shadow-lg p-4 sm:p-6 w-full max-w-3xl">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <h1 className="text-xl font-semibold">Skill Groove</h1>
          <a href="#" className="text-gray-600 hover:text-black mt-2 sm:mt-0">login</a>
        </div>
        <h2 className="text-lg font-medium mb-4">signup</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input type="text" placeholder="First name" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0" />
          <input type="text" placeholder="country" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0" />
          <input type="text" placeholder="last name" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0" />
          <input type="text" placeholder="phone number" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0" />
          <input type="text" placeholder="username" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0" />
          <input type="text" placeholder="Address" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0" />
          <input type="email" placeholder="email" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0" />
          <input type="text" placeholder="type → tailor, fashion designer, embroiderer, crochet etc" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0" />
          <input type="password" placeholder="password" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0" />
          <input type="text" placeholder="experience in years" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0" />
          <textarea placeholder="description" className="p-2 bg-[#D9D9D9] w-full md:col-span-1 h-24 focus:outline-none focus:ring-0"></textarea>
          <input type="file" className="p-2 bg-[#D9D9D9] w-full md:col-span-1 focus:outline-none focus:ring-0" />
          <div className="md:col-span-2 flex justify-start">
            <button type="submit" className="bg-red-500 text-white py-2 px-6 mt-2">signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}
