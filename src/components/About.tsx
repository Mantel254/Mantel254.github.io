const timeline = [
  {
    year: '2024–Present',
    role: 'Technical Mentor',
    org: 'Technical University of Mombasa',
    desc: 'Mentoring students in AI, ML, Python development, and Linux systems. Leading study groups, AI workshops, and supporting hackathon teams.',
  },
  {
    year: '2025',
    role: 'Software Development Intern',
    org: 'Swahilipot Hub Foundation',
    desc: 'Building APIs, improving database structures, and contributing to digital community projects in an agile team environment.',
  },
  {
    year: '2025',
    role: 'Frontend Technical Trainer',
    org: 'Swahilipot Hub',
    desc: 'Training youth in HTML, CSS, JavaScript, and UI/UX fundamentals through practical projects, weekly classes, and mentorship programs.',
  },
  {
    year: '2021–Present',
    role: 'BSc Computer Science',
    org: 'Technical University of Mombasa',
    desc: 'Coursework: Machine Learning, Data Structures, Algorithms, Cybersecurity, Web Development, Distributed Systems.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 0',
        background: '#F8F8F4',
        position: 'relative',
      }}
    >
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '100px',
            alignItems: 'start',
          }}
        >
          {/* Left: Bio */}
          <div>
            <p className="section-eyebrow" style={{ marginBottom: '16px' }}>About</p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#15231E',
                marginBottom: '32px',
              }}
            >
              Engineering solutions
              <br />
              <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>for real communities.</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '0.97rem', lineHeight: 1.8, color: '#55635D' }}>
                I'm Emmanuel Cherutich, a Computer Science student at the Technical University of
                Mombasa with a deep passion for AI, machine learning, and building software that
                solves real problems for real people — especially in underserved communities across Africa.
              </p>
              <p style={{ fontSize: '0.97rem', lineHeight: 1.8, color: '#55635D' }}>
                I've built end-to-end AI systems from scratch: speech transcription for low-resource
                languages, RAG-powered chatbots, WhatsApp automation tools, and complete financial
                management platforms with M-Pesa integration. I care deeply about systems that
                actually work in the field, not just in demos.
              </p>
              <p style={{ fontSize: '0.97rem', lineHeight: 1.8, color: '#55635D' }}>
                Beyond building, I mentor and train the next generation of developers through
                Swahilipot Hub and at the university, running AI workshops, study groups, and
                hands-on coding sessions for youth across Mombasa.
              </p>
            </div>

            {/* Philosophy cards */}
            <div style={{ marginTop: '44px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { icon: '⬡', label: 'Local Impact', desc: 'Technology that solves African problems first.' },
                { icon: '◎', label: 'Community First', desc: 'Empowering developers and learners around me.' },
                { icon: '△', label: 'End-to-End Builder', desc: 'From model to deployment, I own the full stack.' },
                { icon: '◇', label: 'Open to Learn', desc: 'Curious, self-driven, and always improving.' },
              ].map((p) => (
                <div
                  key={p.label}
                  className="card-hover"
                  style={{
                    padding: '20px',
                    borderRadius: '16px',
                    background: '#FFFFFF',
                    border: '1px solid rgba(15,90,71,0.08)',
                    boxShadow: '0 2px 12px rgba(15,90,71,0.04)',
                  }}
                >
                  <div style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#0F5A47' }}>{p.icon}</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#15231E', marginBottom: '4px' }}>{p.label}</div>
                  <div style={{ fontSize: '0.75rem', color: '#8A948F', lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            <p className="section-eyebrow" style={{ marginBottom: '32px' }}>Journey</p>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '11px',
                  top: '8px',
                  bottom: '8px',
                  width: '1.5px',
                  background: 'linear-gradient(to bottom, #0F5A47, rgba(15,90,71,0.08))',
                  borderRadius: '1px',
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '24px',
                      paddingBottom: i < timeline.length - 1 ? '36px' : 0,
                    }}
                  >
                    <div style={{ position: 'relative', flexShrink: 0, paddingTop: '4px' }}>
                      <div
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: i === 0 ? '#0F5A47' : '#FFFFFF',
                          border: `2px solid ${i === 0 ? '#0F5A47' : 'rgba(15,90,71,0.2)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        {i === 0 && (
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />
                        )}
                      </div>
                    </div>

                    <div style={{ flex: 1, padding: '4px 20px 4px 0' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: '#0F5A47',
                          fontWeight: 500,
                          letterSpacing: '0.08em',
                          marginBottom: '4px',
                        }}
                      >
                        {item.year}
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#15231E', marginBottom: '2px' }}>
                        {item.role}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#0F5A47', fontWeight: 600, marginBottom: '8px' }}>
                        {item.org}
                      </div>
                      <p style={{ fontSize: '0.82rem', color: '#55635D', lineHeight: 1.65 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div
              style={{
                marginTop: '44px',
                padding: '28px',
                borderRadius: '20px',
                background: '#FFFFFF',
                border: '1px solid rgba(15,90,71,0.08)',
              }}
            >
              <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Interests</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  'AI & Cybersecurity',
                  'Robotics & Automation',
                  'Time Series Forecasting',
                  'Community Tech Education',
                  'Entrepreneurship in Tech',
                  'Low-Resource NLP',
                ].map((interest) => (
                  <span
                    key={interest}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '100px',
                      background: 'rgba(15,90,71,0.06)',
                      border: '1px solid rgba(15,90,71,0.12)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#0F5A47',
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #about > div > div { 
            grid-template-columns: 1fr !important; 
            gap: 50px !important; 
          }
        }
        
        @media (max-width: 768px) {
          #about > div > div {
            gap: 40px !important;
          }
          #about > div > div > div:nth-child(1) > div:nth-child(3) {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
        }
        
        @media (max-width: 640px) {
          #about > div > div > div:nth-child(1) > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
          #about > div > div > div:nth-child(2) > div:nth-child(2) {
            display: flex !important;
            flex-direction: column !important;
            gap: 20px !important;
          }
          #about > div > div > div:nth-child(2) > div:nth-child(2) > div {
            gap: 12px !important;
          }
          #about > div > div > div:nth-child(2) > div:nth-child(4) {
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
