const experiences = [
  {
    period: '2024 — Present',
    title: 'Technical Mentor',
    company: 'Technical University of Mombasa',
    location: 'Mombasa, Kenya',
    type: 'Part-time',
    highlights: [
      'Mentored students in AI, machine learning, Python development, and Linux systems administration.',
      'Led regular study groups and AI workshops, helping students understand concepts from fundamentals to deployment.',
      'Supported hackathon teams with project ideation, model building, debugging, and final presentations.',
      'Helped students build, debug, and deploy real applications — including web apps, ML models, and automation tools.',
    ],
    technologies: ['Python', 'TensorFlow', 'Linux', 'Git', 'Flask', 'Machine Learning'],
    current: true,
  },
  {
    period: '2025',
    title: 'Software Development Intern',
    company: 'Swahilipot Hub Foundation',
    location: 'Mombasa, Kenya',
    type: 'Internship',
    highlights: [
      'Worked on web and backend development tasks as part of a collaborative agile team.',
      'Built and documented RESTful APIs for internal community digital projects.',
      'Improved database schema design and query efficiency for production applications.',
      'Contributed to open digital infrastructure serving the Mombasa tech community.',
    ],
    technologies: ['Python', 'JavaScript', 'REST APIs', 'MySQL', 'Git', 'Agile'],
    current: false,
  },
  {
    period: '2025',
    title: 'Frontend Technical Trainer',
    company: 'Swahilipot Hub',
    location: 'Mombasa, Kenya',
    type: 'Trainer',
    highlights: [
      'Trained youth in HTML, CSS, JavaScript, and UI/UX design fundamentals through structured weekly sessions.',
      'Designed practical projects and hands-on exercises tailored to absolute beginners and intermediate learners.',
      'Facilitated mentorship programs to grow tech talent in underserved communities around Mombasa.',
      'Created curriculum materials, exercises, and project briefs used by multiple cohorts of students.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Responsive Design', 'Git'],
    current: false,
  },
  {
    period: '2021 — Present',
    title: 'BSc Computer Science Student',
    company: 'Technical University of Mombasa',
    location: 'Mombasa, Kenya',
    type: 'Education',
    highlights: [
      'Pursuing a Bachelor of Science in Computer Science with focus on AI, ML, and software engineering.',
      'Core coursework: Machine Learning, Data Structures, Algorithms, Cybersecurity, Web Development, Distributed Systems.',
      'Applied classroom knowledge to real-world projects — speech transcription, chatbots, financial systems, and automation tools.',
      'Active participant in university hackathons, coding competitions, and local tech challenge events.',
    ],
    technologies: ['Python', 'C++', 'SQL', 'Data Structures', 'Algorithms', 'Cybersecurity'],
    current: true,
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: '120px 0', background: '#F8F8F4', position: 'relative' }}
    >
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '72px' }}>
          <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Experience</p>
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
            Building, teaching, and
            <br />
            <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>giving back.</em>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Central timeline line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1.5px',
              background: 'linear-gradient(to bottom, #0F5A47, rgba(15,90,71,0.05))',
              transform: 'translateX(-50%)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 40px 1fr',
                  gap: '0',
                  alignItems: 'start',
                }}
              >
                {i % 2 === 0 ? (
                  <>
                    <div style={{ paddingRight: '40px', textAlign: 'right', paddingTop: '4px' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#0F5A47', letterSpacing: '0.08em', fontWeight: 500, marginBottom: '6px' }}>
                        {exp.period}
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#15231E', marginBottom: '2px' }}>{exp.title}</div>
                      <div style={{ fontSize: '0.82rem', color: '#0F5A47', fontWeight: 600 }}>{exp.company}</div>
                      <div style={{ fontSize: '0.72rem', color: '#8A948F', marginTop: '2px' }}>{exp.location}</div>
                      <div
                        style={{
                          display: 'inline-block',
                          marginTop: '6px',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: 'rgba(15,90,71,0.07)',
                          fontSize: '0.62rem',
                          color: '#0F5A47',
                          fontWeight: 600,
                          fontFamily: 'var(--font-mono)',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {exp.type}
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: exp.current ? '#0F5A47' : '#FFFFFF',
                          border: `2px solid ${exp.current ? '#0F5A47' : 'rgba(15,90,71,0.25)'}`,
                          boxShadow: exp.current ? '0 0 0 4px rgba(15,90,71,0.15)' : 'none',
                          position: 'relative',
                          zIndex: 1,
                          flexShrink: 0,
                        }}
                      />
                    </div>

                    <div style={{ paddingLeft: '40px' }}>
                      <div
                        className="card-hover"
                        style={{
                          padding: '28px 32px',
                          borderRadius: '20px',
                          background: '#FFFFFF',
                          border: '1px solid rgba(15,90,71,0.08)',
                          boxShadow: '0 4px 20px rgba(15,90,71,0.05)',
                        }}
                      >
                        {exp.current && (
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 10px', borderRadius: '100px', background: 'rgba(46,139,87,0.1)', marginBottom: '16px' }}>
                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2E8B57', display: 'inline-block' }} />
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#2E8B57', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Current</span>
                          </div>
                        )}
                        <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                          {exp.highlights.map((h, j) => (
                            <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '0.84rem', lineHeight: 1.65, color: '#55635D' }}>
                              <span style={{ color: '#0F5A47', flexShrink: 0, marginTop: '1px' }}>—</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '16px', borderTop: '1px solid rgba(15,90,71,0.06)' }}>
                          {exp.technologies.map((t) => (
                            <span key={t} style={{ padding: '3px 10px', borderRadius: '5px', background: 'rgba(15,90,71,0.05)', border: '1px solid rgba(15,90,71,0.1)', fontSize: '0.68rem', color: '#55635D', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ paddingRight: '40px' }}>
                      <div
                        className="card-hover"
                        style={{
                          padding: '28px 32px',
                          borderRadius: '20px',
                          background: '#FFFFFF',
                          border: '1px solid rgba(15,90,71,0.08)',
                          boxShadow: '0 4px 20px rgba(15,90,71,0.05)',
                        }}
                      >
                        <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                          {exp.highlights.map((h, j) => (
                            <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '0.84rem', lineHeight: 1.65, color: '#55635D' }}>
                              <span style={{ color: '#0F5A47', flexShrink: 0, marginTop: '1px' }}>—</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '16px', borderTop: '1px solid rgba(15,90,71,0.06)' }}>
                          {exp.technologies.map((t) => (
                            <span key={t} style={{ padding: '3px 10px', borderRadius: '5px', background: 'rgba(15,90,71,0.05)', border: '1px solid rgba(15,90,71,0.1)', fontSize: '0.68rem', color: '#55635D', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: exp.current ? '#0F5A47' : '#FFFFFF',
                          border: `2px solid ${exp.current ? '#0F5A47' : 'rgba(15,90,71,0.25)'}`,
                          boxShadow: exp.current ? '0 0 0 4px rgba(15,90,71,0.15)' : 'none',
                          position: 'relative',
                          zIndex: 1,
                          flexShrink: 0,
                        }}
                      />
                    </div>

                    <div style={{ paddingLeft: '40px', paddingTop: '4px' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#0F5A47', letterSpacing: '0.08em', fontWeight: 500, marginBottom: '6px' }}>
                        {exp.period}
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#15231E', marginBottom: '2px' }}>{exp.title}</div>
                      <div style={{ fontSize: '0.82rem', color: '#0F5A47', fontWeight: 600 }}>{exp.company}</div>
                      <div style={{ fontSize: '0.72rem', color: '#8A948F', marginTop: '2px' }}>{exp.location}</div>
                      <div
                        style={{
                          display: 'inline-block',
                          marginTop: '6px',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: 'rgba(15,90,71,0.07)',
                          fontSize: '0.62rem',
                          color: '#0F5A47',
                          fontWeight: 600,
                          fontFamily: 'var(--font-mono)',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {exp.type}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #experience > div > div:last-child > div {
            grid-template-columns: 24px 1fr !important;
          }
          #experience > div > div:last-child > div > div:nth-child(1) {
            display: none !important;
          }
          #experience > div > div:last-child > div > div:nth-child(2) {
            left: 12px !important;
          }
          #experience > div > div:last-child > div > div:nth-child(3) {
            padding-left: 40px !important;
          }
        }
        
        @media (max-width: 768px) {
          #experience > div > div:nth-child(1) > div:nth-child(2) {
            display: none !important;
          }
          #experience > div > div:nth-child(1) {
            flex-direction: column !important;
            gap: 32px !important;
          }
        }
        
        @media (max-width: 640px) {
          #experience > div > div:last-child {
            gap: 32px !important;
          }
          #experience > div > div:last-child > div {
            gap: 0 !important;
          }
          #experience > div > div:last-child > div > div:nth-child(3) {
            padding-left: 36px !important;
          }
          #experience > div > div:last-child > div > div:nth-child(3) .card-hover {
            padding: 20px 24px !important;
          }
          #experience > div > div:last-child > div > div:nth-child(3) .card-hover ul {
            gap: 8px !important;
          }
          #experience > div > div:last-child > div > div:nth-child(3) .card-hover li {
            font-size: 0.78rem !important;
          }
          #experience > div > div:last-child > div > div:nth-child(3) .card-hover > div:last-child {
            gap: 4px !important;
          }
          #experience > div > div:last-child > div > div:nth-child(3) .card-hover > div:last-child span {
            padding: 2px 8px !important;
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </section>
  )
}
