import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

const teamMembers = [
  { name: 'Aria Chen', role: 'Founder & Creative Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80', bio: 'Founded NOVA in 2018 with a vision to democratize luxury fashion.' },
  { name: 'Marcus Webb', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80', bio: 'Former head designer at Acne Studios and COS. 12 years in fashion.' },
  { name: 'Sofia Reyes', role: 'Sustainability Lead', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80', bio: 'Pioneer in circular fashion with a background in environmental science.' },
  { name: 'Kai Nakamura', role: 'Brand Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80', bio: 'Built brand strategies for global luxury houses across Asia and Europe.' },
  { name: 'Priya Sharma', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80', bio: 'Streamlined NOVA\'s supply chain to be 90% transparent and traceable.' },
  { name: 'Luca Moretti', role: 'Creative Photographer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80', bio: 'Visual storyteller behind NOVA\'s signature editorial photography.' },
]

const impactStats = [
  { number: '80%', label: 'Recycled & Organic Materials' },
  { number: '0', label: 'Landfill Waste Since 2022' },
  { number: '100%', label: 'Renewable Energy in Production' },
  { number: '50K+', label: 'Trees Planted via Offset Program' },
]

const pressLogos = [
  { name: 'Vogue', quote: '"NOVA is redefining accessible luxury"' },
  { name: 'GQ', quote: '"The best dressed brand of 2024"' },
  { name: "Harper's Bazaar", quote: '"Fashion with a conscience"' },
  { name: 'Hypebeast', quote: '"The brand everyone is talking about"' },
  { name: 'Business of Fashion', quote: '"A masterclass in brand building"' },
]

const values = [
  {
    icon: '✦',
    title: 'Quality Without Compromise',
    desc: 'Every garment is crafted to last. We use only premium fabrics rigorously tested for durability, comfort, and sustainability. Our quality standard means fewer replacements and less waste.',
  },
  {
    icon: '❤️',
    title: 'Radical Inclusivity',
    desc: 'Style has no size, age, or background. We design for all bodies, offer inclusive sizing from XS to 4XL, and feature real people in every campaign.',
  },
  {
    icon: '🌱',
    title: 'Planet-First Fashion',
    desc: 'B-Corp certified since 2023. We use deadstock fabrics, recycled packaging, and carbon-neutral shipping. Fashion and responsibility aren\'t opposites.',
  },
  {
    icon: '⚡',
    title: 'Relentless Innovation',
    desc: 'From bio-based dyes to AI-powered size recommendations, we constantly invest in technology that makes fashion better for everyone.',
  },
]

export default function AboutPage() {
  return (
    <div style={{ background: '#0d0d0f', minHeight: '100vh' }}>
      {/* Hero */}
      <div className="relative pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.12,
            }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, #0d0d0f 100%)' }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-32 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#7c3aed' }}
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-none"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}
          >
            FASHION THAT<br />
            <span className="hero-gradient-text">MEANS SOMETHING</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: '#9ca3af' }}
          >
            Founded in 2018 in London by Aria Chen, NOVA was born from a simple belief: that beautiful, sustainable clothing shouldn't be a luxury for the few — it should be accessible to everyone.
          </motion.p>
        </div>
      </div>

      {/* Brand Story */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
                  alt="NOVA Founder Aria Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl"
                style={{ background: '#7c3aed', maxWidth: '200px' }}>
                <p className="text-4xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#fff' }}>2018</p>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>Founded in London</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: '#7c3aed' }}>
              The Beginning
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
              Born from frustration,<br />built with purpose.
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#9ca3af' }}>
              <p>
                Aria Chen spent a decade in fashion buying for major retailers and watched, with growing unease, the cycle of waste: beautifully made clothes ending up in landfills, workers underpaid in unsafe conditions, and consumers left with lower quality each season.
              </p>
              <p>
                She left it all behind to build something better. NOVA launched from a small East London studio with six pieces and a manifesto: clothes that are made to last, made fairly, and made beautifully.
              </p>
              <p>
                Today, NOVA ships to 42 countries, employs 200+ people globally, and has been featured in Vogue, GQ, and Harper's Bazaar — but the mission hasn't changed. Every decision still asks the same question: is this right for the people wearing it and the planet we all live on?
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 border-y" style={{ borderColor: '#1a1a1f' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#7c3aed' }}>
                What We Stand For
              </p>
              <h2 className="text-4xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                OUR VALUES
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border" style={{ background: '#1a1a1f', borderColor: '#252530' }}>
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#7c3aed' }}>
              The People Behind NOVA
            </p>
            <h2 className="text-4xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
              MEET THE TEAM
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-center"
              >
                <div className="rounded-2xl overflow-hidden mb-4 mx-auto" style={{ width: '100%', aspectRatio: '1/1', maxWidth: '220px' }}>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                  {member.name}
                </h4>
                <p className="text-xs font-medium mt-0.5 mb-2" style={{ color: '#7c3aed' }}>
                  {member.role}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>{member.bio}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #0d0d0f 50%, #0d1a0d 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#7c3aed' }}>
                B-Corp Certified Since 2023
              </p>
              <h2 className="text-4xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                OUR IMPACT
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl border" style={{ background: 'rgba(255,255,255,0.03)', borderColor: '#252530' }}>
                  <p className="text-4xl font-black mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#a78bfa' }}>
                    {stat.number}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Press */}
      <div className="py-20 border-t" style={{ borderColor: '#1a1a1f' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#9ca3af' }}>
                As Seen In
              </p>
              <h2 className="text-3xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                PRESS & RECOGNITION
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {pressLogos.map((press, i) => (
              <FadeIn key={press.name} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border text-center" style={{ background: '#1a1a1f', borderColor: '#252530' }}>
                  <p className="font-black text-lg mb-3" style={{ fontFamily: 'Syne, sans-serif', color: '#f9fafb' }}>
                    {press.name}
                  </p>
                  <p className="text-xs italic leading-relaxed" style={{ color: '#9ca3af' }}>
                    {press.quote}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
