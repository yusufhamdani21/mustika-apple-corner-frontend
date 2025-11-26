import React, { useState, useEffect } from 'react'

export default function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: 'Budi Santoso',
            role: 'Mahasiswa',
            image: 'https://i.pravatar.cc/150?img=12',
            rating: 5,
            text: 'Pelayanan sangat memuaskan! iPhone saya yang mati total bisa hidup lagi dalam 2 hari. Teknisinya ramah dan profesional. Harga juga transparan, tidak ada biaya tersembunyi.',
            device: 'iPhone 13 Pro'
        },
        {
            id: 2,
            name: 'Siti Rahma',
            role: 'Entrepreneur',
            image: 'https://i.pravatar.cc/150?img=5',
            rating: 5,
            text: 'Sudah 3 kali servis MacBook di sini, hasilnya selalu memuaskan. Garansi 12 bulan benar-benar ditepati. Recommended banget untuk yang butuh service Apple di Bandung!',
            device: 'MacBook Pro M1'
        },
        {
            id: 3,
            name: 'Ahmad Fauzi',
            role: 'Content Creator',
            image: 'https://i.pravatar.cc/150?img=33',
            rating: 5,
            text: 'Fast response, pengerjaan cepat, dan hasil sempurna! Apple Watch saya kembali seperti baru. Tempatnya juga nyaman untuk nunggu. Worth it banget!',
            device: 'Apple Watch Series 8'
        },
        {
            id: 4,
            name: 'Dina Permata',
            role: 'Graphic Designer',
            image: 'https://i.pravatar.cc/150?img=9',
            rating: 5,
            text: 'Pelayanan terbaik! iPad saya yang layarnya pecah diperbaiki dengan sangat rapi. Teknisinya juga kasih tips untuk maintenance. Puas banget!',
            device: 'iPad Pro 2021'
        },
        {
            id: 5,
            name: 'Reza Pratama',
            role: 'Software Engineer',
            image: 'https://i.pravatar.cc/150?img=15',
            rating: 5,
            text: 'Konsultasi gratis dan detail penjelasannya. Baterai iPhone diganti dengan yang original, performanya kembali maksimal. Highly recommended!',
            device: 'iPhone 14 Pro Max'
        },
        {
            id: 6,
            name: 'Lina Wijaya',
            role: 'Marketing Manager',
            image: 'https://i.pravatar.cc/150?img=20',
            rating: 5,
            text: 'Service center Apple terpercaya di Bandung. AirPods saya bermasalah langsung ditangani dengan cepat dan profesional. Terima kasih Mustika!',
            device: 'AirPods Pro 2'
        }
    ]

    // Auto-scroll carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000) // Ganti setiap 5 detik

        return () => clearInterval(interval)
    }, [testimonials.length])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 bg-linear-to-br from-gray-50 to-blue-50" id='testimonial'>
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-green-800 font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
                        Testimoni Pelanggan
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Apa Kata <span className="text-green-800">Mereka?</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                        Ribuan pelanggan telah mempercayakan perangkat Apple mereka kepada kami
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Main Carousel */}
                    <div className="overflow-hidden rounded-3xl">
                        <div 
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div 
                                    key={testimonial.id}
                                    className="w-full shrink-0 px-2"
                                >
                                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            
                                            {/* Customer Info */}
                                            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-6">
                                                <img 
                                                    src={testimonial.image} 
                                                    alt={testimonial.name}
                                                    className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-4 border-green-500 shadow-lg"
                                                />
                                                <div className="md:text-center">
                                                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-gray-600 text-sm md:text-base mb-2">
                                                        {testimonial.role}
                                                    </p>
                                                    <div className="flex gap-1 justify-start md:justify-center">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <i key={i} className="bx bxs-star text-yellow-500 text-lg"></i>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Testimonial Content */}
                                            <div className="flex-1">
                                                <div className="mb-6">
                                                    <i className="bx bxs-quote-alt-left text-5xl md:text-6xl text-green-500 opacity-20"></i>
                                                </div>
                                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                                                    "{testimonial.text}"
                                                </p>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <i className="bx bx-devices text-green-600 text-xl"></i>
                                                    <span>{testimonial.device}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white hover:bg-green-800 text-gray-800 hover:text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 group z-10"
                    >
                        <i className="bx bx-chevron-left text-3xl md:text-4xl"></i>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white hover:bg-green-800 text-gray-800 hover:text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 group z-10"
                    >
                        <i className="bx bx-chevron-right text-3xl md:text-4xl"></i>
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${
                                currentIndex === index 
                                    ? 'w-8 md:w-12 h-3 bg-green-800' 
                                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-12 md:mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-lg">
                        <i className="bx bxs-shield-alt-2 text-3xl text-green-600"></i>
                        <div className="text-left">
                            <p className="font-bold text-gray-800">Dipercaya 10,000+ Pelanggan</p>
                            <p className="text-sm text-gray-600">Rating 4.9/5.0 di Google & Instagram</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}