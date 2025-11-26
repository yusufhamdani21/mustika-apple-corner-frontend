import React from 'react'
import logo from '../assets/mustika-logo.png'
import { useState } from 'react'


export default function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0
        flex justify-between items-center
        text-black py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32
        bg-white drop-shadow-md z-50" id='home'>

            {/* Logo and Brand Name */}
            <a href="#" className="flex items-center gap-2 sm:gap-3 group z-50">
                <img
                    src={logo}
                    alt="logo"
                    className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-105 transition-all"
                />
                <span className="text-sm sm:text-base md:text-xl font-bold text-gray-800 group-hover:text-green-800 transition-colors whitespace-nowrap">
                    Mustika Apple Corner
                </span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-6 xl:gap-12 font-semibold text-sm xl:text-base">
                <li className='p-3 hover:bg-green-800 hover:text-white rounded-md transition-all cursor-pointer'>Home</li>
                <li className='p-3 hover:bg-green-800 hover:text-white rounded-md transition-all cursor-pointer'>Service</li>
                <li className='p-3 hover:bg-green-800 hover:text-white rounded-md transition-all cursor-pointer'>About</li>
                <li className='p-3 hover:bg-green-800 hover:text-white rounded-md transition-all cursor-pointer'>Contact</li>
            </ul>

            {/* Search Bar - Desktop only */}
            <div className="relative hidden md:flex items-center justify-center gap-3">
                <i className="bx bx-search absolute left-3 text-xl xl:text-2xl text-gray-500"></i>
                <input
                    type="text"
                    placeholder='Search here...'
                    className='py-2 pl-10 pr-4 w-40 lg:w-48 xl:w-56 rounded-xl border-2 border-green-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm'
                />
            </div>

            {/* Mobile Menu Button - SEKARANG PAKE md:hidden */}
            <i
                className="bx bx-menu md:hidden! text-4xl sm:text-5xl cursor-pointer z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></i>

            {/* Mobile Menu */}
            <div
                className={`absolute md:hidden top-full left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg
                ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none z-40"}`}
            >
                <li className='list-none w-full text-center p-4 hover:bg-green-800 hover:text-white transition-all cursor-pointer'>Home</li>
                <li className='list-none w-full text-center p-4 hover:bg-green-800 hover:text-white transition-all cursor-pointer'>Service</li>
                <li className='list-none w-full text-center p-4 hover:bg-green-800 hover:text-white transition-all cursor-pointer'>About</li>
                <li className='list-none w-full text-center p-4 hover:bg-green-800 hover:text-white transition-all cursor-pointer'>Contact</li>
            </div>

        </header>
    )
}
