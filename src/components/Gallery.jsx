import React, { useState, useEffect, useCallback } from 'react'

const WP_API = 'https://mustikaapplecorner.com/wp-json'

// Fallback data
const FALLBACK = [
    { id: 1, type: 'photo', caption: 'Proses servis iPhone', thumb: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80', url: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&q=90' },
    { id: 2, type: 'photo', caption: 'Ganti layar MacBook', thumb: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80', url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=90' },
    { id: 3, type: 'photo', caption: 'Workshop teknisi MAC', thumb: 'https://images.unsplash.com/photo-1581092334651-ddf19d754f67?w=400&q=80', url: 'https://images.unsplash.com/photo-1581092334651-ddf19d754f67?w=1200&q=90' },
    { id: 4, type: 'video', video_type: 'youtube', caption: 'Proses Repair iPhone Mati Total', thumb: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80', embed_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' },
    { id: 5, type: 'photo', caption: 'Spare part original', thumb: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?w=400&q=80', url: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?w=1200&q=90' },
    { id: 6, type: 'photo', caption: 'Hasil before-after', thumb: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?w=400&q=80', url: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?w=1200&q=90' },
]

export default function Gallery() {
    const [items, setItems]           = useState(FALLBACK)
    const [loading, setLoading]       = useState(true)
    const [filter, setFilter]         = useState('all') // all | photo | video
    const [lightbox, setLightbox]     = useState(null)  // item yang sedang dibuka
    const [lightboxIdx, setLightboxIdx] = useState(0)

    useEffect(() => {
        const fetch_ = async () => {
            try {
                const res  = await fetch(`${WP_API}/mustika/v1/gallery`)
                const data = await res.json()
                if (Array.isArray(data) && data.length > 0) setItems(data)
            } catch { /* pakai fallback */ }
            finally { setLoading(false) }
        }
        fetch_()
    }, [])

    const filtered = filter === 'all' ? items : items.filter(i => i.type === filter)
    const photos   = filtered.filter(i => i.type === 'photo')

    // Navigasi lightbox foto
    const openLightbox = (item) => {
        const idx = photos.findIndex(p => p.id === item.id)
        setLightboxIdx(idx)
        setLightbox(item)
    }

    const closeLightbox = () => setLightbox(null)

    const prevPhoto = useCallback(() => {
        const idx = (lightboxIdx - 1 + photos.length) % photos.length
        setLightboxIdx(idx)
        setLightbox(photos[idx])
    }, [lightboxIdx, photos])

    const nextPhoto = useCallback(() => {
        const idx = (lightboxIdx + 1) % photos.length
        setLightboxIdx(idx)
        setLightbox(photos[idx])
    }, [lightboxIdx, photos])

    // Keyboard navigation
    useEffect(() => {
        const handle = (e) => {
            if (!lightbox) return
            if (e.key === 'Escape')     closeLightbox()
            if (e.key === 'ArrowLeft')  prevPhoto()
            if (e.key === 'ArrowRight') nextPhoto()
        }
        window.addEventListener('keydown', handle)
        return () => window.removeEventListener('keydown', handle)
    }, [lightbox, prevPhoto, nextPhoto])

    // Lock scroll saat lightbox buka
    useEffect(() => {
        document.body.style.overflow = lightbox ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [lightbox])

    return (
        <section className="bg-white py-16 md:py-24" id="gallery">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-green-800 font-semibold text-sm uppercase tracking-widest mb-3">Gallery</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Dokumentasi <span className="text-green-800">Pekerjaan Kami</span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                        Foto dan video proses servis, hasil pekerjaan, dan suasana workshop Mustika Apple Corner
                    </p>
                </div>

                {/* Filter tabs */}
                <div className="flex justify-center gap-3 mb-10">
                    {[
                        { id: 'all',   label: 'Semua',  icon: 'bx bx-grid-alt' },
                        { id: 'photo', label: 'Foto',   icon: 'bx bx-image-alt' },
                        { id: 'video', label: 'Video',  icon: 'bx bx-play-circle' },
                    ].map(f => (
                        <button
                            key={f.id}
                            onClick={() => setFilter(f.id)}
                            aria-label='Filter untuk tiap tab Gallery Mustika Apple Corner'
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                                filter === f.id
                                    ? 'bg-green-800 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            <i className={f.icon}></i>
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Loading skeleton */}
                {loading && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="aspect-square bg-gray-100 rounded-2xl animate-pulse" />
                        ))}
                    </div>
                )}

                {/* Gallery grid */}
                {!loading && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        {filtered.map(item => (
                            <div
                                key={item.id}
                                onClick={() => item.type === 'photo' ? openLightbox(item) : setLightbox(item)}
                                className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Thumbnail */}
                                <img
                                    src={item.thumb || item.url}
                                    alt={item.caption}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                        {item.type === 'photo' ? (
                                            <i className="bx bx-zoom-in text-white text-4xl drop-shadow-lg"></i>
                                        ) : (
                                            <i className="bx bx-play-circle text-white text-5xl drop-shadow-lg"></i>
                                        )}
                                    </div>
                                </div>

                                {/* Video badge */}
                                {item.type === 'video' && (
                                    <div className="absolute top-3 left-3">
                                        <span className="flex items-center gap-1 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-full">
                                            {item.video_type === 'youtube'   && <><i className="bx bxl-youtube text-red-500"></i> YouTube</>}
                                            {item.video_type === 'instagram' && <><i className="bx bxl-instagram text-pink-400"></i> Reel</>}
                                            {item.video_type === 'upload'    && <><i className="bx bx-video text-blue-400"></i> Video</>}
                                        </span>
                                    </div>
                                )}

                                {/* Caption */}
                                {item.caption && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white text-xs font-medium line-clamp-2">{item.caption}</p>
                                    </div>
                                )}
                            </div>
                        ))}

                        {filtered.length === 0 && (
                            <div className="col-span-4 text-center py-20 text-gray-400">
                                <i className="bx bx-image text-5xl mb-3 block"></i>
                                <p>Belum ada konten di kategori ini</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* ── LIGHTBOX ── */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        aria-label='LightBox untuk UI yang lebih baik Mustika Apple Corner'
                        className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl z-10 transition-colors"
                    >
                        <i className="bx bx-x"></i>
                    </button>

                    {/* Content */}
                    <div
                        className="relative max-w-5xl w-full mx-4"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* FOTO lightbox */}
                        {lightbox.type === 'photo' && (
                            <>
                                <img
                                    src={lightbox.url || lightbox.thumb}
                                    alt={lightbox.caption}
                                    className="w-full max-h-[80vh] object-contain rounded-xl"
                                />
                                {/* Nav arrows */}
                                {photos.length > 1 && (
                                    <>
                                        <button onClick={prevPhoto}
                                            aria-label='Navigasi Mustika Apple Corner'
                                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all">
                                            <i className="bx bx-chevron-left text-3xl"></i>
                                        </button>
                                        <button onClick={nextPhoto}
                                            aria-label='Navigasi Mustika Apple Corner'
                                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all">
                                            <i className="bx bx-chevron-right text-3xl"></i>
                                        </button>
                                    </>
                                )}
                                {/* Caption & counter */}
                                <div className="text-center mt-4">
                                    {lightbox.caption && <p className="text-white font-medium">{lightbox.caption}</p>}
                                    {photos.length > 1 && (
                                        <p className="text-white/50 text-sm mt-1">{lightboxIdx + 1} / {photos.length}</p>
                                    )}
                                </div>
                            </>
                        )}

                        {/* VIDEO lightbox */}
                        {lightbox.type === 'video' && (
                            <>
                                {/* YouTube & Instagram embed */}
                                {(lightbox.video_type === 'youtube' || lightbox.video_type === 'instagram') && lightbox.embed_url && (
                                    <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
                                        <iframe
                                            src={lightbox.embed_url}
                                            className="absolute inset-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={lightbox.caption}
                                        />
                                    </div>
                                )}

                                {/* Upload video */}
                                {lightbox.video_type === 'upload' && lightbox.video_url && (
                                    <video
                                        src={lightbox.video_url}
                                        controls
                                        autoPlay
                                        className="w-full max-h-[80vh] rounded-xl"
                                    />
                                )}

                                {lightbox.caption && (
                                    <p className="text-white font-medium text-center mt-4">{lightbox.caption}</p>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}