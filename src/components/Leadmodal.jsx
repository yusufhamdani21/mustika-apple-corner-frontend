import React, { useState, useEffect, useRef } from 'react'

const SERVICES = [
    'iPhone Repair',
    'MacBook Service',
    'iPad Repair',
    'Apple Watch Repair',
    'iMac Service',
    'Software Troubleshooting',
    'Lainnya',
]

// const WP_API = import.meta.env.VITE_API_URL?.replace('/posts', '') || 'http://localhost/wp-json'
const WP_API = 'http://localhost/wp-json'

export default function LeadModal({ isOpen, onClose, source = 'website', defaultService = '' }) {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        service: defaultService,
        message: '',
    })
    const [status, setStatus] = useState('idle') // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('')
    const modalRef = useRef(null)

    // Reset form saat modal dibuka
    useEffect(() => {
        if (isOpen) {
            setForm({ name: '', phone: '', service: defaultService, message: '' })
            setStatus('idle')
            setErrorMsg('')
        }
    }, [isOpen, defaultService])

    // Tutup modal saat klik backdrop atau tekan Escape
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose() }
        if (isOpen) document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [isOpen, onClose])

    // Lock scroll body saat modal terbuka
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMsg('')

        try {
            const res = await fetch(`${WP_API}/mustika/v1/leads`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, source }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || 'Terjadi kesalahan, coba lagi.')
            }

            setStatus('success')

            // Redirect ke WA setelah 1.5 detik
            setTimeout(() => {
                window.open(data.wa_url, '_blank')
                onClose()
            }, 1500)

        } catch (err) {
            setStatus('error')
            setErrorMsg(err.message)
        }
    }

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
            <div
                ref={modalRef}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative animate-fade-in"
                style={{ animation: 'modalIn 0.25s ease' }}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-t-2xl px-6 py-5 flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-bold text-xl">Konsultasi Gratis</h3>
                        <p className="text-green-100 text-sm mt-0.5">Isi form, kami balas via WhatsApp</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white text-2xl leading-none transition-colors"
                    >
                        <i className="bx bx-x"></i>
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 py-6">

                    {/* Success state */}
                    {status === 'success' && (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="bx bx-check text-4xl text-green-700"></i>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Terima kasih!</h4>
                            <p className="text-gray-500 text-sm">Data kamu sudah kami terima. Mengalihkan ke WhatsApp...</p>
                        </div>
                    )}

                    {/* Form */}
                    {status !== 'success' && (
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Nama */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Nama Lengkap <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Contoh: Budi Santoso"
                                    required
                                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-sm transition-colors"
                                />
                            </div>

                            {/* No WA */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Nomor WhatsApp <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">+62</span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="812-3456-7890"
                                        required
                                        className="w-full pl-12 pr-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-sm transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Layanan */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Layanan yang Dibutuhkan
                                </label>
                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-sm transition-colors bg-white"
                                >
                                    <option value="">-- Pilih Layanan --</option>
                                    {SERVICES.map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Pesan */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Deskripsi Masalah <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Ceritakan masalah device kamu secara singkat..."
                                    required
                                    rows={3}
                                    minLength={10}
                                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-sm transition-colors resize-none"
                                />
                            </div>

                            {/* Error */}
                            {status === 'error' && (
                                <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
                                    <i className="bx bx-error-circle text-lg flex-shrink-0"></i>
                                    {errorMsg}
                                </div>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full flex items-center justify-center gap-2 bg-green-800 hover:bg-green-900 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-all text-sm"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <i className="bx bx-loader-alt animate-spin text-lg"></i>
                                        Mengirim...
                                    </>
                                ) : (
                                    <>
                                        <i className="bx bxl-whatsapp text-lg"></i>
                                        Kirim & Lanjut ke WhatsApp
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-gray-400 text-center">
                                <i className="bx bx-lock-alt"></i> Data kamu aman dan tidak akan disebarkan
                            </p>

                        </form>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes modalIn {
                    from { opacity: 0; transform: scale(0.95) translateY(8px); }
                    to   { opacity: 1; transform: scale(1) translateY(0); }
                }
            `}</style>
        </div>
    )
}