import React, { useState } from 'react'
import logo from '../assets/mustika-logo.png'

export default function Footer({ openModal }) {
    const quickLinks = [
        { name: 'Home',        href: '#hero'        },
        { name: 'Service',     href: '#services'    },
        { name: 'About Us',    href: '#about'       },
        { name: 'Testimonial', href: '#testimonial' },
        { name: 'Contact',     href: '#contact'     },
    ]

    const services = [
        'iPhone Repair',
        'MacBook Service',
        'iPad Repair',
        'Apple Watch Repair',
        'iMac Service',
        'Software Troubleshooting',
    ]

    const locations = [
        {
            city: 'Bandung',
            address: 'Jl. H. Kurdi 1 No.12 RT05, RW.01, Karasak, Astanaanyar, Bandung City, West Java 40243',
            phone: '+62 85971777071',
            hours: '10:00 - 22:00',
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.550200512229!2d107.60687349999999!3d-6.944233700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e90aec355931%3A0xb5eb0ff04ffdaa4d!2sMAC%202.0%20Bandung%20%7C%20Service%20iPhone%20iPad%20Macbook%20iWatch!5e0!3m2!1sen!2sid!4v1777975681434!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        },
        {
            city: 'Jatinangor',
            address: 'Jl. Ir. Soekarno No.181, depan kantor, Kec. Jatinangor, Kabupaten Sumedang, Jawa Barat 45363',
            phone: '+62 8989200075',
            hours: '10:00 - 22:00',
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6499096653474!2d107.7766783!3d-6.932380500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c4a700384175%3A0x8867ae46113b61f6!2sMAC%20Jatinangor%20%7C%20Service%20iPhone%20iPad%20Macbook%20%7C%20Android!5e0!3m2!1sen!2sid!4v1777975765753!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        },
    ]

    const [email, setEmail]       = useState('')
    const [subStatus, setSubStatus] = useState('idle')

    const handleSubscribe = async () => {
        if (!email) return
        setSubStatus('loading')
        try {
            const res  = await fetch('https://mustikaapplecorner.com/wp-json/mustika/v1/subscribe', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify({ email }),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.message)
            setSubStatus('success')
            setEmail('')
        } catch {
            setSubStatus('error')
        }
    }

    return (
        <footer className="bg-gray-900 text-gray-300" id='contact'>

            {/* ── Maps Section ── */}
            <div className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Kunjungi <span className="text-green-500">Lokasi Kami</span>
                        </h3>
                        <p className="text-gray-400 text-lg">
                            Kami melayani di 2 lokasi strategis untuk kemudahan Anda
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {locations.map((loc) => (
                            <div key={loc.city} className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                                <div className="p-6 bg-linear-to-r from-green-700 to-emerald-600">
                                    <h4 className="text-xl font-bold text-white flex items-center gap-2">
                                        <i className="bx bx-map text-2xl"></i>
                                        Mustika Apple Corner - {loc.city}
                                    </h4>
                                </div>
                                <iframe
                                    src={loc.mapSrc}
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full"
                                />
                                <div className="p-6 space-y-3">
                                    <p className="flex items-start gap-3">
                                        <i className="bx bx-map-pin text-green-500 text-xl mt-1"></i>
                                        <span>{loc.address}</span>
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <i className="bx bx-phone text-green-500 text-xl"></i>
                                        <span>{loc.phone}</span>
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <i className="bx bx-time text-green-500 text-xl"></i>
                                        <span>Open Daily: {loc.hours}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Main Footer ── */}
            <div className="py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">

                        {/* About */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-3 mb-6">
                                <img
                                    src={logo}
                                    alt="Mustika Apple Corner"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <h3 className="text-xl font-bold text-white">Mustika Apple Corner</h3>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Premium Apple service center terpercaya di Bandung & Jatinangor sejak 2013. Melayani dengan sepenuh hati.
                            </p>
                            <div className="flex gap-3">
                                {[
                                    { icon: 'fab fa-facebook',  href: '#' },
                                    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/macstore.id_/' },
                                    { icon: 'fab fa-whatsapp',  href: 'https://wa.me/6285971777071' },
                                    { icon: 'fab fa-tiktok',    href: '#' },
                                ].map(({ icon, href }) => (
                                    <a key={icon} href={href}
                                        className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 group">
                                        <i className={`${icon} text-xl group-hover:scale-110 transition-transform`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href}
                                            className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group">
                                            <i className="bx bx-chevron-right text-xl group-hover:translate-x-1 transition-transform"></i>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service}>
                                        <button
                                            onClick={() => openModal(service)}
                                            className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group"
                                        >
                                            <i className="bx bx-wrench text-lg group-hover:rotate-12 transition-transform"></i>
                                            {service}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
                            <p className="text-gray-400 mb-4">
                                Subscribe untuk info promo dan tips merawat device Apple
                            </p>
                            <div className="space-y-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Anda"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none text-white placeholder-gray-500 transition-colors"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    disabled={subStatus === 'loading' || subStatus === 'success'}
                                    className="w-full bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                                >
                                    {subStatus === 'loading' ? 'Mendaftar...' : subStatus === 'success' ? '✓ Berhasil!' : 'Subscribe'}
                                </button>
                                {subStatus === 'error' && (
                                    <p className="text-red-400 text-xs">Email sudah terdaftar atau terjadi kesalahan.</p>
                                )}
                            </div>
                            <div className="mt-4 flex items-start gap-2 text-sm text-gray-400">
                                <i className="bx bx-shield-quarter text-green-500 text-lg mt-0.5"></i>
                                <span>Email Anda aman bersama kami</span>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-400 text-sm text-center md:text-left">
                                © 2025 Mustika Apple Corner. All rights reserved. | Certified by BNSP
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 text-sm">
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Privacy Policy</a>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Terms of Service</a>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Sitemap</a>
                                <a
                                    href="https://yusufhamdani.id"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-green-400 transition-colors"
                                >
                                    Crafted by Yusuf Hamdani
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <button
                onClick={() => openModal()}
                className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
            >
                <i className="fab fa-whatsapp text-white text-3xl group-hover:rotate-12 transition-transform"></i>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                    1
                </span>
            </button>

        </footer>
    )
}