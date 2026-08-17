const techInterests = [
  {
    title: 'Low-Resource Language AI',
    area: 'NLP · Speech Recognition · Africa',
    description:
      'Building speech and text AI systems for African languages that are severely underrepresented in global datasets. Starting with Ewe, with plans to expand to Swahili and coastal Kenya dialects.',
    tags: ['ASR', 'Character-level NLP', 'MFCC', 'African Languages'],
    icon: '◎',
    color: '#0F5A47',
    bg: 'rgba(15,90,71,0.05)',
    status: 'Active',
  },
  {
    title: 'AI for Financial Inclusion',
    area: 'FinTech · M-Pesa · Automation',
    description:
      'Automating financial workflows for informal investment groups, chamas, and small businesses in Kenya using M-Pesa APIs and intelligent payment processing — bringing fintech to underbanked communities.',
    tags: ['M-Pesa', 'STK Push', 'Referral Systems', 'Flask'],
    icon: '◇',
    color: '#C59A5A',
    bg: 'rgba(197,154,90,0.05)',
    status: 'Production',
  },
  {
    title: 'Conversational AI & RAG',
    area: 'LLMs · Chatbots · Knowledge Retrieval',
    description:
      'Exploring retrieval-augmented generation as a practical tool for organizations that need accurate, document-grounded AI answers without maintaining large infrastructure — deployed via lightweight APIs.',
    tags: ['RAG', 'PDF Ingestion', 'Vector Search', 'LLMs'],
    icon: '△',
    color: '#B86A4A',
    bg: 'rgba(184,106,74,0.05)',
    status: 'Active',
  },
  {
    title: 'Community Tech Education',
    area: 'AI Education · Youth Mentorship · Kenya',
    description:
      'Designing accessible AI and programming curricula for youth in Mombasa through Swahilipot Hub and university workshops — making advanced technical skills reachable for those without access to expensive programs.',
    tags: ['AI Workshops', 'Python', 'Hackathons', 'Curriculum Design'],
    icon: '⬡',
    color: '#0F5A47',
    bg: 'rgba(15,90,71,0.05)',
    status: 'Ongoing',
  },
]

const hackathons = [
  { name: 'Local Hackathon Finalist', org: 'Technical University of Mombasa', year: '2024', outcome: 'Finalist' },
  { name: 'AI Innovation Challenge', org: 'Swahilipot Hub', year: '2025', outcome: 'Participant' },
  { name: 'Tech for Good Competition', org: 'Mombasa Tech Community', year: '2024', outcome: 'Finalist' },
]

export default function Research() {
  return (
    <section
      id="research"
      style={{ padding: '120px 0', background: '#F8F8F4', position: 'relative' }}
    >
      <div className="bg-diagonal" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Focus Areas</p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#15231E',
              }}
            >
              What I'm exploring
              <br />
              <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>and building next.</em>
            </h2>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#8A948F', maxWidth: '280px', lineHeight: 1.65 }}>
            Areas of deep interest — where curiosity meets hands-on building.
          </p>
        </div>

        {/* Interest cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '64px' }}>
          {techInterests.map((item, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                padding: '36px 40px',
                borderRadius: '20px',
                background: '#FFFFFF',
                border: '1px solid rgba(15,90,71,0.08)',
                boxShadow: '0 4px 20px rgba(15,90,71,0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: item.bg,
                    border: `1px solid ${item.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    padding: '3px 10px',
                    borderRadius: '100px',
                    background: 'rgba(46,139,87,0.1)',
                    color: '#2E8B57',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {item.status}
                </span>
              </div>

              <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: item.color, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                {item.area}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#15231E',
                  lineHeight: 1.3,
                  marginBottom: '14px',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </h3>

              <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#55635D', marginBottom: '20px' }}>
                {item.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '3px 10px',
                      borderRadius: '5px',
                      background: item.bg,
                      border: `1px solid ${item.color}18`,
                      fontSize: '0.68rem',
                      color: item.color,
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hackathons / competitions */}
        <div>
          <p className="section-eyebrow" style={{ marginBottom: '24px' }}>Hackathons & Competitions</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {hackathons.map((h, i) => (
              <div
                key={i}
                style={{
                  padding: '20px 28px',
                  borderRadius: '14px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(15,90,71,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0F5A47', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#15231E' }}>{h.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#8A948F', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>{h.org} · {h.year}</div>
                  </div>
                </div>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '100px',
                    background: h.outcome === 'Finalist' ? 'rgba(197,154,90,0.1)' : 'rgba(15,90,71,0.07)',
                    color: h.outcome === 'Finalist' ? '#C59A5A' : '#0F5A47',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {h.outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #research > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
