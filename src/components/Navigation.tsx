import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation({ onOpenAssistant }: { onOpenAssistant: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        borderBottom: scrolled ? '1px solid rgba(15,90,71,0.08)' : '1px solid transparent',
        background: scrolled ? 'rgba(248,248,244,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
      }}
    >
      <nav
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: '#0F5A47',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
          onClick={() => handleNav('#home')}
        >
          Cherutich.
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.01em',
                color: active === link.href ? '#0F5A47' : '#55635D',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => { if (active !== link.href) (e.target as HTMLElement).style.color = '#0F5A47' }}
              onMouseLeave={(e) => { if (active !== link.href) (e.target as HTMLElement).style.color = '#55635D' }}
            >
              {link.label}
              {active === link.href && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '1.5px',
                    background: '#0F5A47',
                    borderRadius: '1px',
                  }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onOpenAssistant}
            className="hidden-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 16px',
              borderRadius: '100px',
              background: '#0F5A47',
              color: '#fff',
              fontSize: '0.78rem',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.01em',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#123F35' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0F5A47' }}
          >
            <span style={{ width: '6px', height: '6px', background: '#6EE7B7', borderRadius: '50%', display: 'inline-block' }} />
            AI Assistant
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '1.5px',
                  background: '#15231E',
                  borderRadius: '1px',
                  transition: 'all 0.3s ease',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'scaleX(0)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(248,248,244,0.97)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(15,90,71,0.08)',
            padding: '20px 32px 28px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '1rem',
                fontWeight: 500,
                color: active === link.href ? '#0F5A47' : '#15231E',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(15,90,71,0.06)',
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { onOpenAssistant(); setMenuOpen(false) }}
            style={{
              marginTop: '20px',
              width: '100%',
              padding: '12px',
              borderRadius: '12px',
              background: '#0F5A47',
              color: '#fff',
              fontSize: '0.9rem',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Open AI Assistant
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
