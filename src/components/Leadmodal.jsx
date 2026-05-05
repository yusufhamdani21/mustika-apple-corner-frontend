import React, { useState, useEffect, useRef } from 'react'

// ── LOKASI ────────────────────────────────────────────────────
const LOCATIONS = [
    { id: 'bandung',    label: 'Bandung',    wa: '6285971777071', address: 'Jl. Raya Bandung No. 123' },
    { id: 'jatinangor', label: 'Jatinangor', wa: '628989200075',  address: 'Jl. Raya Jatinangor No. 456' },
]

// ── LAYANAN ───────────────────────────────────────────────────
const SERVICES = [
    'iPhone Repair',
    'MacBook Service',
    'iPad Repair',
    'Apple Watch Repair',
    'iMac Service',
    'Software Troubleshooting',
    'Lainnya',
]

// ── IPHONE SERIES (grup) ──────────────────────────────────────
const IPHONE_SERIES_OPTIONS = [
    'iPhone 6 / 6+ / 6s / 6s+',
    'iPhone 7 / 7+',
    'iPhone 8 / 8+',
    'iPhone X / XS / XS Max / XR',
    'iPhone SE 2',
    'iPhone 11 / 11 Pro / 11 Pro Max',
    'iPhone 12 / 12 Pro / 12 Pro Max / 12 Mini',
    'iPhone 13 / 13 Pro / 13 Pro Max / 13 Mini',
    'iPhone 14 / 14 Plus / 14 Pro / 14 Pro Max',
    'iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max',
    'iPhone 16 / 16 Pro / 16 Pro Max',
]

const IPHONE_PARTS_OPTIONS = [
    'LCD / Layar',
    'Baterai',
    'Kamera Depan',
    'Kamera Belakang',
    'Speaker Atas',
    'Buzzer / Speaker Bawah',
    'Face ID',
    'Housing / Casing',
    'Backglass',
    'Flex Charger',
    'IC Power / Wifi / Baseband',
    'IC Charger / Audio / Display',
    'Swapboard',
    'IC Nandflash',
    'Lainnya',
]

// ── MACBOOK SERIES ────────────────────────────────────────────
const MACBOOK_SERIES_OPTIONS = [
    'MacBook Pro 13" (2008-2012) A1278',
    'MacBook Pro 15" (2009-2012) A1286',
    'MacBook Pro 15" (2012-2015) A1398',
    'MacBook Air 11" (2013-2015)',
    'MacBook Pro 13" (2013-2015) A1502/A1425',
    'MacBook Air 13" (2015-2017) A1466/A1369',
    'MacBook Pro 13" (2016-2017) A1708/A1706',
    'MacBook Pro 13" Touchbar (2016-2019)',
    'MacBook Pro 15" (2017) A1707',
    'MacBook Pro 15" Touch Bar (2018-2019)',
    'MacBook Pro 13" (2020) A2289',
    'MacBook Air 13" (2018-2020) A1932/A1965',
    'MacBook Air 13" (2020) A2179',
    'MacBook Pro 13" (2019) A2159/A2251',
    'MacBook Air 13" M1 (2020) A2337',
    'MacBook Pro 13" M1-M2 (2020-2021) A2338',
    'MacBook Air 13" M2 (2022) A2681',
    'MacBook Pro 14" M1 Pro/Max (2022) A2442',
    'MacBook Pro 16" M2 Max (2023) A2780',
    'MacBook Air 15" M2 (2023) A2941',
    'MacBook Pro 16" M2 Pro (2023) A2779',
    'MacBook Air 15" M3 (2023) A3114',
    'MacBook Air 13" M3 (2023) A3113',
    'MacBook Pro 14" M3 (2023) A2992',
    'MacBook Pro 16" M4 (2024) A3186',
    'MacBook Air 13" M4 (2024) A3240',
    'Model lain',
]

const MACBOOK_PARTS_OPTIONS = [
    'LCD / Layar',
    'Baterai',
    'Keyboard',
    'Trackpad',
    'Speaker',
    'Fan / Kipas',
    'Konektor Charger',
    'Flex',
    'Motherboard / Logic Board',
    'SSD / Storage',
    'RAM',
    'Lainnya',
]

const WP_API = 'https://mustikaapplecorner.com/wp-json'

export default function LeadModal({ isOpen, onClose, source = 'website', defaultService = '' }) {
    const [step, setStep]         = useState(1) // 1: lokasi, 2: form
    const [location, setLocation] = useState(null)
    const [form, setForm]         = useState({
        name: '',
        phone: '',
        service: defaultService,
        series: '',
        parts: [],
        message: '',
    })
    const [status, setStatus]     = useState('idle')
    const [errorMsg, setErrorMsg] = useState('')
    const modalRef                = useRef(null)

    const isIphone  = form.service === 'iPhone Repair'
    const isMacbook = form.service === 'MacBook Service'
    const showSeries = isIphone || isMacbook
    const seriesOptions = isIphone ? IPHONE_SERIES_OPTIONS : isMacbook ? MACBOOK_SERIES_OPTIONS : []
    const partsOptions  = isIphone ? IPHONE_PARTS_OPTIONS  : isMacbook ? MACBOOK_PARTS_OPTIONS  : []

    // Reset saat modal dibuka
    useEffect(() => {
        if (isOpen) {
            setStep(1)
            setLocation(null)
            setForm({ name: '', phone: '', service: defaultService, series: '', parts: [], message: '' })
            setStatus('idle')
            setErrorMsg('')
        }
    }, [isOpen, defaultService])

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose() }
        if (isOpen) document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [isOpen, onClose])

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value,
            // reset series & parts kalau ganti layanan
            ...(name === 'service' ? { series: '', parts: [] } : {}),
        }))
    }

    const togglePart = (part) => {
        setForm(prev => ({
            ...prev,
            parts: prev.parts.includes(part)
                ? prev.parts.filter(p => p !== part)
                : [...prev.parts, part],
        }))
    }

    const buildMessage = () => {
        let msg = `Halo Mustika Apple Corner ${location.label}!\n\n`
        msg += `Nama: ${form.name}\n`
        msg += `Layanan: ${form.service}\n`
        if (form.series) msg += `Seri: ${form.series}\n`
        if (form.parts.length > 0) msg += `Keluhan / Part: ${form.parts.join(', ')}\n`
        msg += `\nDeskripsi:\n${form.message}`
        return encodeURIComponent(msg)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMsg('')

        try {
            const payload = {
                ...form,
                parts: form.parts.join(', '),
                source,
                location: location.label,
                wa_number: location.wa,
            }

            const res  = await fetch(`${WP_API}/mustika/v1/leads`, {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify(payload),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.message || 'Terjadi kesalahan, coba lagi.')

            setStatus('success')
            setTimeout(() => {
                const waUrl = `https://wa.me/${location.wa}?text=${buildMessage()}`
                window.open(waUrl, '_blank')
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
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
                style={{ animation: 'modalIn 0.25s ease', maxHeight: '90vh', overflowY: 'auto' }}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-green-800 to-green-600 px-6 py-5 flex items-center justify-between sticky top-0 z-10">
                    <div>
                        <h3 className="text-white font-bold text-xl">Konsultasi Gratis</h3>
                        <p className="text-green-100 text-sm mt-0.5">
                            {step === 1 ? 'Pilih lokasi terdekat' : `Lokasi: ${location?.label}`}
                        </p>
                    </div>
                    <button onClick={onClose} className="text-white/80 hover:text-white text-2xl leading-none transition-colors">
                        <i className="bx bx-x"></i>
                    </button>
                </div>

                {/* Step indicator */}
                <div className="flex border-b border-gray-100">
                    <div className={`flex-1 py-2 text-center text-xs font-bold transition-all ${step === 1 ? 'text-green-800 border-b-2 border-green-700 bg-green-50' : 'text-gray-400'}`}>
                        1. Pilih Lokasi
                    </div>
                    <div className={`flex-1 py-2 text-center text-xs font-bold transition-all ${step === 2 ? 'text-green-800 border-b-2 border-green-700 bg-green-50' : 'text-gray-400'}`}>
                        2. Isi Form
                    </div>
                </div>

                <div className="px-6 py-6">

                    {/* ── STEP 1: Pilih Lokasi ── */}
                    {step === 1 && (
                        <div className="space-y-4">
                            <p className="text-sm text-gray-600 mb-4">Pilih lokasi Mustika Apple Corner yang ingin kamu kunjungi atau hubungi:</p>
                            {LOCATIONS.map(loc => (
                                <button
                                    key={loc.id}
                                    onClick={() => { setLocation(loc); setStep(2) }}
                                    className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-green-500 hover:bg-green-50 transition-all text-left group"
                                >
                                    <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-all">
                                        <i className="bx bx-map text-2xl text-green-700"></i>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800 group-hover:text-green-800 transition-colors">
                                            {loc.label}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-0.5">{loc.address}</p>
                                        <p className="text-xs text-green-600 font-medium mt-0.5">
                                            <i className="bx bxl-whatsapp"></i> +{loc.wa}
                                        </p>
                                    </div>
                                    <i className="bx bx-chevron-right text-2xl text-gray-300 group-hover:text-green-600 ml-auto transition-colors"></i>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* ── STEP 2: Form ── */}
                    {step === 2 && (
                        <>
                            {/* Success */}
                            {status === 'success' && (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className="bx bx-check text-4xl text-green-700"></i>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Terima kasih!</h4>
                                    <p className="text-gray-500 text-sm">Mengalihkan ke WhatsApp {location?.label}...</p>
                                </div>
                            )}

                            {status !== 'success' && (
                                <form onSubmit={handleSubmit} className="space-y-4">

                                    {/* Nama */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            Nama Lengkap <span className="text-red-500">*</span>
                                        </label>
                                        <input type="text" name="name" value={form.name} onChange={handleChange}
                                            placeholder="Contoh: Budi Santoso" required
                                            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-sm transition-colors" />
                                    </div>

                                    {/* No WA */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            Nomor WhatsApp <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">+62</span>
                                            <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                                                placeholder="812-3456-7890" required
                                                className="w-full pl-12 pr-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-sm transition-colors" />
                                        </div>
                                    </div>

                                    {/* Layanan */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            Layanan yang Dibutuhkan
                                        </label>
                                        <select name="service" value={form.service} onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-sm transition-colors bg-white">
                                            <option value="">-- Pilih Layanan --</option>
                                            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>

                                    {/* Seri — muncul kalau iPhone/MacBook */}
                                    {showSeries && (
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                                {isIphone ? 'Seri iPhone' : 'Model MacBook'}
                                            </label>
                                            <select name="series" value={form.series} onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-sm transition-colors bg-white">
                                                <option value="">-- Pilih {isIphone ? 'Seri' : 'Model'} --</option>
                                                {seriesOptions.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>
                                    )}

                                    {/* Part checklist — muncul kalau seri sudah dipilih */}
                                    {showSeries && form.series && (
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Keluhan / Part yang Bermasalah
                                                <span className="text-gray-400 font-normal ml-1">(bisa pilih lebih dari 1)</span>
                                            </label>
                                            <div className="grid grid-cols-2 gap-2">
                                                {partsOptions.map(part => (
                                                    <button
                                                        key={part}
                                                        type="button"
                                                        onClick={() => togglePart(part)}
                                                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 text-xs font-medium text-left transition-all ${
                                                            form.parts.includes(part)
                                                                ? 'border-green-500 bg-green-50 text-green-800'
                                                                : 'border-gray-200 text-gray-600 hover:border-green-300'
                                                        }`}
                                                    >
                                                        <span className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center border transition-all ${
                                                            form.parts.includes(part)
                                                                ? 'bg-green-600 border-green-600'
                                                                : 'border-gray-300'
                                                        }`}>
                                                            {form.parts.includes(part) && (
                                                                <i className="bx bx-check text-white text-xs"></i>
                                                            )}
                                                        </span>
                                                        {part}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Deskripsi */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            Deskripsi Masalah <span className="text-red-500">*</span>
                                        </label>
                                        <textarea name="message" value={form.message} onChange={handleChange}
                                            placeholder="Ceritakan masalah device kamu secara singkat..."
                                            required rows={3} minLength={10}
                                            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-sm transition-colors resize-none" />
                                    </div>

                                    {/* Error */}
                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
                                            <i className="bx bx-error-circle text-lg flex-shrink-0"></i>
                                            {errorMsg}
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        <button type="button" onClick={() => setStep(1)}
                                            className="flex items-center gap-1 px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-600 text-sm font-semibold hover:border-gray-300 transition-all">
                                            <i className="bx bx-arrow-back"></i>
                                            Ganti
                                        </button>
                                        <button type="submit" disabled={status === 'loading'}
                                            className="flex-1 flex items-center justify-center gap-2 bg-green-800 hover:bg-green-900 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-all text-sm">
                                            {status === 'loading' ? (
                                                <><i className="bx bx-loader-alt animate-spin text-lg"></i>Mengirim...</>
                                            ) : (
                                                <><i className="bx bxl-whatsapp text-lg"></i>Kirim & Chat {location?.label}</>
                                            )}
                                        </button>
                                    </div>

                                    <p className="text-xs text-gray-400 text-center">
                                        <i className="bx bx-lock-alt"></i> Data kamu aman dan tidak akan disebarkan
                                    </p>

                                </form>
                            )}
                        </>
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