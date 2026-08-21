import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface Category {
  id: number
  name: string
  description: string
  img: string
  count: number
  subCategories: string[]
}

const categories: Category[] = [
  {
    id: 1,
    name: "Women's",
    description: "From effortless basics to editorial statement pieces.",
    img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
    count: 124,
    subCategories: ['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Knitwear', 'Loungewear'],
  },
  {
    id: 2,
    name: "Men's",
    description: "Sharp tailoring and relaxed essentials for the modern man.",
    img: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80',
    count: 98,
    subCategories: ['Shirts', 'Trousers', 'Jackets', 'Knitwear', 'Denim', 'Accessories'],
  },
  {
    id: 3,
    name: 'Kids',
    description: "Playful, durable, and designed for life at full speed.",
    img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&q=80',
    count: 67,
    subCategories: ['Girls', 'Boys', 'Unisex', 'Baby', 'Shoes', 'Sets'],
  },
  {
    id: 4,
    name: 'Bags',
    description: "Structured, slouchy, everyday totes to evening clutches.",
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    count: 45,
    subCategories: ['Totes', 'Shoulder Bags', 'Cross-body', 'Clutches', 'Backpacks', 'Belt Bags'],
  },
  {
    id: 5,
    name: 'Shoes',
    description: "Step into something extraordinary — every occasion covered.",
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    count: 82,
    subCategories: ['Sneakers', 'Heels', 'Boots', 'Loafers', 'Sandals', 'Flats'],
  },
  {
    id: 6,
    name: 'Activewear',
    description: "Performance fabric meets minimal aesthetic for your best workout.",
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    count: 53,
    subCategories: ['Leggings', 'Sports Bras', 'Shorts', 'Tops', 'Jackets', 'Sets'],
  },
]

export default function CategoriesPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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
            Browse
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}
          >
            CATEGORIES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base max-w-lg"
            style={{ color: '#9ca3af' }}
          >
            Explore every corner of NOVA — curated collections for every style and every occasion.
          </motion.p>
        </div>
      </div>

      {/* Main Categories — Asymmetric Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
          {/* Large Women's card */}
          {categories.slice(0, 1).map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-7 relative overflow-hidden rounded-3xl group cursor-pointer"
              style={{ height: '480px' }}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)' }} />
              <motion.div
                animate={{ opacity: hoveredId === cat.id ? 1 : 0 }}
                className="absolute inset-0"
                style={{ background: 'rgba(124,58,237,0.15)' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#a78bfa' }}>
                  {cat.count} items
                </p>
                <h2 className="text-4xl font-black mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                  {cat.name}
                </h2>
                <motion.p
                  animate={{ opacity: hoveredId === cat.id ? 1 : 0, y: hoveredId === cat.id ? 0 : 10 }}
                  className="text-sm mb-4"
                  style={{ color: '#9ca3af' }}
                >
                  {cat.description}
                </motion.p>
                <Link
                  to="/shop"
                  className="self-start px-6 py-2.5 text-sm font-semibold text-white rounded-xl border border-white/30 backdrop-blur-sm transition-all hover:bg-white hover:text-black"
                >
                  Shop {cat.name}
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Men's + Kids stacked */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {categories.slice(1, 3).map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
                className="relative overflow-hidden rounded-3xl group cursor-pointer flex-1"
                style={{ height: '228px' }}
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />
                <motion.div
                  animate={{ opacity: hoveredId === cat.id ? 1 : 0 }}
                  className="absolute inset-0"
                  style={{ background: 'rgba(124,58,237,0.12)' }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#a78bfa' }}>
                    {cat.count} items
                  </p>
                  <h2 className="text-2xl font-black mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                    {cat.name}
                  </h2>
                  <Link to="/shop" className="self-start px-4 py-1.5 text-xs font-semibold text-white rounded-lg border border-white/30 transition-all hover:bg-white hover:text-black">
                    Shop
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bags, Shoes, Activewear row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.slice(3).map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="relative overflow-hidden rounded-3xl group cursor-pointer"
              style={{ height: '320px' }}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)' }} />
              <motion.div
                animate={{ opacity: hoveredId === cat.id ? 1 : 0 }}
                className="absolute inset-0"
                style={{ background: 'rgba(124,58,237,0.15)' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#a78bfa' }}>
                  {cat.count} items
                </p>
                <h2 className="text-2xl font-black mb-1" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                  {cat.name}
                </h2>
                <motion.p
                  animate={{ opacity: hoveredId === cat.id ? 1 : 0, y: hoveredId === cat.id ? 0 : 8 }}
                  className="text-xs mb-3"
                  style={{ color: '#9ca3af' }}
                >
                  {cat.description}
                </motion.p>
                <Link to="/shop" className="self-start px-4 py-1.5 text-xs font-semibold text-white rounded-lg border border-white/30 transition-all hover:bg-white hover:text-black">
                  Shop
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sub-categories */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-black mb-8" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
          Browse Sub-categories
        </h2>
        <div className="space-y-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#9ca3af' }}>
                {cat.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.subCategories.map((sub) => (
                  <Link
                    key={sub}
                    to="/shop"
                    className="px-4 py-2 text-sm font-medium rounded-lg border transition-all hover:border-[#7c3aed] hover:text-[#a78bfa]"
                    style={{ borderColor: '#252530', color: '#9ca3af', background: '#1a1a1f' }}
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
