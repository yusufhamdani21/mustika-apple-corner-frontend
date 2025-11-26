import React from 'react'

export default function WhyChooseUs() {
    const features = [
        {
            icon: 'bx bx-shield-quarter',
            title: '100% Garansi Resmi',
            description: 'Garansi komponen hingga 12 bulan untuk setiap perbaikan yang kami lakukan',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: 'bx bx-timer',
            title: 'Pengerjaan Cepat',
            description: 'Mayoritas servis selesai dalam 1-3 hari kerja dengan kualitas terjamin',
            color: 'from-orange-500 to-orange-600'
        },
        {
            icon: 'bx bx-user-check',
            title: 'Teknisi Bersertifikat',
            description: 'Tim teknisi profesional bersertifikat BNSP dengan pengalaman 10+ tahun',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: 'bx bx-wallet',
            title: 'Harga Transparan',
            description: 'Konsultasi gratis dan estimasi biaya yang jelas sebelum perbaikan dimulai',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: 'bx bx-gear',
            title: 'Spare Part Original',
            description: 'Menggunakan komponen original dan berkualitas tinggi untuk setiap perbaikan',
            color: 'from-teal-500 to-teal-600'
        },
        {
            icon: 'bx bx-star',
            title: 'Trusted Since 2013',
            description: 'Dipercaya ribuan pelanggan dengan rating 4.9/5.0 di berbagai platform',
            color: 'from-yellow-500 to-yellow-600'
        }
    ]

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 bg-white" id='about'>
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-green-800 font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
                        Kenapa Memilih Kami
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-gray-800 mb-4">
                        Alasan Pelanggan Memilih <span className="text-green-800">Mustika Apple Corner</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                        Kami berkomitmen memberikan pelayanan terbaik dengan standar kualitas tinggi untuk setiap kebutuhan perangkat Apple Anda
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group bg-linear-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl border-2 border-gray-100 hover:border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 md:w-16 md:h-16 bg-linear-to-br ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <i className={`${feature.icon} text-3xl md:text-4xl text-white`}></i>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-800 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 md:mt-20 bg-linear-to-br from-green-800 to-emerald-700 rounded-3xl p-8 md:p-12 text-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-bold mb-2">10K+</p>
                            <p className="text-green-100 text-sm md:text-base">Pelanggan Puas</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-bold mb-2">4.9</p>
                            <p className="text-green-100 text-sm md:text-base">Rating Pelanggan</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-bold mb-2">11+</p>
                            <p className="text-green-100 text-sm md:text-base">Tahun Berpengalaman</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-bold mb-2">98%</p>
                            <p className="text-green-100 text-sm md:text-base">Tingkat Keberhasilan</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}