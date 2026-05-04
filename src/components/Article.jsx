import React, { useState, useEffect } from 'react'

const CATEGORIES = [
    { id: 'all',  label: 'Semua Artikel', wpId: null },
    { id: 'tips', label: 'Tips & Tricks',  wpId: 3    },
    { id: 'repair', label: 'Panduan Repair', wpId: 5 }, // belum ada di WP, tambahkan dulu
    { id: 'news', label: 'Berita Tech',    wpId: 4    },
]

export default function Articles() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState('all')

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true)
                setError(null)

                const cat = CATEGORIES.find(c => c.id === selectedCategory)
                const categoryParam = cat?.wpId ? `&categories=${cat.wpId}` : ''
                const url = `http://localhost/wp-json/wp/v2/posts?_embed&per_page=6${categoryParam}`

                const response = await fetch(url)

                if (!response.ok) throw new Error('Failed to fetch articles')

                const data = await response.json()
                setArticles(data)
            } catch (err) {
                console.error('Error fetching articles:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchArticles()
    }, [selectedCategory]) // re-fetch setiap selectedCategory berubah

    const getExcerpt = (excerpt) => {
        const text = excerpt.rendered.replace(/<[^>]*>/g, '')
        return text.length > 120 ? text.substring(0, 120) + '...' : text
    }

    const getFeaturedImage = (article) => {
        if (article._embedded && article._embedded['wp:featuredmedia']) {
            return article._embedded['wp:featuredmedia'][0].source_url
        }
        return 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
    }

    const getAuthorName = (article) => {
        if (article._embedded && article._embedded.author) {
            return article._embedded.author[0].name
        }
        return 'Admin'
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric', month: 'long', day: 'numeric'
        })
    }

    const getReadingTime = (content) => {
        const text = content.rendered.replace(/<[^>]*>/g, '')
        const words = text.split(/\s+/).length
        return `${Math.ceil(words / 200)} min read`
    }

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 bg-white" id='article'>
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-green-800 font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
                        Blog & Artikel
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Tips & Trik <span className="text-green-800">Perawatan Apple</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                        Informasi terbaru seputar tips perawatan, troubleshooting, dan berita teknologi Apple
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                selectedCategory === cat.id
                                    ? 'bg-green-800 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-gray-100 rounded-2xl overflow-hidden animate-pulse">
                                <div className="w-full h-48 bg-gray-300"></div>
                                <div className="p-6 space-y-3">
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                    <div className="h-20 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="text-center py-12">
                        <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-6 py-4 rounded-xl">
                            <i className="bx bx-error-circle text-3xl"></i>
                            <div className="text-left">
                                <p className="font-semibold">Gagal memuat artikel</p>
                                <p className="text-sm">{error}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {!loading && !error && articles.length === 0 && (
                    <div className="text-center py-12">
                        <div className="inline-flex flex-col items-center gap-3 text-gray-400">
                            <i className="bx bx-folder-open text-5xl"></i>
                            <p className="font-semibold text-lg">Belum ada artikel di kategori ini</p>
                            <p className="text-sm">Tambahkan artikel di WordPress dengan kategori yang sesuai</p>
                        </div>
                    </div>
                )}

                {/* Articles Grid */}
                {!loading && !error && articles.length > 0 && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {articles.map((article) => (
                            <article
                                key={article.id}
                                className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-green-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={getFeaturedImage(article)}
                                        alt={article.title.rendered}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-green-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            Artikel
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <i className="bx bx-user text-lg"></i>
                                            {getAuthorName(article)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <i className="bx bx-calendar text-lg"></i>
                                            {formatDate(article.date)}
                                        </span>
                                    </div>

                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-green-800 transition-colors"
                                        dangerouslySetInnerHTML={{ __html: article.title.rendered }}
                                    />

                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {getExcerpt(article.excerpt)}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="text-sm text-gray-500 flex items-center gap-1">
                                            <i className="bx bx-time-five"></i>
                                            {getReadingTime(article.content)}
                                        </span>
                                        <a
                                            href={article.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-800 font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                                        >
                                            Baca Selengkapnya
                                            <i className="bx bx-right-arrow-alt text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* View All Button */}
                {!loading && !error && articles.length > 0 && (
                    <div className="text-center mt-12">
                        <a
                            href="http://localhost:8000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            Lihat Semua Artikel
                            <i className="bx bx-right-arrow-alt text-2xl"></i>
                        </a>
                    </div>
                )}

            </div>
        </section>
    )
}