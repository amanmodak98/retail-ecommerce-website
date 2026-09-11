import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Categories', path: '/categories' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(3)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 shadow-2xl'
          : ''
      }`}
      style={{
        background: scrolled ? 'rgba(13,13,15,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl tracking-widest"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #7c3aed, #f87171)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          NOVA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive
                    ? 'text-[#a78bfa]'
                    : 'text-[#9ca3af] hover:text-[#f9fafb]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <button
            className="relative p-2 text-[#9ca3af] hover:text-[#f9fafb] transition-colors"
            aria-label="Shopping bag"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                style={{ background: '#7c3aed' }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Shop Now CTA */}
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-medium text-white rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: '#7c3aed' }}
          >
            Shop Now
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-[#9ca3af] hover:text-[#f9fafb] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5"
            style={{ background: 'rgba(13,13,15,0.98)', backdropFilter: 'blur(12px)' }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-3 px-2 text-sm font-medium rounded-lg transition-colors border-b border-white/5 last:border-0 ${
                      isActive
                        ? 'text-[#a78bfa]'
                        : 'text-[#9ca3af] hover:text-[#f9fafb]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/shop"
                onClick={() => setMobileOpen(false)}
                className="mt-3 px-5 py-3 text-sm font-medium text-white rounded-lg text-center transition-opacity hover:opacity-90"
                style={{ background: '#7c3aed' }}
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
