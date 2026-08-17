const skillGroups = [
  {
    category: 'AI & Machine Learning',
    icon: '◎',
    color: '#0F5A47',
    bg: 'rgba(15,90,71,0.05)',
    skills: [
      { name: 'TensorFlow & Keras', level: 90, note: 'Neural networks, LSTM, CNNs' },
      { name: 'Natural Language Processing', level: 88, note: 'NLTK, TF-IDF, cosine similarity' },
      { name: 'Hugging Face Transformers', level: 82, note: 'Pre-trained models & fine-tuning' },
      { name: 'RAG Systems', level: 85, note: 'PDF ingestion, vector search, LLMs' },
      { name: 'Speech Processing', level: 78, note: 'MFCC, audio preprocessing, ASR' },
      { name: 'Time Series Forecasting', level: 80, note: 'LSTM, ARIMA, sequence models' },
    ],
  },
  {
    category: 'Languages & Frameworks',
    icon: '△',
    color: '#B86A4A',
    bg: 'rgba(184,106,74,0.05)',
    skills: [
      { name: 'Python', level: 95, note: 'Primary language — scripting to ML' },
      { name: 'Flask & FastAPI', level: 88, note: 'REST APIs, web backends' },
      { name: 'JavaScript', level: 80, note: 'Frontend, Node.js basics' },
      { name: 'SQL', level: 85, note: 'MySQL, phpMyAdmin, queries' },
      { name: 'HTML & CSS', level: 85, note: 'Responsive web interfaces' },
      { name: 'Kivy', level: 70, note: 'Python mobile app development' },
    ],
  },
  {
    category: 'Tools & Integrations',
    icon: '◇',
    color: '#C59A5A',
    bg: 'rgba(197,154,90,0.05)',
    skills: [
      { name: 'WhatsApp Business API', level: 88, note: 'Twilio, automated messaging bots' },
      { name: 'M-Pesa / Daraja API', level: 85, note: 'STK Push, payment callbacks' },
      { name: 'Git & GitHub', level: 88, note: 'Version control, collaboration' },
      { name: 'Ubuntu Linux', level: 85, note: 'Daily driver, server setup' },
      { name: 'Anaconda & VS Code', level: 90, note: 'Data science environments' },
      { name: 'Pandas & NumPy', level: 88, note: 'Data manipulation & analysis' },
    ],
  },
]

const highlights = [
  { icon: '◉', label: 'Multiple AI Applications', desc: 'Built and deployed real-world AI tools used in live environments across Kenya.' },
  { icon: '◎', label: '30+ Students Mentored', desc: 'Taught AI, Python, and web development at university and community level.' },
  { icon: '△', label: 'Hackathon Finalist', desc: 'Participant and finalist in multiple local hackathons and tech challenges.' },
  { icon: '◇', label: 'Full-Stack AI Builder', desc: 'End-to-end ownership from model training to API deployment and frontend.' },
  { icon: '⬡', label: 'Low-Resource NLP Pioneer', desc: 'One of few developers building AI tools for underrepresented African languages.' },
  { icon: '✦', label: 'Community Educator', desc: 'Running regular coding workshops and mentoring youth tech talent in Mombasa.' },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: '120px 0', background: '#FFFFFF', position: 'relative' }}
    >
      <div className="bg-diagonal" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '72px' }}>
          <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Capabilities</p>
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
            Skills built through
            <br />
            <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>shipping real projects.</em>
          </h2>
        </div>

        {/* Skill groups */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card-hover"
              style={{
                padding: '36px 32px',
                borderRadius: '24px',
                background: '#FFFFFF',
                border: '1px solid rgba(15,90,71,0.08)',
                boxShadow: '0 4px 24px rgba(15,90,71,0.05)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: group.bg,
                    border: `1px solid ${group.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    color: group.color,
                  }}
                >
                  {group.icon}
                </div>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#15231E', lineHeight: 1.3 }}>
                  {group.category}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#15231E' }}>{skill.name}</div>
                        <div style={{ fontSize: '0.65rem', color: '#8A948F', fontFamily: 'var(--font-mono)', marginTop: '1px' }}>{skill.note}</div>
                      </div>
                      <span style={{ fontSize: '0.68rem', fontWeight: 700, color: group.color, fontFamily: 'var(--font-mono)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{ height: '3px', borderRadius: '2px', background: 'rgba(15,90,71,0.08)', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          borderRadius: '2px',
                          background: `linear-gradient(90deg, ${group.color}, ${group.color}88)`,
                          width: `${skill.level}%`,
                          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements / highlights */}
        <div>
          <p className="section-eyebrow" style={{ marginBottom: '32px' }}>Achievements</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {highlights.map((h) => (
              <div
                key={h.label}
                className="card-hover"
                style={{
                  padding: '24px 28px',
                  borderRadius: '16px',
                  background: '#F8F8F4',
                  border: '1px solid rgba(15,90,71,0.08)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(15,90,71,0.07)',
                    border: '1.5px solid rgba(15,90,71,0.12)',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F5A47',
                    fontSize: '0.85rem',
                  }}
                >
                  {h.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#15231E', lineHeight: 1.3, marginBottom: '4px' }}>
                    {h.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#8A948F', lineHeight: 1.55 }}>
                    {h.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #skills > div > div:nth-child(2) { 
            grid-template-columns: repeat(2, 1fr) !important; 
          }
        }
        
        @media (max-width: 900px) {
          #skills > div > div:nth-child(2) { 
            grid-template-columns: 1fr !important; 
          }
          #skills > div > div:nth-child(4) { 
            grid-template-columns: 1fr 1fr !important; 
          }
        }
        
        @media (max-width: 768px) {
          #skills > div > div:nth-child(2) {
            gap: 20px !important;
          }
          #skills > div > div:nth-child(2) > div {
            padding: 28px 24px !important;
          }
          #skills > div > div:nth-child(4) {
            gap: 12px !important;
            grid-template-columns: 1fr !important;
          }
          #skills > div > div:nth-child(4) > div {
            padding: 20px 24px !important;
            gap: 12px !important;
          }
        }
        
        @media (max-width: 640px) {
          #skills > div > div:nth-child(2) > div {
            padding: 24px 20px !important;
          }
          #skills > div > div:nth-child(2) > div > div:nth-child(1) {
            margin-bottom: 20px !important;
          }
          #skills > div > div:nth-child(2) > div > div:nth-child(2) {
            gap: 16px !important;
          }
          #skills > div > div:nth-child(4) > div {
            padding: 16px 20px !important;
          }
          #skills > div > div:nth-child(4) > div > div:nth-child(1) {
            width: 30px !important;
            height: 30px !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  )
}
