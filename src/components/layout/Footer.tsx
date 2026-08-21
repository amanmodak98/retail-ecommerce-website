import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const shopLinks = [
  { name: "New Arrivals", path: "/shop" },
  { name: "Women's", path: "/categories" },
  { name: "Men's", path: "/categories" },
  { name: "Kids", path: "/categories" },
  { name: "Accessories", path: "/categories" },
  { name: "Sale", path: "/shop" },
]

const companyLinks = [
  { name: "About NOVA", path: "/about" },
  { name: "Our Story", path: "/about" },
  { name: "Sustainability", path: "/about" },
  { name: "Careers", path: "/about" },
  { name: "Press", path: "/about" },
  { name: "Blog", path: "/blog" },
]

const serviceLinks = [
  { name: "Contact Us", path: "/contact" },
  { name: "Shipping Info", path: "/contact" },
  { name: "Returns & Exchanges", path: "/contact" },
  { name: "Size Guide", path: "/contact" },
  { name: "FAQ", path: "/contact" },
]

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.79 1.52V6.78a4.85 4.85 0 01-1.02-.09z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer style={{ background: '#050507' }}>
      {/* Free Shipping Bar */}
      <div className="py-3 text-center text-sm font-medium tracking-widest uppercase"
        style={{ background: '#7c3aed', color: '#fff' }}>
        Free Shipping On All Orders Over $50 &nbsp;·&nbsp; Use Code: <span className="font-bold">NOVA50</span>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div
              className="text-3xl tracking-widest mb-3"
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
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#9ca3af' }}>
              Style that speaks for itself. Modern fashion & lifestyle brand built on quality, inclusivity, and sustainability.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, color: '#a78bfa' }}
                  className="transition-colors"
                  style={{ color: '#9ca3af' }}
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#f9fafb' }}>
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-[#a78bfa]"
                    style={{ color: '#9ca3af' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#f9fafb' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-[#a78bfa]"
                    style={{ color: '#9ca3af' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service + Newsletter */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#f9fafb' }}>
              Customer Service
            </h4>
            <ul className="space-y-3 mb-8">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-[#a78bfa]"
                    style={{ color: '#9ca3af' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#f9fafb' }}>
                Newsletter
              </p>
              <p className="text-xs mb-3" style={{ color: '#9ca3af' }}>
                Get 10% off your first order.
              </p>
              {subscribed ? (
                <p className="text-sm font-medium" style={{ color: '#a78bfa' }}>
                  Thanks for subscribing!
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg border outline-none focus:border-[#7c3aed] transition-colors"
                    style={{
                      background: '#1a1a1f',
                      borderColor: '#252530',
                      color: '#f9fafb',
                    }}
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 text-sm font-medium text-white rounded-lg transition-opacity hover:opacity-90"
                    style={{ background: '#7c3aed' }}
                  >
                    Go
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderColor: '#1a1a1f' }}>
        <p className="text-xs" style={{ color: '#9ca3af' }}>
          © 2025 NOVA Fashion. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: '#9ca3af' }}>Designed &amp; Developed by <a href="https://www.infirexa.tech" target="_blank" rel="noopener noreferrer">Infirexa</a></p>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {['VISA', 'Mastercard', 'AMEX', 'PayPal', 'Apple Pay', 'Klarna'].map((method) => (
            <span
              key={method}
              className="px-2 py-1 text-[10px] font-medium rounded border tracking-wide"
              style={{ borderColor: '#252530', color: '#9ca3af', background: '#1a1a1f' }}
            >
              {method}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
