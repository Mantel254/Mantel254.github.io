import emmanuelPhoto from '@/imports/Gemini_Generated_Image_b5i3oeb5i3oeb5i3.png'

const techBadges = [
  { label: 'Python', delay: '0s', x: '-160px', y: '60px' },
  { label: 'TensorFlow', delay: '0.4s', x: '-155px', y: '200px' },
  { label: 'RAG Systems', delay: '0.8s', x: '-175px', y: '340px' },
  { label: 'FastAPI', delay: '1.2s', x: '118px', y: '80px' },
  { label: 'WhatsApp API', delay: '0.6s', x: '108px', y: '220px' },
  { label: 'M-Pesa', delay: '1.0s', x: '98px', y: '360px' },
  { label: 'Flask', delay: '0.2s', x: '-148px', y: '470px' },
  { label: 'Hugging Face', delay: '1.4s', x: '112px', y: '480px' },
]

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#F8F8F4',
        paddingTop: '80px',
      }}
    >
      {/* Ambient orbs */}
      <div
        className="animate-orb"
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-80px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15,90,71,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,154,90,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'orb-float 16s ease-in-out infinite reverse',
        }}
      />

      <div className="bg-diagonal" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '60px 32px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left: Text content */}
        <div style={{ maxWidth: '620px' }}>
          {/* Eyebrow */}
          <div
            className="animate-fade-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '100px',
              background: 'rgba(15,90,71,0.06)',
              border: '1px solid rgba(15,90,71,0.12)',
              marginBottom: '32px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#0F5A47',
                boxShadow: '0 0 0 0 rgba(15,90,71,0.4)',
                animation: 'pulse-dot 2s ease-out infinite',
              }}
            />
            <span className="section-eyebrow" style={{ letterSpacing: '0.14em' }}>
              Based in Mombasa, Kenya · Open to opportunities
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#15231E',
              marginBottom: '24px',
            }}
          >
            Building Intelligent
            <br />
            <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>Software</em> That
            <br />
            Solves Real Problems.
          </h1>

          {/* Role tags */}
          <div
            className="animate-fade-up delay-200"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '28px',
            }}
          >
            {['AI Engineer', 'ML Developer', 'Software Engineer', 'Technical Trainer'].map((role) => (
              <span
                key={role}
                style={{
                  padding: '4px 12px',
                  borderRadius: '4px',
                  background: 'transparent',
                  border: '1px solid rgba(15,90,71,0.2)',
                  color: '#55635D',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="animate-fade-up delay-300"
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: '#55635D',
              marginBottom: '44px',
              maxWidth: '520px',
            }}
          >
            Computer Science student at the Technical University of Mombasa with hands-on
            experience building AI-powered chatbots, WhatsApp automation, financial systems,
            and low-resource language models. Passionate about using technology to solve
            local problems and empower communities.
          </p>

          {/* CTA buttons */}
          <div
            className="animate-fade-up delay-400"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '52px' }}
          >
            <a
              href="#projects"
              style={{
                padding: '13px 28px',
                borderRadius: '100px',
                background: '#0F5A47',
                color: '#fff',
                fontSize: '0.88rem',
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'all 0.25s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = '#123F35'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 24px rgba(15,90,71,0.3)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = '#0F5A47'
                el.style.transform = 'none'
                el.style.boxShadow = 'none'
              }}
            >
              View Projects
            </a>
            <a
              href="mailto:cherutichemmanuel87@gmail.com"
              style={{
                padding: '13px 28px',
                borderRadius: '100px',
                background: 'transparent',
                color: '#15231E',
                fontSize: '0.88rem',
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '0.01em',
                border: '1.5px solid rgba(15,90,71,0.2)',
                transition: 'all 0.25s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = '#0F5A47'
                el.style.color = '#0F5A47'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(15,90,71,0.2)'
                el.style.color = '#15231E'
                el.style.transform = 'none'
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Stats row */}
          <div
            className="animate-fade-up delay-500"
            style={{
              display: 'flex',
              gap: '40px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(15,90,71,0.08)',
            }}
          >
            {[
              { value: '10+', label: 'AI Projects Built' },
              { value: '30+', label: 'Students Mentored' },
              { value: '5+', label: 'Live Deployments' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    fontWeight: 600,
                    color: '#0F5A47',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#8A948F', fontWeight: 500, letterSpacing: '0.04em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Portrait + floating badges */}
        <div
          className="animate-fade-in delay-200"
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Decorative frame */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '28px',
                border: '1px solid rgba(15,90,71,0.12)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '-24px',
                left: '-24px',
                right: '24px',
                bottom: '24px',
                borderRadius: '28px',
                background: 'rgba(15,90,71,0.04)',
                border: '1px solid rgba(15,90,71,0.06)',
              }}
            />

            <img
              src={emmanuelPhoto}
              alt="Emmanuel Cherutich — AI & Software Engineer"
              style={{
                width: '340px',
                height: '440px',
                objectFit: 'cover',
                objectPosition: 'center top',
                borderRadius: '20px',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 32px 80px rgba(15,90,71,0.18), 0 8px 24px rgba(0,0,0,0.08)',
              }}
            />

            {/* Status badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 3,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(12px)',
                borderRadius: '100px',
                padding: '8px 18px',
                boxShadow: '0 4px 20px rgba(15,90,71,0.12)',
                border: '1px solid rgba(15,90,71,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#2E8B57',
                  display: 'inline-block',
                  boxShadow: '0 0 0 3px rgba(46,139,87,0.2)',
                }}
              />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#15231E' }}>
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Floating tech badges */}
          {techBadges.map((badge) => (
            <div
              key={badge.label}
              className="animate-badge-float"
              style={{
                position: 'absolute',
                left: `calc(50% + ${badge.x})`,
                top: badge.y,
                animationDelay: badge.delay,
                animationDuration: `${3 + parseFloat(badge.delay) * 0.5}s`,
                zIndex: 3,
              }}
            >
              <div
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(15,90,71,0.12)',
                  boxShadow: '0 4px 16px rgba(15,90,71,0.08)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#0F5A47',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.02em',
                }}
              >
                {badge.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#8A948F', fontWeight: 500, textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div
          style={{
            width: '1.5px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(15,90,71,0.4), transparent)',
            borderRadius: '1px',
          }}
        />
      </div>

      <style>{`
        @keyframes pulse-dot {
          0% { box-shadow: 0 0 0 0 rgba(15,90,71,0.4); }
          70% { box-shadow: 0 0 0 8px rgba(15,90,71,0); }
          100% { box-shadow: 0 0 0 0 rgba(15,90,71,0); }
        }
        
        @media (max-width: 1024px) {
          #home > div > div { grid-template-columns: 1fr !important; gap: 60px !important; }
          #home > div > div > div:last-child { 
            display: flex !important;
            justify-content: center;
            order: -1;
          }
          #home > div > div > div:last-child img {
            width: 280px !important;
            height: 360px !important;
          }
          #home > div > div > div:last-child .animate-badge-float {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          #home > div > div > div:last-child img {
            width: 240px !important;
            height: 310px !important;
          }
          #home { padding-top: 60px !important; }
        }
        
        @media (max-width: 640px) {
          #home > div > div > div:last-child {
            margin-top: 20px;
          }
          #home > div > div > div:last-child img {
            width: 200px !important;
            height: 260px !important;
          }
          #home > div > div:nth-child(1) { max-width: 100% !important; }
          #home h1 { font-size: clamp(1.8rem, 4vw, 2.8rem) !important; }
          .animate-fade-up { animation-delay: 0s !important; }
        }
      `}</style>
    </section>
  )
}
