import React, { useState, useEffect } from 'react'

const WP_API = 'https://mustikaapplecorner.com/wp-json'

// Fallback data kalau API belum ada testimoni
const FALLBACK = [
    {
        id: 1,
        name: 'Budi Santoso',
        role: 'Mahasiswa',
        photo: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=166534&color=fff&size=128',
        rating: 5,
        text: 'Pelayanan sangat memuaskan! iPhone saya yang mati total bisa hidup lagi dalam 2 hari. Teknisinya ramah dan profesional. Harga juga transparan.',
        device: 'iPhone 13 Pro',
        source_icon: '🌐',
    },
    {
        id: 2,
        name: 'Siti Rahma',
        role: 'Entrepreneur',
        photo: 'https://ui-avatars.com/api/?name=Siti+Rahma&background=166534&color=fff&size=128',
        rating: 5,
        text: 'Sudah 3 kali servis MacBook di sini, hasilnya selalu memuaskan. Garansi 12 bulan benar-benar ditepati. Recommended banget!',
        device: 'MacBook Pro M1',
        source_icon: '🌐',
    },
    {
        id: 3,
        name: 'Ahmad Fauzi',
        role: 'Content Creator',
        photo: 'https://ui-avatars.com/api/?name=Ahmad+Fauzi&background=166534&color=fff&size=128',
        rating: 5,
        text: 'Fast response, pengerjaan cepat, dan hasil sempurna! Apple Watch saya kembali seperti baru. Worth it banget!',
        device: 'Apple Watch Series 8',
        source_icon: '📸',
    },
]

export default function Testimonial() {
    const [currentIndex, setCurrentIndex]     = useState(0)
    const [testimonials, setTestimonials]     = useState(FALLBACK)
    const [loading, setLoading]               = useState(true)

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res  = await fetch(`${WP_API}/mustika/v1/testimonials`)
                const data = await res.json()
                if (Array.isArray(data) && data.length > 0) {
                    setTestimonials(data)
                }
            } catch {
                // pakai fallback
            } finally {
                setLoading(false)
            }
        }
        fetchTestimonials()
    }, [])

    // Auto-scroll
    useEffect(() => {
        if (loading) return
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [testimonials.length, loading])

    const next = () => setCurrentIndex(prev => (prev + 1) % testimonials.length)
    const prev = () => setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 bg-linear-to-br from-gray-50 to-blue-50" id='testimonial'>
            <div className="max-w-7xl mx-auto">

                {/* Header */}
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

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((t) => (
                                <div key={t.id} className="w-full shrink-0 px-2">
                                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                                        <div className="flex flex-col md:flex-row gap-8 items-start">

                                            {/* Customer Info */}
                                            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-6 flex-shrink-0">
                                                <div className="relative">
                                                    <img
                                                        src={t.photo}
                                                        alt={t.name}
                                                        className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-4 border-green-500 shadow-lg"
                                                        onError={(e) => {
                                                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=166534&color=fff&size=128`
                                                        }}
                                                    />
                                                    {/* Source badge */}
                                                    <span className="absolute -bottom-1 -right-1 text-lg"
                                                        title={t.source}>
                                                        {t.source_icon}
                                                    </span>
                                                </div>
                                                <div className="md:text-center">
                                                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                                                        {t.name}
                                                    </h4>
                                                    <p className="text-gray-500 text-sm md:text-base mb-2">
                                                        {t.role}
                                                    </p>
                                                    <div className="flex gap-0.5 justify-start md:justify-center">
                                                        {[...Array(5)].map((_, i) => (
                                                            <i key={i}
                                                                className={`bx bxs-star text-lg ${i < t.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                                                            ></i>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <i className="bx bxs-quote-alt-left text-5xl md:text-6xl text-green-500 opacity-20"></i>
                                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                                                    "{t.text}"
                                                </p>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <i className="bx bx-devices text-green-600 text-xl"></i>
                                                    <span>{t.device}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nav buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white hover:bg-green-800 text-gray-800 hover:text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 z-10"
                    >
                        <i className="bx bx-chevron-left text-3xl md:text-4xl"></i>
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white hover:bg-green-800 text-gray-800 hover:text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 z-10"
                    >
                        <i className="bx bx-chevron-right text-3xl md:text-4xl"></i>
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`transition-all duration-300 rounded-full ${
                                currentIndex === i
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