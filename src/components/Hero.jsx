import React from 'react'

export default function Hero({ openModal }) {
    return (
        <section className="relative bg-linear-to-br from-blue-50 via-teal-50 to-emerald-50 overflow-hidden" id='hero'>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 min-h-[650px] items-center py-12 md:py-0">

                    {/* Brand Info */}
                    <div className='flex flex-col justify-center space-y-6 md:space-y-8'>
                        <div className="space-y-4 md:space-y-6">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold text-sm">
                                <i className='bx bx-shield-quarter text-xl'></i>
                                <span>100% Jaminan Garansi dan Uang Kembali</span>
                            </div>

                            {/* Heading */}
                            <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-800 leading-tight'>
                                Apple Device Service | <span className='text-green-800'>Bandung & Jatinangor</span>
                            </h1>

                            {/* Operating Hours */}
                            <div className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-gray-700">
                                <i className='bx bx-time-five text-2xl text-green-800'></i>
                                <span>Open Daily | 10.00 – 22.00</span>
                            </div>

                            {/* Credentials */}
                            <div className="flex flex-wrap gap-4 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <i className='bx bx-certification text-xl text-green-700'></i>
                                    <span>Certified by BNSP</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className='bx bx-calendar-check text-xl text-green-700'></i>
                                    <span>12-Month Warranty</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className='bx bx-badge-check text-xl text-green-700'></i>
                                    <span>Trusted Since 2013</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <button
                                onClick={() => openModal('iPhone Repair')}
                                className="flex items-center gap-2 bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-all transform hover:scale-105 shadow-lg"
                            >
                                <i className='bx bx-chat text-xl'></i>
                                Konsultasi
                            </button>
                            <button className="flex items-center gap-2 border-2 border-green-800 text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-800 hover:text-white transition-all">
                                <i className='bx bx-map text-xl'></i>
                                Lihat Lokasi
                            </button>
                        </div>

                        {/* Stats/Trust Indicators */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="text-center">
                                <p className="text-2xl sm:text-3xl font-bold text-green-800">10K+</p>
                                <p className="text-sm text-gray-600">Happy Customers</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl sm:text-3xl font-bold text-green-800">4.9</p>
                                <p className="text-sm text-gray-600">Rating</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl sm:text-3xl font-bold text-green-800">11+</p>
                                <p className="text-sm text-gray-600">Years Experience</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative flex items-center justify-center md:justify-end">
                        <div className="relative w-full max-w-lg">
                            <img
                                src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&q=80"
                                alt="Apple Devices"
                                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                            />

                            {/* Floating Card - Warranty */}
                            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden sm:block animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <i className='bx bx-shield-quarter text-2xl text-green-800'></i>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">12 Bulan</p>
                                        <p className="text-sm text-gray-600">Garansi</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card - Fast Service */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden sm:block animate-float-delayed">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <i className='bx bx-timer text-2xl text-orange-600'></i>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">1-3 Hari</p>
                                        <p className="text-sm text-gray-600">Pengerjaan</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-br from-green-200 to-teal-200 rounded-full opacity-20 blur-3xl"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-green-200 to-emerald-200 rounded-full opacity-20 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-blue-200 to-teal-200 rounded-full opacity-20 blur-3xl -z-10"></div>

        </section>
    )
}