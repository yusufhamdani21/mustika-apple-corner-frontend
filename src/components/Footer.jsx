import React from 'react'

export default function Footer() {
    const quickLinks = [
        { name: 'Home', href: '#' },
        { name: 'Service', href: '#service' },
        { name: 'About Us', href: '#about' },
        { name: 'Testimonial', href: '#testimonial' },
        { name: 'Contact', href: '#contact' }
    ]

    const services = [
        'iPhone Repair',
        'MacBook Service',
        'iPad Repair',
        'Apple Watch Repair',
        'iMac Service',
        'Software Troubleshooting'
    ]

    const locations = [
        {
            city: 'Bandung',
            address: 'Jl. Raya Bandung No. 123, Bandung',
            phone: '+62 812-3456-7890',
            hours: '10:00 - 22:00'
        },
        {
            city: 'Jatinangor',
            address: 'Jl. Raya Jatinangor No. 456, Sumedang',
            phone: '+62 812-3456-7891',
            hours: '10:00 - 22:00'
        }
    ]

    return (
        <footer className="bg-gray-900 text-gray-300" id='contact'>
            {/* Maps Section */}
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

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
                        {/* Map Bandung */}
                        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                            <div className="p-6 bg-linear-to-r from-green-700 to-emerald-600">
                                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                                    <i className="bx bx-map text-2xl"></i>
                                    Mustika Apple Corner - Bandung
                                </h4>
                            </div>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798947944332!2d107.60981731431642!3d-6.914744869559904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                            ></iframe>
                            <div className="p-6 space-y-3">
                                <p className="flex items-start gap-3">
                                    <i className="bx bx-map-pin text-green-500 text-xl mt-1"></i>
                                    <span>{locations[0].address}</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <i className="bx bx-phone text-green-500 text-xl"></i>
                                    <span>{locations[0].phone}</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <i className="bx bx-time text-green-500 text-xl"></i>
                                    <span>Open Daily: {locations[0].hours}</span>
                                </p>
                            </div>
                        </div>

                        {/* Map Jatinangor */}
                        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                            <div className="p-6 bg-linear-to-r from-green-700 to-emerald-600">
                                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                                    <i className="bx bx-map text-2xl"></i>
                                    Mustika Apple Corner - Jatinangor
                                </h4>
                            </div>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2123456789!2d107.77123451431642!3d-6.928123469559904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c2b5e3456789%3A0x123456789abcdef!2sJatinangor%2C%20Sumedang%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                            ></iframe>
                            <div className="p-6 space-y-3">
                                <p className="flex items-start gap-3">
                                    <i className="bx bx-map-pin text-green-500 text-xl mt-1"></i>
                                    <span>{locations[1].address}</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <i className="bx bx-phone text-green-500 text-xl"></i>
                                    <span>{locations[1].phone}</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <i className="bx bx-time text-green-500 text-xl"></i>
                                    <span>Open Daily: {locations[1].hours}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                        
                        {/* About Company */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-linear-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">M</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">Mustika Apple Corner</h3>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Premium Apple service center terpercaya di Bandung & Jatinangor sejak 2013. Melayani dengan sepenuh hati.
                            </p>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 group">
                                    <i className="fab fa-facebook text-xl group-hover:scale-110 transition-transform"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 group">
                                    <i className="fab fa-instagram text-xl group-hover:scale-110 transition-transform"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 group">
                                    <i className="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 group">
                                    <i className="fab fa-tiktok text-xl group-hover:scale-110 transition-transform"></i>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.href} 
                                            className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group"
                                        >
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
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a 
                                            href="#" 
                                            className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group"
                                        >
                                            <i className="bx bx-wrench text-lg group-hover:rotate-12 transition-transform"></i>
                                            {service}
                                        </a>
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
                                    placeholder="Email Anda"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none text-white placeholder-gray-500 transition-colors"
                                />
                                <button className="w-full bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                                    Subscribe
                                </button>
                            </div>
                            <div className="mt-6 flex items-start gap-2 text-sm text-gray-400">
                                <i className="bx bx-shield-quarter text-green-500 text-lg mt-0.5"></i>
                                <span>Email Anda aman bersama kami</span>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-400 text-sm text-center md:text-left">
                                © 2025   Mustika Apple Corner. All rights reserved. | Certified by BNSP
                            </p>
                            <div className="flex gap-6 text-sm">
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Privacy Policy</a>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Terms of Service</a>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Sitemap</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
            >
                <i className="fab fa-whatsapp text-white text-3xl group-hover:rotate-12 transition-transform"></i>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                    1
                </span>
            </a>
        </footer>
    )
}