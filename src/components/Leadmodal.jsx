import React, { useEffect, useRef } from 'react'

// ── LOKASI ────────────────────────────────────────────────────
const LOCATIONS = [
    { id: 'bandung',    label: 'Bandung',    wa: '6285971777071', address: 'Jl. H. Kurdi 1 No.12 RT05, RW.01, Karasak, Astanaanyar, Bandung City, West Java 40243' },
    { id: 'jatinangor', label: 'Jatinangor', wa: '628989200075',  address: 'Jl. Ir. Soekarno No.181Kec. Jatinangor, Kabupaten Sumedang, Jawa Barat 45363' },
]

export default function LeadModal({ isOpen, onClose, defaultService = '' }) {
    const modalRef = useRef(null)

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose() }
        if (isOpen) document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [isOpen, onClose])

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const buildMessage = (location) => {
        const topic = defaultService || 'layanan Apple'
        let msg = `Halo Mustika Apple Corner ${location.label}!\n\n`
        msg += `Saya ingin konsultasi mengenai ${topic}.\n`
        msg += `Mohon informasi lebih lanjut, terima kasih.`
        return encodeURIComponent(msg)
    }

    const openWhatsApp = (location) => {
        const waUrl = `https://wa.me/${location.wa}?text=${buildMessage(location)}`
        window.open(waUrl, '_blank')
        onClose()
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
                            Pilih lokasi untuk {defaultService || 'konsultasi'}
                        </p>
                    </div>
                    <button onClick={onClose} aria-label='Tutup modal' className="text-white/80 hover:text-white text-2xl leading-none transition-colors">
                        <i className="bx bx-x"></i>
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 py-6">
                    <p className="text-sm text-gray-600 mb-4">
                        Pilih lokasi Mustika Apple Corner yang ingin kamu hubungi:
                    </p>

                    <div className="space-y-4">
                        {LOCATIONS.map(loc => (
                            <button
                                key={loc.id}
                                onClick={() => openWhatsApp(loc)}
                                aria-label={`Chat WhatsApp Mustika Apple Corner ${loc.label}`}
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
                                <i className="bx bxl-whatsapp text-2xl text-gray-300 group-hover:text-green-600 ml-auto transition-colors"></i>
                            </button>
                        ))}
                    </div>
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
