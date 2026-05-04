import React, { useState } from 'react'

const FAQS = [
    {
        q: 'Berapa lama waktu pengerjaan?',
        a: 'Rata-rata pengerjaan membutuhkan 1–3 hari kerja tergantung jenis kerusakan dan ketersediaan spare part. Untuk perbaikan ringan seperti ganti baterai atau layar, biasanya bisa selesai di hari yang sama.'
    },
    {
        q: 'Apakah spare part yang digunakan original?',
        a: 'Kami menggunakan spare part original (OEM) untuk semua perbaikan. Khusus paket Basic, tersedia pilihan spare part standar dengan harga lebih terjangkau. Teknisi kami akan menjelaskan opsi yang tersedia sebelum pengerjaan dimulai.'
    },
    {
        q: 'Bagaimana jika device rusak setelah diperbaiki?',
        a: 'Semua perbaikan dilindungi garansi resmi. Jika terjadi kerusakan yang berhubungan dengan pekerjaan kami dalam masa garansi, kami akan memperbaiki tanpa biaya tambahan. Garansi berlaku 3–12 bulan tergantung paket yang dipilih.'
    },
    {
        q: 'Apakah bisa antar jemput device?',
        a: 'Bisa! Layanan antar jemput tersedia untuk area Bandung (paket Premium & Ultimate) dan Jatinangor (khusus paket Ultimate). Hubungi kami via WhatsApp untuk jadwal penjemputan.'
    },
    {
        q: 'Apakah ada garansi setelah perbaikan?',
        a: 'Ya, semua perbaikan bergaransi. Paket Basic mendapat garansi 3 bulan, Premium 6 bulan, dan Ultimate 12 bulan. Garansi mencakup kerusakan yang berkaitan langsung dengan perbaikan yang dilakukan.'
    },
    {
        q: 'Bagaimana cara cek status perbaikan?',
        a: 'Kamu bisa cek status perbaikan kapan saja via WhatsApp dengan menyebutkan nama dan nomor nota servis. Tim kami akan memberikan update terbaru secara real-time.'
    },
    {
        q: 'Metode pembayaran apa saja yang diterima?',
        a: 'Kami menerima pembayaran tunai, transfer bank (BCA, Mandiri, BRI, BNI), QRIS, serta dompet digital seperti GoPay, OVO, dan Dana. Pembayaran dilakukan setelah perbaikan selesai dan device sudah diperiksa.'
    },
    {
        q: 'Apakah data di device aman selama perbaikan?',
        a: 'Keamanan data pelanggan adalah prioritas kami. Teknisi kami hanya mengakses bagian yang diperlukan untuk perbaikan. Namun sebagai langkah pencegahan, kami menyarankan untuk melakukan backup data sebelum menyerahkan device.'
    },
]

export default function FAQ({ openModal }) {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

    return (
        <section className="bg-white py-16 md:py-24" id="faq">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">

                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-green-800 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Pertanyaan yang <span className="text-green-800">Sering Ditanyakan</span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                        Belum menemukan jawaban yang kamu cari? Langsung hubungi kami via WhatsApp.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* FAQ Items */}
                    <div className="space-y-3 mb-12">
                        {FAQS.map((faq, i) => (
                            <div
                                key={i}
                                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${openIndex === i
                                        ? 'border-green-400 shadow-sm'
                                        : 'border-gray-100 hover:border-gray-200'
                                    }`}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                >
                                    <span className={`font-semibold text-base transition-colors ${openIndex === i ? 'text-green-800' : 'text-gray-800'
                                        }`}>
                                        {faq.q}
                                    </span>
                                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === i
                                            ? 'bg-green-800 text-white rotate-45'
                                            : 'bg-gray-100 text-gray-500'
                                        }`}>
                                        <i className="bx bx-plus text-xl"></i>
                                    </span>
                                </button>

                                {openIndex === i && (
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA bottom */}
                    <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="bx bx-chat text-3xl text-green-700"></i>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Masih ada pertanyaan?</h4>
                        <p className="text-gray-500 mb-6 text-sm">
                            Tim kami siap membantu kamu setiap hari pukul 10.00 – 22.00
                        </p>
                        <button
                            onClick={() => openModal()}
                            className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-semibold px-8 py-3 rounded-xl transition-all hover:scale-105"
                        >
                            <i className="bx bxl-whatsapp text-xl"></i>
                            Chat via WhatsApp
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}