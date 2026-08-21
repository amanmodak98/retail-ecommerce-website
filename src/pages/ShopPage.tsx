import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { type Product, ProductCard, homeProducts } from './HomePage'

const extraProducts: Product[] = [
  { id: 9, name: 'Cotton Ribbed Tank', category: 'Women', price: 29, originalPrice: null, img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80', sizes: ['XS', 'S', 'M', 'L', 'XL'], badge: 'NEW' },
  { id: 10, name: 'Classic Denim Jacket', category: 'Men', price: 99, originalPrice: 130, img: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=400&q=80', sizes: ['S', 'M', 'L', 'XL', '2XL'], badge: 'SALE' },
  { id: 11, name: 'Wrap Midi Skirt', category: 'Women', price: 55, originalPrice: null, img: 'https://images.unsplash.com/photo-1583496661160-fb5886a773dc?w=400&q=80', sizes: ['XS', 'S', 'M', 'L'], badge: null },
  { id: 12, name: 'Knit Polo Shirt', category: 'Men', price: 59, originalPrice: null, img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80', sizes: ['S', 'M', 'L', 'XL'], badge: null },
  { id: 13, name: 'Mini Cross-body Bag', category: 'Accessories', price: 65, originalPrice: null, img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80', sizes: ['ONE SIZE'], badge: 'TRENDING' },
  { id: 14, name: 'High Waist Flare Jeans', category: 'Women', price: 89, originalPrice: 110, img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80', sizes: ['24', '26', '28', '30', '32'], badge: 'SALE' },
  { id: 15, name: 'Merino Wool Crew Neck', category: 'Men', price: 85, originalPrice: null, img: 'https://images.unsplash.com/photo-1599744331096-70c8ce71d4b7?w=400&q=80', sizes: ['S', 'M', 'L', 'XL'], badge: null },
  { id: 16, name: 'Kids Rainbow Tee Set', category: 'Kids', price: 35, originalPrice: null, img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80', sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'], badge: 'NEW' },
]

const allProducts: Product[] = [...homeProducts, ...extraProducts]

type PriceFilter = 'all' | 'under50' | '50to100' | '100to200' | '200plus'
type SortOrder = 'newest' | 'low-high' | 'high-low' | 'popular'

const categories = ['All', 'Women', 'Men', 'Kids', 'Accessories']
const allSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '30', '32', '34', '36', 'ONE SIZE']

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [priceFilter, setPriceFilter] = useState<PriceFilter>('all')
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest')

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    )
  }

  const filtered = useMemo(() => {
    let result = [...allProducts]

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (priceFilter === 'under50') result = result.filter((p) => p.price < 50)
    else if (priceFilter === '50to100') result = result.filter((p) => p.price >= 50 && p.price <= 100)
    else if (priceFilter === '100to200') result = result.filter((p) => p.price > 100 && p.price <= 200)
    else if (priceFilter === '200plus') result = result.filter((p) => p.price > 200)

    if (selectedSizes.length > 0) {
      result = result.filter((p) => p.sizes.some((s) => selectedSizes.includes(s)))
    }

    if (sortOrder === 'low-high') result.sort((a, b) => a.price - b.price)
    else if (sortOrder === 'high-low') result.sort((a, b) => b.price - a.price)
    else if (sortOrder === 'popular') result.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0))

    return result
  }, [activeCategory, priceFilter, selectedSizes, sortOrder])

  return (
    <div style={{ background: '#0d0d0f', minHeight: '100vh' }}>
      {/* Page Header */}
      <div className="pt-24 pb-10 px-6" style={{ background: '#1a1a1f', borderBottom: '1px solid #252530' }}>
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-2"
            style={{ color: '#7c3aed' }}
          >
            All Products
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}
          >
            SHOP
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="sticky top-16 z-30 py-4 mb-8 rounded-2xl px-5 border"
          style={{ background: '#1a1a1f', borderColor: '#252530' }}>
          <div className="flex flex-wrap gap-4 items-start">
            {/* Category */}
            <div className="flex flex-wrap gap-2">
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

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 self-center" style={{ background: '#3a3a4a' }} />

            {/* Price */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'under50', '50to100', '100to200', '200plus'] as PriceFilter[]).map((p) => {
                const labels = { all: 'All', under50: 'Under $50', '50to100': '$50–$100', '100to200': '$100–$200', '200plus': '$200+' }
                return (
                  <button
                    key={p}
                    onClick={() => setPriceFilter(p)}
                    className="px-3 py-1.5 text-xs font-medium rounded-full border transition-all"
                    style={{
                      borderColor: priceFilter === p ? '#7c3aed' : '#3a3a4a',
                      background: priceFilter === p ? 'rgba(124,58,237,0.15)' : 'transparent',
                      color: priceFilter === p ? '#a78bfa' : '#9ca3af',
                    }}
                  >
                    {labels[p]}
                  </button>
                )
              })}
            </div>

            {/* Sort */}
            <div className="ml-auto">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                className="px-3 py-1.5 text-xs rounded-lg border outline-none"
                style={{ background: '#252530', borderColor: '#3a3a4a', color: '#9ca3af' }}
              >
                <option value="newest">Newest</option>
                <option value="low-high">Price: Low–High</option>
                <option value="high-low">Price: High–Low</option>
                <option value="popular">Popular</option>
              </select>
            </div>
          </div>

          {/* Sizes */}
          <div className="flex flex-wrap gap-2 mt-3 pt-3" style={{ borderTop: '1px solid #252530' }}>
            <span className="text-xs self-center mr-1" style={{ color: '#9ca3af' }}>Size:</span>
            {allSizes.map((size) => (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className="px-2.5 py-1 text-[10px] font-medium rounded border transition-all"
                style={{
                  borderColor: selectedSizes.includes(size) ? '#7c3aed' : '#3a3a4a',
                  background: selectedSizes.includes(size) ? 'rgba(124,58,237,0.2)' : 'transparent',
                  color: selectedSizes.includes(size) ? '#a78bfa' : '#9ca3af',
                }}
              >
                {size}
              </button>
            ))}
            {selectedSizes.length > 0 && (
              <button
                onClick={() => setSelectedSizes([])}
                className="px-2.5 py-1 text-[10px] rounded border"
                style={{ borderColor: '#f87171', color: '#f87171' }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm mb-6" style={{ color: '#9ca3af' }}>
          Showing <span style={{ color: '#f9fafb' }}>{filtered.length}</span> products
        </p>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-3xl mb-3">🔍</p>
            <p className="text-lg font-semibold" style={{ color: '#f9fafb' }}>No products found</p>
            <p className="text-sm mt-2" style={{ color: '#9ca3af' }}>Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-16 pb-8">
          {[1, 2, 3, '...', 8].map((page, i) => (
            <button
              key={i}
              className="w-9 h-9 rounded-lg text-sm font-medium border transition-all"
              style={{
                borderColor: page === 1 ? '#7c3aed' : '#3a3a4a',
                background: page === 1 ? '#7c3aed' : 'transparent',
                color: page === 1 ? '#fff' : '#9ca3af',
              }}
            >
              {page}
            </button>
          ))}
          <button
            className="w-9 h-9 rounded-lg text-sm border transition-all hover:border-[#7c3aed]"
            style={{ borderColor: '#3a3a4a', color: '#9ca3af' }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
