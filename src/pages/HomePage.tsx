import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

export interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice: number | null
  img: string
  sizes: string[]
  badge: string | null
}

const products: Product[] = [
  { id: 1, name: 'Oversized Minimal Tee', category: 'Women', price: 39, originalPrice: null, img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80', sizes: ['XS', 'S', 'M', 'L', 'XL'], badge: null },
  { id: 2, name: 'Slim Fit Premium Chinos', category: 'Men', price: 69, originalPrice: null, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80', sizes: ['30', '32', '34', '36'], badge: null },
  { id: 3, name: 'Structured Leather Bag', category: 'Accessories', price: 89, originalPrice: 120, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', sizes: ['ONE SIZE'], badge: 'SALE' },
  { id: 4, name: 'Linen Wide Leg Pants', category: 'Women', price: 79, originalPrice: null, img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80', sizes: ['XS', 'S', 'M', 'L'], badge: 'NEW' },
  { id: 5, name: 'Graphic Art Hoodie', category: 'Unisex', price: 65, originalPrice: null, img: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80', sizes: ['S', 'M', 'L', 'XL', '2XL'], badge: null },
  { id: 6, name: 'Tailored Blazer Set', category: 'Women', price: 149, originalPrice: 200, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4868?w=400&q=80', sizes: ['XS', 'S', 'M', 'L'], badge: 'SALE' },
  { id: 7, name: 'Silk Slip Midi Dress', category: 'Women', price: 119, originalPrice: null, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80', sizes: ['XS', 'S', 'M', 'L'], badge: 'TRENDING' },
  { id: 8, name: 'Canvas Utility Tote', category: 'Accessories', price: 45, originalPrice: null, img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80', sizes: ['ONE SIZE'], badge: null },
]

export const homeProducts: Product[] = products

export function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const badgeColors = {
    SALE: { bg: '#f87171', text: '#fff' },
    NEW: { bg: '#7c3aed', text: '#fff' },
    TRENDING: { bg: '#fbbf24', text: '#000' },
  }

  const badgeColor = product.badge ? badgeColors[product.badge as keyof typeof badgeColors] : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl overflow-hidden relative group"
      style={{ background: '#252530' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '300px' }}>
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badge */}
        {product.badge && badgeColor && (
          <span
            className="absolute top-3 left-3 px-2 py-1 text-[10px] font-bold rounded tracking-widest uppercase"
            style={{ background: badgeColor.bg, color: badgeColor.text }}
          >
            {product.badge}
          </span>
        )}
        {/* Wishlist */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: isLiked ? '#7c3aed' : 'rgba(0,0,0,0.5)' }}
          aria-label="Wishlist"
        >
          <svg className="w-4 h-4" fill={isLiked ? '#fff' : 'none'} stroke={isLiked ? '#fff' : '#fff'} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        {/* Quick Add Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 right-0 p-3"
        >
          <button
            className="w-full py-2.5 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
            style={{ background: '#7c3aed' }}
          >
            Quick Add
          </button>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#9ca3af' }}>
          {product.category}
        </p>
        <p className="text-sm font-semibold mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
          {product.name}
        </p>
        {/* Size dots */}
        <div className="flex items-center gap-1 mb-3">
          {product.sizes.slice(0, 4).map((size) => (
            <span
              key={size}
              className="px-1.5 py-0.5 text-[9px] font-medium rounded border"
              style={{ borderColor: '#3a3a4a', color: '#9ca3af' }}
            >
              {size}
            </span>
          ))}
          {product.sizes.length > 4 && (
            <span className="text-[9px]" style={{ color: '#9ca3af' }}>+{product.sizes.length - 4}</span>
          )}
        </div>
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-base font-bold" style={{ color: '#f9fafb' }}>
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm line-through" style={{ color: '#9ca3af' }}>
              ${product.originalPrice}
            </span>
          )}
          {product.originalPrice && (
            <span className="text-xs font-semibold ml-1" style={{ color: '#f87171' }}>
              SALE
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ---- Section wrapper with useInView animation ----
function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// ---- Main Page ----
export default function HomePage() {
  const [newsletter, setNewsletter] = useState('')
  const [newsletterDone, setNewsletterDone] = useState(false)

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletter) { setNewsletterDone(true); setNewsletter('') }
  }

  const tickerText = 'FREE SHIPPING OVER $50 · NEW ARRIVALS EVERY WEEK · SUSTAINABLE FASHION · 30-DAY RETURNS · MADE WITH LOVE · '

  const categoryBanners = [
    { label: "WOMEN'S", img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80', btn: 'Shop Women' },
    { label: "MEN'S", img: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&q=80', btn: 'Shop Men' },
    { label: 'ACCESSORIES', img: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80', btn: 'Shop All' },
  ]

  const brandValues = [
    { icon: '♻️', title: 'Sustainable Materials', desc: 'Over 80% of our fabrics are made from recycled or organic sources.' },
    { icon: '🤝', title: 'Ethically Made', desc: 'Fair wages, safe conditions, and transparency throughout our supply chain.' },
    { icon: '🔄', title: 'Free 30-Day Returns', desc: 'Not in love with it? Send it back — free, no questions asked.' },
    { icon: '🌱', title: 'Carbon Neutral Shipping', desc: 'Every order shipped is offset through verified carbon credits.' },
  ]

  const instagramPhotos = [
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80',
    'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=400&q=80',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
  ]

  return (
    <div style={{ background: '#0d0d0f' }}>
      {/* ====== HERO ====== */}
      <section className="relative flex flex-col md:flex-row" style={{ minHeight: '100vh' }}>
        {/* Left: Editorial Text */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-16 md:py-0"
          style={{ background: '#0d0d0f', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-6"
            style={{ color: '#7c3aed' }}
          >
            Spring / Summer 2025 Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span style={{ color: '#f9fafb' }}>WEAR YOUR</span>
            <br />
            <span className="hero-gradient-text">STORY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-lg max-w-md mb-10 leading-relaxed"
            style={{ color: '#9ca3af' }}
          >
            Discover the new collection — where contemporary design meets timeless elegance. Fashion that speaks before you do.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-xl transition-all hover:scale-[1.03] hover:opacity-90"
              style={{ background: '#7c3aed' }}
            >
              Shop Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold rounded-xl border transition-all hover:scale-[1.03] hover:border-[#7c3aed]"
              style={{ borderColor: '#3a3a4a', color: '#f9fafb' }}
            >
              New Arrivals
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex gap-10 mt-14"
          >
            {[['50K+', 'Happy Customers'], ['200+', 'Styles Available'], ['4.9★', 'Avg. Rating']].map(([num, label]) => (
              <div key={label}>
                <p className="text-2xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>{num}</p>
                <p className="text-xs" style={{ color: '#9ca3af' }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Right: Fashion Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative hidden md:block"
          style={{ width: '45%', minHeight: '100vh' }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }} />
          <div className="absolute inset-y-0 left-0 w-32" style={{
            background: 'linear-gradient(to right, #0d0d0f, transparent)',
          }} />
          <div className="absolute inset-x-0 bottom-0 h-32" style={{
            background: 'linear-gradient(to top, #0d0d0f, transparent)',
          }} />
        </motion.div>
      </section>

      {/* ====== TICKER ====== */}
      <div className="overflow-hidden py-4 border-y" style={{ borderColor: '#1a1a1f', background: '#0d0d0f' }}>
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6 text-sm font-medium tracking-widest uppercase"
              style={{ color: '#9ca3af' }}>
              {tickerText.split('·').filter(Boolean).map((item, j) => (
                <span key={j} className="flex items-center gap-6">
                  {item.trim()}
                  <span style={{ color: '#7c3aed' }}>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ====== NEW ARRIVALS ====== */}
      <Section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={{ color: '#7c3aed' }}>
              Just Dropped
            </p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
              NEW IN
            </h2>
          </div>
          <Link to="/shop" className="text-sm font-medium transition-colors hover:text-[#a78bfa]"
            style={{ color: '#9ca3af' }}>
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ====== CATEGORY BANNERS ====== */}
      <Section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
            SHOP BY CATEGORY
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categoryBanners.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
              style={{ height: '320px' }}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${cat.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center">
                <h3 className="text-2xl font-black mb-3 tracking-wider" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                  {cat.label}
                </h3>
                <Link
                  to="/shop"
                  className="px-6 py-2.5 text-sm font-semibold text-white rounded-xl border border-white/40 backdrop-blur-sm transition-all hover:bg-white hover:text-black"
                >
                  {cat.btn}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ====== BRAND VALUES ====== */}
      <Section className="py-20 border-y" style={{ borderColor: '#1a1a1f' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-8 rounded-2xl"
                style={{ background: '#1a1a1f' }}
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h4 className="text-base font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                  {v.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ====== INSTAGRAM ====== */}
      <Section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={{ color: '#7c3aed' }}>
            Follow Our Journey
          </p>
          <h2 className="text-4xl font-black mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
            @novaofficial
          </h2>
          <p className="text-sm" style={{ color: '#9ca3af' }}>Real people, real style.</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
          {instagramPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square"
            >
              <img src={photo} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(124,58,237,0.6)' }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-xl border transition-all hover:border-[#7c3aed] hover:text-[#a78bfa]"
            style={{ borderColor: '#3a3a4a', color: '#9ca3af' }}
          >
            Follow Us on Instagram
          </a>
        </div>
      </Section>

      {/* ====== NEWSLETTER ====== */}
      <Section>
        <div className="py-24 px-6" style={{
          background: 'linear-gradient(135deg, #1a0533 0%, #0d0d0f 50%, #1a0d0d 100%)',
        }}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: '#a78bfa' }}>
              Exclusive Access
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
              JOIN THE NOVA FAMILY
            </h2>
            <p className="text-base mb-8" style={{ color: '#9ca3af' }}>
              Get 10% off your first order + exclusive early access to new drops, styling tips, and member-only sales.
            </p>
            {newsletterDone ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-6"
              >
                <p className="text-xl font-bold" style={{ color: '#a78bfa' }}>
                  You're in! Check your inbox for 10% off.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={newsletter}
                  onChange={(e) => setNewsletter(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-4 text-sm rounded-xl border outline-none focus:border-[#7c3aed] transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)', borderColor: '#3a3a4a', color: '#f9fafb' }}
                />
                <button
                  type="submit"
                  className="px-8 py-4 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: '#7c3aed', whiteSpace: 'nowrap' }}
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-xs mt-4" style={{ color: '#9ca3af' }}>
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
