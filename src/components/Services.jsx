import React, { useState } from 'react'

const SERVICES = [
    {
        icon: 'bx bx-mobile-alt',
        title: 'iPhone Repair',
        desc: 'Ganti layar, baterai, kamera, tombol, dan kerusakan lainnya.',
        items: [
            { name: 'Ganti Layar (LCD/OLED)', price: 'Rp 350.000' },
            { name: 'Ganti Baterai', price: 'Rp 150.000' },
            { name: 'Ganti Kamera Belakang', price: 'Rp 250.000' },
            { name: 'Ganti Charging Port', price: 'Rp 180.000' },
        ]
    },
    {
        icon: 'bx bx-laptop',
        title: 'MacBook Service',
        desc: 'Keyboard, baterai, motherboard, hingga upgrade SSD/RAM.',
        items: [
            { name: 'Ganti Keyboard', price: 'Rp 800.000' },
            { name: 'Ganti Baterai', price: 'Rp 650.000' },
            { name: 'Upgrade SSD', price: 'Rp 500.000' },
            { name: 'Repair Motherboard', price: 'Hubungi Kami' },
        ]
    },
    {
        icon: 'bx bx-tab',
        title: 'iPad Repair',
        desc: 'Layar pecah, baterai drop, tombol home, dan Touch ID.',
        items: [
            { name: 'Ganti Layar', price: 'Rp 450.000' },
            { name: 'Ganti Baterai', price: 'Rp 250.000' },
            { name: 'Ganti Tombol Home', price: 'Rp 200.000' },
            { name: 'Ganti Charging Port', price: 'Rp 180.000' },
        ]
    },
    {
        icon: 'bx bx-time-five',
        title: 'Apple Watch',
        desc: 'Ganti layar, baterai, dan perbaikan sensor.',
        items: [
            { name: 'Ganti Layar', price: 'Rp 500.000' },
            { name: 'Ganti Baterai', price: 'Rp 300.000' },
            { name: 'Repair Sensor', price: 'Hubungi Kami' },
            { name: 'Ganti Crown', price: 'Rp 250.000' },
        ]
    },
]

const BUNDLES = [
    {
        label: null,
        name: 'Basic Care',
        price: 'Rp 299.000',
        color: 'border-gray-200',
        btnColor: 'bg-gray-800 hover:bg-gray-900',
        features: [
            'Diagnosa & konsultasi gratis',
            '1 item perbaikan pilihan',
            'Garansi 3 bulan',
            'Spare part standar',
        ]
    },
    {
        label: 'Paling Populer',
        name: 'Premium Care',
        price: 'Rp 549.000',
        color: 'border-green-500 ring-2 ring-green-400',
        btnColor: 'bg-green-800 hover:bg-green-900',
        features: [
            'Diagnosa & konsultasi gratis',
            '2 item perbaikan pilihan',
            'Garansi 6 bulan',
            'Spare part original',
            'Antar jemput device (Bandung)',
        ]
    },
    {
        label: 'Best Value',
        name: 'Ultimate Care',
        price: 'Rp 899.000',
        color: 'border-amber-400',
        btnColor: 'bg-amber-500 hover:bg-amber-600',
        features: [
            'Diagnosa & konsultasi gratis',
            '3 item perbaikan pilihan',
            'Garansi 12 bulan',
            'Spare part original',
            'Antar jemput device (Bandung & Jatinangor)',
            'Prioritas antrian',
        ]
    },
]

const PROMOS = [
    { icon: '🎉', title: 'Diskon 20% Ganti Baterai', desc: 'Berlaku untuk semua tipe iPhone & iPad', until: 'Sampai 31 Mei 2025' },
    { icon: '📦', title: 'Gratis Ongkir Antar Jemput', desc: 'Khusus area Bandung & Jatinangor', until: 'Promo terbatas' },
    { icon: '🛡️', title: 'Garansi Bonus +3 Bulan', desc: 'Setiap pembelian paket Premium & Ultimate', until: 'Berlaku terus' },
]

export default function Services({ openModal }) {
    const [activeService, setActiveService] = useState(0)

    return (
        <section className="bg-gray-50 py-16 md:py-24" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">

                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-green-800 font-semibold text-sm uppercase tracking-widest mb-3">Layanan & Harga</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Solusi Lengkap <span className="text-green-800">Perangkat Apple</span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                        Transparan, terpercaya, dan bergaransi. Semua layanan dikerjakan oleh teknisi bersertifikat BNSP.
                    </p>
                </div>

                {/* ── SERVICES TAB ── */}
                <div className="mb-20">
                    {/* Tab buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {SERVICES.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveService(i)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${activeService === i
                                        ? 'bg-green-800 text-white shadow-lg'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-green-400'
                                    }`}
                            >
                                <i className={`${s.icon} text-lg`}></i>
                                {s.title}
                            </button>
                        ))}
                    </div>

                    {/* Service detail card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-2xl mx-auto">
                        <div className="bg-gradient-to-r from-green-700 to-emerald-600 p-6 flex items-center gap-4">
                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                                <i className={`${SERVICES[activeService].icon} text-3xl text-white`}></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{SERVICES[activeService].title}</h3>
                                <p className="text-green-100 text-sm mt-1">{SERVICES[activeService].desc}</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {SERVICES[activeService].items.map((item, i) => (
                                <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <i className="bx bx-check-circle text-green-500 text-xl"></i>
                                        <span className="text-gray-700 font-medium">{item.name}</span>
                                    </div>
                                    <span className={`font-bold text-sm ${item.price === 'Hubungi Kami' ? 'text-green-700' : 'text-gray-800'}`}>
                                        {item.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 bg-gray-50">
                            <p className="text-xs text-gray-400 mb-4">* Harga dapat berubah tergantung kondisi device. Diagnosa gratis sebelum pengerjaan.</p>
                            <button
                                onClick={() => openModal(SERVICES[activeService].title)}
                                className="flex items-center justify-center gap-2 w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-3 rounded-xl transition-all"
                            >
                                <i className="bx bx-chat text-xl"></i>
                                Konsultasi Gratis via WhatsApp
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── BUNDLE PACKAGES ── */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Paket Bundle</h3>
                        <p className="text-gray-500">Hemat lebih banyak dengan paket lengkap kami</p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {BUNDLES.map((b, i) => (
                            <div
                                key={i}
                                className={`relative bg-white rounded-2xl border-2 p-6 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${b.color}`}
                            >
                                {b.label && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-800 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                                        {b.label}
                                    </span>
                                )}
                                <h4 className="text-lg font-bold text-gray-800 mb-1">{b.name}</h4>
                                <p className="text-3xl font-bold text-green-800 mb-6">{b.price}</p>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {b.features.map((f, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                                            <i className="bx bx-check text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full text-white font-semibold py-3 rounded-xl transition-all ${b.btnColor}`}>
                                    Pilih Paket
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── PROMO BANNER ── */}
                <div>
                    <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Promo Aktif</h3>
                        <p className="text-gray-500">Jangan sampai ketinggalan penawaran terbatas kami</p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                        {PROMOS.map((p, i) => (
                            <div key={i} className="bg-white border border-green-100 rounded-2xl p-6 flex gap-4 items-start hover:shadow-md transition-all hover:-translate-y-0.5">
                                <span className="text-3xl">{p.icon}</span>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">{p.title}</h4>
                                    <p className="text-gray-500 text-sm mb-2">{p.desc}</p>
                                    <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                                        {p.until}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}