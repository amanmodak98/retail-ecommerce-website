import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface BlogPost {
  id: number
  title: string
  category: string
  author: string
  date: string
  readTime: number
  excerpt: string
  img: string
  featured?: boolean
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Spring Capsule Wardrobe 2025',
    category: 'Style',
    author: 'Aria Chen',
    date: 'March 15, 2025',
    readTime: 6,
    excerpt: 'Building a timeless spring wardrobe doesn\'t require 50 pieces. We show you how 12 carefully chosen items can take you from coffee meetings to weekend escapes — and everywhere in between.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Our Sustainable Journey',
    category: 'Brand',
    author: 'Sofia Reyes',
    date: 'February 28, 2025',
    readTime: 7,
    excerpt: 'How NOVA went from a fast-fashion bystander to a B-Corp certified brand in just four years. Our honest account of the changes that were hard — and why they were worth it.',
    img: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&q=80',
  },
  {
    id: 3,
    title: 'How to Style Oversized Pieces',
    category: 'Style',
    author: 'Marcus Webb',
    date: 'February 12, 2025',
    readTime: 4,
    excerpt: 'The oversized trend isn\'t going anywhere. Whether it\'s a blazer three sizes up or a slouchy tee tucked into fitted trousers, here are the rules for making volume work for you.',
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80',
  },
  {
    id: 4,
    title: "Men's Style Guide: Office to Weekend",
    category: "Men's",
    author: 'Kai Nakamura',
    date: 'January 30, 2025',
    readTime: 5,
    excerpt: 'The modern man needs a wardrobe that transitions as smoothly as he does. Our complete guide to building a versatile capsule that handles boardroom Monday and brunch Saturday.',
    img: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80',
  },
  {
    id: 5,
    title: 'The Perfect White Tee Exists',
    category: 'Style',
    author: 'Aria Chen',
    date: 'January 14, 2025',
    readTime: 3,
    excerpt: 'We tested 40 white t-shirts over 3 months — different fabrics, weights, cuts, and wash cycles. Here\'s our honest verdict on what makes the platonic ideal white tee, and where to find it.',
    img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
  },
  {
    id: 6,
    title: 'Fashion Week SS25 Highlights',
    category: 'Trends',
    author: 'Marcus Webb',
    date: 'December 20, 2024',
    readTime: 6,
    excerpt: 'From the cobblestones of Paris to the converted warehouses of London, our creative director was on the ground for all four weeks. Here are the ten trends that will define your 2025 wardrobe.',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
  },
]

const tags = ['Style Tips', 'Sustainability', 'New Arrivals', 'Trend Report', "Men's", "Women's", 'Accessories', 'Capsule Wardrobe', 'Behind the Brand', 'Fashion Week']

const categoryColors: Record<string, string> = {
  Style: '#7c3aed',
  Brand: '#059669',
  "Men's": '#0891b2',
  Trends: '#f87171',
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const categories = ['All', 'Style', 'Brand', "Men's", 'Trends']

  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory)
  const featured = posts.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail) { setSubscribed(true); setNewsletterEmail('') }
  }

  return (
    <div style={{ background: '#0d0d0f', minHeight: '100vh' }}>
      {/* Page Header */}
      <div className="pt-28 pb-14 px-6" style={{ background: '#1a1a1f', borderBottom: '1px solid #252530' }}>
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: '#7c3aed' }}
          >
            Editorial
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}
          >
            THE JOURNAL
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base max-w-xl"
            style={{ color: '#9ca3af' }}
          >
            Style guides, brand stories, trend reports, and honest conversations about modern fashion.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-1.5 text-xs font-semibold rounded-full border transition-all"
                  style={{
                    borderColor: activeCategory === cat ? '#7c3aed' : '#3a3a4a',
                    background: activeCategory === cat ? '#7c3aed' : 'transparent',
                    color: activeCategory === cat ? '#fff' : '#9ca3af',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured Post */}
            {activeCategory === 'All' && featured && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 rounded-3xl overflow-hidden group cursor-pointer"
                style={{ background: '#1a1a1f' }}
              >
                <div className="relative overflow-hidden" style={{ height: '360px' }}>
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />
                  <span
                    className="absolute top-5 left-5 px-3 py-1 text-xs font-bold rounded-full"
                    style={{ background: '#7c3aed', color: '#fff' }}
                  >
                    FEATURED
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-3 py-1 text-xs font-semibold rounded-full"
                      style={{ background: `${categoryColors[featured.category]}22`, color: categoryColors[featured.category] }}
                    >
                      {featured.category}
                    </span>
                    <span className="text-xs" style={{ color: '#9ca3af' }}>{featured.date}</span>
                    <span className="text-xs" style={{ color: '#9ca3af' }}>{featured.readTime} min read</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black mb-3" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                    {featured.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#9ca3af' }}>{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt={featured.author} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-medium" style={{ color: '#9ca3af' }}>{featured.author}</span>
                    </div>
                    <Link to={`/blog/${featured.id}`} className="text-sm font-semibold transition-colors hover:text-[#a78bfa]"
                      style={{ color: '#7c3aed' }}>
                      Read Article →
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="rounded-2xl overflow-hidden group cursor-pointer"
                  style={{ background: '#1a1a1f' }}
                >
                  <div className="relative overflow-hidden" style={{ height: '200px' }}>
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 70%)' }} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-2 py-0.5 text-[10px] font-bold rounded-full"
                        style={{
                          background: `${categoryColors[post.category] ?? '#7c3aed'}22`,
                          color: categoryColors[post.category] ?? '#7c3aed',
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: '#9ca3af' }}>{post.readTime} min read</span>
                    </div>
                    <h3 className="font-black text-base mb-2 group-hover:text-[#a78bfa] transition-colors"
                      style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-4 line-clamp-3" style={{ color: '#9ca3af' }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: '#9ca3af' }}>{post.author} · {post.date}</span>
                      <Link to={`/blog/${post.id}`} className="text-xs font-semibold" style={{ color: '#7c3aed' }}>
                        Read →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 space-y-8">
            {/* Popular Posts */}
            <div className="p-6 rounded-2xl" style={{ background: '#1a1a1f' }}>
              <h3 className="text-sm font-black tracking-widest uppercase mb-5" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                Most Popular
              </h3>
              <div className="space-y-4">
                {posts.slice(0, 4).map((post, i) => (
                  <Link key={post.id} to={`/blog/${post.id}`}
                    className="flex gap-3 group">
                    <span className="text-2xl font-black flex-shrink-0 leading-none" style={{ color: '#252530', fontFamily: 'Syne, sans-serif' }}>
                      0{i + 1}
                    </span>
                    <div>
                      <p className="text-xs font-semibold group-hover:text-[#a78bfa] transition-colors" style={{ color: '#f9fafb' }}>
                        {post.title}
                      </p>
                      <p className="text-[10px] mt-0.5" style={{ color: '#9ca3af' }}>{post.readTime} min read</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="p-6 rounded-2xl" style={{ background: '#1a1a1f' }}>
              <h3 className="text-sm font-black tracking-widest uppercase mb-5" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1.5 text-xs rounded-lg border transition-all hover:border-[#7c3aed] hover:text-[#a78bfa]"
                    style={{ borderColor: '#252530', color: '#9ca3af' }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, #1a0533, #0d0d1a)' }}>
              <h3 className="text-sm font-black tracking-widest uppercase mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                Newsletter
              </h3>
              <p className="text-xs mb-4" style={{ color: '#9ca3af' }}>
                Get the latest articles and styling tips delivered to your inbox weekly.
              </p>
              {subscribed ? (
                <p className="text-sm font-medium" style={{ color: '#a78bfa' }}>Subscribed! 🎉</p>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-3 py-2.5 text-xs rounded-lg border outline-none focus:border-[#7c3aed] transition-colors"
                    style={{ background: 'rgba(255,255,255,0.05)', borderColor: '#3a3a4a', color: '#f9fafb' }}
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 text-xs font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
                    style={{ background: '#7c3aed' }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
