import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1400)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1.5px solid rgba(15,90,71,0.12)',
    background: '#F8F8F4',
    fontSize: '0.88rem',
    color: '#15231E',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box' as const,
  }

  return (
    <section
      id="contact"
      style={{ padding: '120px 0', background: '#F8F8F4', position: 'relative' }}
    >
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* Left */}
          <div>
            <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Get in touch</p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#15231E',
                marginBottom: '24px',
              }}
            >
              Ready to build
              <br />
              <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>something remarkable?</em>
            </h2>

            <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#55635D', marginBottom: '44px' }}>
              I'm open to internships, junior engineering roles, AI project collaborations,
              and freelance work. If you're looking for someone who can build intelligent,
              practical systems — let's connect.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  icon: '✉',
                  label: 'Email',
                  value: 'cherutichemmanuel87@gmail.com',
                  href: 'mailto:cherutichemmanuel87@gmail.com',
                },
                {
                  icon: '◈',
                  label: 'Phone',
                  value: '+254 727 683 579',
                  href: 'tel:+254727683579',
                },
                {
                  icon: '◉',
                  label: 'LinkedIn',
                  value: 'Connect on LinkedIn',
                  href: 'https://www.linkedin.com/in/emmanuel-cherutich/',
                },
                {
                  icon: '◎',
                  label: 'GitHub',
                  value: 'View my repositories',
                  href: 'https://github.com/mantel254',
                },
                {
                  icon: '△',
                  label: 'Location',
                  value: 'Mombasa, Kenya · Remote friendly',
                  href: undefined,
                },
              ].map((contact) => (
                <div
                  key={contact.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: '#FFFFFF',
                    border: '1px solid rgba(15,90,71,0.08)',
                    textDecoration: 'none',
                    cursor: contact.href ? 'pointer' : 'default',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={() => contact.href && window.open(contact.href, contact.href.startsWith('mailto') || contact.href.startsWith('tel') ? '_self' : '_blank')}
                  onMouseEnter={(e) => {
                    if (contact.href) {
                      e.currentTarget.style.borderColor = '#0F5A47'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,90,71,0.1)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (contact.href) {
                      e.currentTarget.style.borderColor = 'rgba(15,90,71,0.08)'
                      e.currentTarget.style.boxShadow = 'none'
                    }
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(15,90,71,0.07)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0F5A47',
                      fontSize: '0.9rem',
                      flexShrink: 0,
                    }}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#8A948F', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>
                      {contact.label}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#15231E', fontWeight: 500 }}>{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {sent ? (
              <div
                style={{
                  padding: '60px 40px',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(15,90,71,0.08)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(46,139,87,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    fontSize: '1.5rem',
                    color: '#2E8B57',
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 600, color: '#15231E', marginBottom: '12px' }}>
                  Message received.
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#55635D', lineHeight: 1.7 }}>
                  Thank you for reaching out. Emmanuel will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: '40px',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(15,90,71,0.08)',
                  boxShadow: '0 8px 40px rgba(15,90,71,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 600, color: '#15231E', marginBottom: '4px' }}>
                  Send a message
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: '#55635D', marginBottom: '6px', letterSpacing: '0.04em' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#0F5A47' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(15,90,71,0.12)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: '#55635D', marginBottom: '6px', letterSpacing: '0.04em' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#0F5A47' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(15,90,71,0.12)' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: '#55635D', marginBottom: '6px', letterSpacing: '0.04em' }}>
                    Organization (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Company or institution"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#0F5A47' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(15,90,71,0.12)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: '#55635D', marginBottom: '6px', letterSpacing: '0.04em' }}>
                    Message
                  </label>
                  <textarea
                    required
                    placeholder="Tell me about your project, opportunity, or collaboration idea..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={(e) => { e.target.style.borderColor = '#0F5A47' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(15,90,71,0.12)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: '14px 28px',
                    borderRadius: '12px',
                    background: loading ? 'rgba(15,90,71,0.5)' : '#0F5A47',
                    color: '#fff',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.25s ease',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = '#123F35' }}
                  onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = '#0F5A47' }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #contact > div > div { 
            grid-template-columns: 1fr !important; 
            gap: 48px !important; 
          }
        }
        
        @media (max-width: 768px) {
          #contact > div > div > div:nth-child(1) > div:nth-child(4) {
            gap: 12px !important;
          }
          #contact > div > div > div:nth-child(1) > div:nth-child(4) > div {
            padding: 12px 16px !important;
          }
          #contact > div > div > div:nth-child(2) form {
            padding: 32px 24px !important;
          }
        }
        
        @media (max-width: 640px) {
          #contact { padding: 80px 0 !important; }
          #contact > div > div > div:nth-child(1) {
            gap: 24px !important;
          }
          #contact > div > div > div:nth-child(1) > div:nth-child(4) > div {
            gap: 12px !important;
            padding: 12px 12px !important;
          }
          #contact > div > div > div:nth-child(1) > div:nth-child(4) > div > div:nth-child(1) {
            min-width: 32px !important;
          }
          #contact > div > div > div:nth-child(1) > div:nth-child(4) > div > div:nth-child(2) > div:nth-child(1) {
            font-size: 0.65rem !important;
          }
          #contact > div > div > div:nth-child(1) > div:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) {
            font-size: 0.78rem !important;
          }
          #contact > div > div > div:nth-child(2) h3 {
            font-size: 1.1rem !important;
          }
          #contact > div > div > div:nth-child(2) form {
            padding: 24px 20px !important;
            gap: 16px !important;
          }
          #contact > div > div > div:nth-child(2) form > div:nth-child(3) {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          #contact > div > div > div:nth-child(2) form textarea {
            min-height: 100px !important;
          }
        }
      `}</style>
    </section>
  )
}
