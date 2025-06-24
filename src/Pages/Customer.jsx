import React from 'react';
export default function Customer() {
    return (
        <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-2 py-6">
            <div className="bg-white shadow-lg p-2 sm:p-6 w-full max-w-lg md:max-w-3xl rounded-lg">
                <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2 sm:gap-0 px-2 sm:px-0">
                    <h1 className="text-lg sm:text-xl font-semibold">Skill Groove</h1>
                    <a href="#" className="text-gray-600 hover:text-black mt-2 sm:mt-0 text-sm sm:text-base">login</a>
                </div>
                <h2 className="text-base sm:text-lg font-medium mb-4 px-2 sm:px-0">signup</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-3 px-2 sm:px-0">
                    <input type="text" placeholder="First name" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0 rounded" />
                    <input type="text" placeholder="country" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0 rounded" />

                    <input type="text" placeholder="last name" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0 rounded" />
                    <input type="text" placeholder="phone number" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0 rounded" />

                    <input type="text" placeholder="username" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0 rounded" />
                    <input type="text" placeholder="Address" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0 rounded" />

                    <input type="email" placeholder="email" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0 rounded" />
                    <div className="bg-[#D9D9D9] p-2 w-full rounded">
                        <label className="block font-medium text-sm mb-1">preferences → <span className="text-xs font-normal">check box for tailor, fashion designer, embroiderer, crochet etc</span></label>
                        <div className="flex flex-wrap gap-2">
                            <label className="flex items-center gap-1 text-sm">
                                <input type="checkbox" className="accent-red-500" /> Tailor
                            </label>
                            <label className="flex items-center gap-1 text-sm">
                                <input type="checkbox" className="accent-red-500" /> Fashion Designer
                            </label>
                            <label className="flex items-center gap-1 text-sm">
                                <input type="checkbox" className="accent-red-500" /> Embroiderer
                            </label>
                            <label className="flex items-center gap-1 text-sm">
                                <input type="checkbox" className="accent-red-500" /> Crochet
                            </label>
                        </div>
                    </div>

                    <input type="password" placeholder="password" className="p-2 bg-[#D9D9D9] w-full focus:outline-none focus:ring-0 rounded" />

                    <div className="md:col-span-2 flex justify-start">
                        <button type="submit" className="bg-red-500 text-white py-2 px-6 mt-2 w-full sm:w-auto rounded">signup</button>
                    </div>
                </form>
            </div>
        </div>
    );
}