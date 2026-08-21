import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3–5 business days. Express shipping (1–2 business days) is available at checkout. Free standard shipping on all orders over $50. International orders typically arrive within 7–14 business days.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer free 30-day returns on all full-price items. Items must be in their original condition with tags attached. Sale items are final sale unless otherwise noted. To initiate a return, visit our returns portal or email us at returns@novaofficial.com.',
  },
  {
    question: 'How do I find my size?',
    answer: 'We recommend using our size chart below. If you\'re between sizes, size up for a relaxed fit or size down for a fitted look. Each product page also includes fit notes from our team. Still unsure? Our style advisors are available via live chat.',
  },
  {
    question: 'Do you offer price adjustments?',
    answer: 'We offer one-time price adjustments within 14 days of purchase if an item goes on sale. Contact our customer service team with your order number and we\'ll process the difference as store credit.',
  },
  {
    question: 'Can I change or cancel my order?',
    answer: 'Orders can be modified or cancelled within 1 hour of placement. After that, our fulfilment system processes orders automatically. If your order has shipped, you\'ll need to initiate a return once received.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and Klarna (buy now, pay later in 4 instalments). All transactions are secured with 256-bit SSL encryption.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes! We ship to 42 countries worldwide. International shipping rates and delivery times vary by destination. Import duties and taxes may apply and are the responsibility of the customer. We\'ll provide an estimated duty cost at checkout.',
  },
  {
    question: 'How do I care for my NOVA garments?',
    answer: 'Each garment includes a care label with specific instructions. Generally, we recommend cold machine wash or hand wash, and air drying to extend the life of your pieces. Avoid tumble drying natural fibres. Our sustainable packaging includes a QR code linking to full care guides.',
  },
]

const womenSizes = [
  { nova: 'XS', eu: '34', uk: '6', us: '2', bust: '81–84', waist: '63–66', hips: '89–92' },
  { nova: 'S', eu: '36', uk: '8', us: '4', bust: '85–88', waist: '67–70', hips: '93–96' },
  { nova: 'M', eu: '38', uk: '10', us: '6', bust: '89–93', waist: '71–75', hips: '97–101' },
  { nova: 'L', eu: '40', uk: '12', us: '8', bust: '94–98', waist: '76–80', hips: '102–106' },
  { nova: 'XL', eu: '42', uk: '14', us: '10', bust: '99–104', waist: '81–86', hips: '107–112' },
]

const menSizes = [
  { nova: 'S', eu: '44', uk: '34', us: 'S', chest: '86–91', waist: '71–76', hips: '89–94' },
  { nova: 'M', eu: '46', uk: '36', us: 'M', chest: '92–97', waist: '77–82', hips: '95–100' },
  { nova: 'L', eu: '48', uk: '38', us: 'L', chest: '98–103', waist: '83–88', hips: '101–106' },
  { nova: 'XL', eu: '50', uk: '40', us: 'XL', chest: '104–109', waist: '89–94', hips: '107–112' },
  { nova: '2XL', eu: '52', uk: '42', us: 'XXL', chest: '110–115', waist: '95–100', hips: '113–118' },
]

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="rounded-xl overflow-hidden" style={{ background: '#1a1a1f' }}>
          <button
            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-sm font-semibold" style={{ color: '#f9fafb' }}>{item.question}</span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 text-xl font-light"
              style={{ color: '#7c3aed' }}
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'hidden' }}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [activeSizeTab, setActiveSizeTab] = useState<'women' | 'men'>('women')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const serviceChannels = [
    {
      icon: '✉️',
      title: 'Email Support',
      detail: 'hello@novaofficial.com',
      time: 'Response within 24 hours',
    },
    {
      icon: '💬',
      title: 'Live Chat',
      detail: 'Available on-site',
      time: 'Instant response',
    },
    {
      icon: '📞',
      title: 'Phone',
      detail: '+1 (888) 668-2000',
      time: 'Mon–Fri, 9am–6pm EST',
    },
    {
      icon: '📦',
      title: 'Returns Portal',
      detail: 'returns.novaofficial.com',
      time: 'Self-service, 24/7',
    },
  ]

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
            We're Here to Help
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}
          >
            CONTACT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base max-w-lg"
            style={{ color: '#9ca3af' }}
          >
            Questions, feedback, or just want to say hi? Our team is ready to help — every message is read by a real person.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Contact Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <FadeIn>
            <div className="p-8 rounded-3xl" style={{ background: '#1a1a1f' }}>
              <h2 className="text-2xl font-black mb-6" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                Send a Message
              </h2>
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-12 text-center"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: '#9ca3af' }}>
                    We'll get back to you within 24 hours at {form.email}.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-6 px-6 py-2.5 text-sm font-semibold text-white rounded-xl"
                    style={{ background: '#7c3aed' }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium block mb-1.5" style={{ color: '#9ca3af' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Doe"
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl border outline-none focus:border-[#7c3aed] transition-colors"
                        style={{ background: '#252530', borderColor: '#3a3a4a', color: '#f9fafb' }}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium block mb-1.5" style={{ color: '#9ca3af' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@example.com"
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl border outline-none focus:border-[#7c3aed] transition-colors"
                        style={{ background: '#252530', borderColor: '#3a3a4a', color: '#f9fafb' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1.5" style={{ color: '#9ca3af' }}>
                      Subject *
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 text-sm rounded-xl border outline-none focus:border-[#7c3aed] transition-colors"
                      style={{ background: '#252530', borderColor: '#3a3a4a', color: form.subject ? '#f9fafb' : '#9ca3af' }}
                    >
                      <option value="">Select a topic…</option>
                      <option>Order Status</option>
                      <option>Returns & Exchanges</option>
                      <option>Sizing Help</option>
                      <option>Product Question</option>
                      <option>Wholesale Inquiry</option>
                      <option>Press & Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1.5" style={{ color: '#9ca3af' }}>
                      Message *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help…"
                      required
                      rows={5}
                      className="w-full px-4 py-3 text-sm rounded-xl border outline-none focus:border-[#7c3aed] transition-colors resize-none"
                      style={{ background: '#252530', borderColor: '#3a3a4a', color: '#f9fafb' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90"
                    style={{ background: '#7c3aed' }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Customer Service Info */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                  Customer Service
                </h2>
                <p className="text-sm" style={{ color: '#9ca3af' }}>
                  Multiple ways to reach us — choose what works best for you.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceChannels.map((ch) => (
                  <div key={ch.title} className="p-5 rounded-2xl border" style={{ background: '#1a1a1f', borderColor: '#252530' }}>
                    <div className="text-2xl mb-3">{ch.icon}</div>
                    <h4 className="text-sm font-bold mb-1" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                      {ch.title}
                    </h4>
                    <p className="text-xs font-medium mb-1" style={{ color: '#a78bfa' }}>{ch.detail}</p>
                    <p className="text-xs" style={{ color: '#9ca3af' }}>{ch.time}</p>
                  </div>
                ))}
              </div>

              {/* Returns Policy Summary */}
              <div className="p-6 rounded-2xl border" style={{ background: '#1a1a1f', borderColor: '#252530' }}>
                <h3 className="text-base font-black mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                  Returns Policy
                </h3>
                <ul className="space-y-2">
                  {[
                    '30-day free returns on full-price items',
                    'Items must have original tags attached',
                    'Return label emailed within 1 business day',
                    'Refund processed within 5–7 business days',
                    'Exchanges available for different sizes/colours',
                    'Sale items are final sale',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2 text-xs" style={{ color: '#9ca3af' }}>
                      <span style={{ color: '#7c3aed', flexShrink: 0 }}>✓</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Size Chart */}
        <FadeIn>
          <div className="mb-20">
            <h2 className="text-3xl font-black mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
              SIZE GUIDE
            </h2>
            <p className="text-sm mb-6" style={{ color: '#9ca3af' }}>
              All measurements in centimetres. When in doubt, size up.
            </p>
            <div className="flex gap-3 mb-6">
              {(['women', 'men'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSizeTab(tab)}
                  className="px-5 py-2 text-sm font-semibold rounded-lg transition-all capitalize"
                  style={{
                    background: activeSizeTab === tab ? '#7c3aed' : '#1a1a1f',
                    color: activeSizeTab === tab ? '#fff' : '#9ca3af',
                  }}
                >
                  {tab === 'women' ? "Women's" : "Men's"}
                </button>
              ))}
            </div>
            <div className="overflow-x-auto rounded-2xl">
              <table className="w-full text-sm" style={{ background: '#1a1a1f' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #252530' }}>
                    {(activeSizeTab === 'women'
                      ? ['NOVA', 'EU', 'UK', 'US', 'Bust (cm)', 'Waist (cm)', 'Hips (cm)']
                      : ['NOVA', 'EU', 'UK', 'US', 'Chest (cm)', 'Waist (cm)', 'Hips (cm)']
                    ).map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest"
                        style={{ color: '#9ca3af' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(activeSizeTab === 'women' ? womenSizes : menSizes).map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #252530' }}
                      className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 text-xs font-bold" style={{ color: '#a78bfa' }}>{row.nova}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: '#f9fafb' }}>{row.eu}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: '#f9fafb' }}>{row.uk}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: '#f9fafb' }}>{row.us}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: '#9ca3af' }}>
                        {activeSizeTab === 'women' ? (row as typeof womenSizes[0]).bust : (row as typeof menSizes[0]).chest}
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: '#9ca3af' }}>{row.waist}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: '#9ca3af' }}>{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* FAQ */}
        <FadeIn>
          <div className="mb-20">
            <h2 className="text-3xl font-black mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
              FAQ
            </h2>
            <p className="text-sm mb-8" style={{ color: '#9ca3af' }}>
              Quick answers to our most common questions.
            </p>
            <FaqAccordion items={faqs} />
          </div>
        </FadeIn>

        {/* Shipping Info */}
        <FadeIn>
          <div className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #0d0d1a 100%)' }}>
            <h2 className="text-2xl font-black mb-6" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
              Shipping Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'Standard Shipping', detail: '3–5 business days', price: 'Free on orders $50+\n$5.99 under $50' },
                { title: 'Express Shipping', detail: '1–2 business days', price: '$14.99 flat rate' },
                { title: 'International', detail: '7–14 business days', price: 'From $19.99\n42 countries' },
              ].map((s) => (
                <div key={s.title} className="p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #3a3a4a' }}>
                  <h4 className="font-bold text-sm mb-1" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                    {s.title}
                  </h4>
                  <p className="text-xs font-medium mb-2" style={{ color: '#a78bfa' }}>{s.detail}</p>
                  <p className="text-xs whitespace-pre-line" style={{ color: '#9ca3af' }}>{s.price}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
