import React, { useState } from 'react'
import logo from '../assets/mustika-logo.png'

const NAV_LINKS = [
    { label: 'Home', href: '#hero' },
    { label: 'Why Us', href: '#about' },
    { label: 'Testimoni', href: '#testimonial' },
    { label: 'Service', href: '#services' },
    { label: 'Artikel', href: '#article' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
]

export default function Nav({ openModal }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleScroll = (e, href) => {
        e.preventDefault()
        setIsMenuOpen(false)

        const target = document.querySelector(href)
        if (!target) return

        const navHeight = document.querySelector('header')?.offsetHeight || 72
        const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight
        const startTop = window.scrollY
        const distance = targetTop - startTop
        const duration = 800
        let startTime = null

        const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            window.scrollTo(0, startTop + distance * easeInOutQuad(progress))
            if (elapsed < duration) requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
    }

    return (
        <header className="sticky top-0 flex justify-between items-center text-black py-3 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white drop-shadow-md z-50">

            {/* Logo */}
            <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="flex items-center gap-2 group z-50 flex-shrink-0">
                <img
                    src={logo}
                    alt="logo"
                    className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-105 transition-all rounded-full"
                />
                {/* Selalu tampil di semua ukuran */}
                <span className="text-sm md:text-base font-bold text-gray-800 group-hover:text-green-800 transition-colors whitespace-nowrap">
                    Mustika Apple Corner
                </span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1 font-semibold text-xs lg:text-sm">
                {NAV_LINKS.map(({ label, href }) => (
                    <li key={href}>
                        <a
                            href={href}
                            onClick={(e) => handleScroll(e, href)}
                            className='block px-2 lg:px-3 py-2 hover:bg-green-800 hover:text-white rounded-md transition-all cursor-pointer whitespace-nowrap'
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* CTA Button - Desktop only */}
            <button
                onClick={() => openModal()}
                className="hidden md:flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-900 transition-all flex-shrink-0"
            >
                <i className="bx bxl-whatsapp text-lg"></i>
                <span className="hidden lg:block">Konsultasi</span>
            </button>

            {/* Hamburger - Mobile only via CSS */}
            <i
                className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} hamburger-btn text-3xl cursor-pointer z-50 transition-all`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></i>

            {/* Mobile Menu */}
            <div className={`mobile-menu absolute top-full left-0 w-full bg-white flex flex-col items-center font-semibold text-base shadow-lg transition-all duration-300
                ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            >
                {NAV_LINKS.map(({ label, href }) => (
                    <a
                        key={href}
                        href={href}
                        onClick={(e) => handleScroll(e, href)}
                        className='w-full text-center p-4 hover:bg-green-800 hover:text-white transition-all cursor-pointer border-b border-gray-100 last:border-none'
                    >
                        {label}
                    </a>
                ))}

                {/* Search di mobile menu */}
                <div className="relative w-full px-6 py-4">
                    <i className="bx bx-search absolute left-9 top-1/2 -translate-y-1/2 text-xl text-gray-500"></i>
                    <input
                        type="text"
                        placeholder='Search here...'
                        className='w-full py-2 pl-10 pr-4 rounded-xl border-2 border-green-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm'
                    />
                </div>
            </div>

        </header>
    )
}