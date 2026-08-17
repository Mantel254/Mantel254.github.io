import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Ewe Language Speech Transcription Model',
    category: 'Deep Learning · NLP · Low-Resource Languages',
    year: '2024',
    status: 'Completed',
    description:
      'A custom speech-to-text model for transcribing the Ewe language — a West African language severely underrepresented in AI datasets. Addresses the critical gap in low-resource language AI using deep learning and audio preprocessing pipelines.',
    problem:
      'Most speech recognition systems are built for English and a handful of high-resource languages, leaving millions of Ewe speakers without voice-AI tools in their native tongue.',
    architecture:
      'Character-level NLP pipeline with custom audio preprocessing (librosa, MFCC feature extraction). Trained on curated Ewe speech datasets. Deep learning model built with TensorFlow/Keras, validated on held-out transcription benchmarks.',
    metrics: [
      { label: 'Language', value: 'Ewe' },
      { label: 'Model Type', value: 'Seq2Seq' },
      { label: 'Framework', value: 'TensorFlow' },
      { label: 'Task', value: 'ASR' },
    ],
    stack: ['Python', 'TensorFlow', 'Keras', 'librosa', 'NLTK', 'NumPy'],
    color: '#0F5A47',
    accent: 'rgba(15,90,71,0.06)',
    gradient: 'linear-gradient(135deg, rgba(15,90,71,0.08) 0%, rgba(46,139,87,0.04) 100%)',
    aiExplanation: 'The model uses a character-level approach rather than word-level to handle Ewe\'s tonal structure and morphology. Audio input is converted to MFCC (Mel-Frequency Cepstral Coefficients) feature vectors, fed into an encoder-decoder architecture. Training on low-resource data required careful data augmentation, noise injection, and speed perturbation to prevent overfitting. This architecture generalizes better to unseen speakers and natural speech variation.',
  },
  {
    id: 2,
    title: 'Website AI Chatbot — PDF-Powered RAG System',
    category: 'LLMs · RAG · Conversational AI',
    year: '2024',
    status: 'Production',
    description:
      'An intelligent chatbot deployed on an organization\'s website that answers user queries by retrieving and reasoning over internal PDF documents. Enables accurate, automated customer support without manual FAQ maintenance.',
    problem:
      'Organizations spend hours manually updating FAQs while users still can\'t find answers buried in policy documents, reports, or manuals. Static chatbots fail when documents change.',
    architecture:
      'Retrieval-Augmented Generation pipeline: PDFs parsed and chunked into semantic passages, embedded with sentence transformers, stored in a vector index. At query time, top-k passages are retrieved and passed as context to an LLM for grounded answer generation. Built with Python, FastAPI backend.',
    metrics: [
      { label: 'Approach', value: 'RAG' },
      { label: 'Data Source', value: 'PDFs' },
      { label: 'Backend', value: 'FastAPI' },
      { label: 'Interface', value: 'Web Chat' },
    ],
    stack: ['Python', 'FastAPI', 'Hugging Face', 'FAISS', 'LangChain', 'JavaScript'],
    color: '#B86A4A',
    accent: 'rgba(184,106,74,0.06)',
    gradient: 'linear-gradient(135deg, rgba(184,106,74,0.08) 0%, rgba(197,154,90,0.04) 100%)',
    aiExplanation: 'RAG (Retrieval-Augmented Generation) grounds the LLM\'s responses in real document content, preventing hallucination. PDF documents are split into overlapping chunks to preserve context across page boundaries. TF-IDF and cosine similarity are used for lightweight retrieval, while sentence transformer embeddings handle semantic matching. The LLM only sees retrieved context — never the full document corpus — keeping inference fast and responses accurate.',
  },
  {
    id: 3,
    title: 'AI-Powered WhatsApp Automation Bot',
    category: 'Automation · WhatsApp API · AI',
    year: '2024',
    status: 'Production',
    description:
      'A fully automated WhatsApp bot that responds intelligently to user messages, processes text with AI models, and handles multi-turn conversations — deployed safely without joining group chats to maintain relevance and safety.',
    problem:
      'Businesses in Kenya rely heavily on WhatsApp for customer support, but manual responses are slow, inconsistent, and don\'t scale. Most bots are keyword-only and fail to understand natural language.',
    architecture:
      'WhatsApp Business API (Twilio) integration with Python backend. NLP layer for intent detection and entity extraction. AI response generation pipeline. Message routing logic that handles individual chats while deliberately excluding group contexts for privacy and relevance.',
    metrics: [
      { label: 'Platform', value: 'WhatsApp' },
      { label: 'API', value: 'Twilio' },
      { label: 'NLP', value: 'Custom' },
      { label: 'Deployment', value: 'Live' },
    ],
    stack: ['Python', 'Flask', 'Twilio API', 'WhatsApp Business API', 'NLTK', 'ngrok'],
    color: '#0F5A47',
    accent: 'rgba(15,90,71,0.06)',
    gradient: 'linear-gradient(135deg, rgba(15,90,71,0.08) 0%, rgba(15,90,71,0.03) 100%)',
    aiExplanation: 'The bot uses a layered NLP pipeline: keyword extraction handles structured commands, while a trained classifier handles ambiguous natural language. Intent confidence thresholds determine whether to respond directly, ask a clarifying question, or escalate to a human. The deliberate exclusion of group chats is a safety design choice — group dynamics create noise and potential for misuse, so the bot only operates in 1-on-1 conversations where context is clear.',
  },
  {
    id: 4,
    title: 'Investment Group Finance Management System',
    category: 'FinTech · Full-Stack · M-Pesa',
    year: '2024',
    status: 'Production',
    description:
      'A complete end-to-end financial management platform for an investment group in Kenya. Handles member accounts, monthly contributions, automated statements, withdrawals, admin analytics, and referral-based M-Pesa payments with STK Push.',
    problem:
      'Investment chamas in Kenya track finances manually using spreadsheets or WhatsApp groups — leading to errors, disputes, and a lack of transparency that erodes member trust.',
    architecture:
      'Python/Flask backend with MySQL database. M-Pesa Daraja API for STK Push payment initiation and callback handling. Referral system with instant reward logic after confirmed transactions. Authenticated admin dashboard with real-time contribution tracking, withdrawal requests, and automated monthly statements.',
    metrics: [
      { label: 'Payment', value: 'M-Pesa' },
      { label: 'Database', value: 'MySQL' },
      { label: 'Auth', value: 'Session' },
      { label: 'Statements', value: 'Auto' },
    ],
    stack: ['Python', 'Flask', 'MySQL', 'M-Pesa API', 'HTML/CSS', 'JavaScript', 'PayPal'],
    color: '#C59A5A',
    accent: 'rgba(197,154,90,0.06)',
    gradient: 'linear-gradient(135deg, rgba(197,154,90,0.08) 0%, rgba(184,106,74,0.04) 100%)',
    aiExplanation: 'The M-Pesa STK Push integration initiates payment prompts directly on users\' phones — no manual paybill entry needed. The system listens for Daraja API callbacks to confirm payment completion before crediting member accounts, preventing fraud from unconfirmed transactions. The referral reward logic is atomic: it only executes after the payment callback status is "Success", ensuring rewards are never paid for failed payments.',
  },
]

export default function Projects() {
  const [expandedAI, setExpandedAI] = useState<number | null>(null)

  return (
    <section
      id="projects"
      style={{ padding: '120px 0', background: '#FFFFFF', position: 'relative' }}
    >
      <div className="bg-diagonal" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ marginBottom: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p className="section-eyebrow" style={{ marginBottom: '16px' }}>Featured Work</p>
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
              Projects built for
              <br />
              <em style={{ fontStyle: 'italic', color: '#0F5A47' }}>real-world impact.</em>
            </h2>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#8A948F', maxWidth: '280px', lineHeight: 1.65 }}>
            Each project solves a genuine problem faced by communities, businesses, and individuals across Kenya and Africa.
          </p>
        </div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="card-hover"
              style={{
                borderRadius: '24px',
                background: '#FFFFFF',
                border: '1px solid rgba(15,90,71,0.08)',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(15,90,71,0.05)',
              }}
            >
              {/* Header bar */}
              <div
                style={{
                  padding: '40px 48px 36px',
                  background: project.gradient,
                  borderBottom: '1px solid rgba(15,90,71,0.06)',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '40px',
                  alignItems: 'start',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 500,
                        color: project.color,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.category}
                    </span>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: project.color, opacity: 0.4 }} />
                    <span
                      style={{
                        padding: '2px 10px',
                        borderRadius: '100px',
                        background: 'rgba(46,139,87,0.12)',
                        color: '#2E8B57',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.6rem',
                      fontWeight: 600,
                      lineHeight: 1.2,
                      color: '#15231E',
                      marginBottom: '16px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#55635D', maxWidth: '560px' }}>
                    {project.description}
                  </p>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '4rem',
                    fontWeight: 700,
                    color: project.color,
                    opacity: 0.12,
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '36px 48px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px' }}>
                <div>
                  <h4 style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#8A948F', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Problem
                  </h4>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.7, color: '#55635D' }}>{project.problem}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#8A948F', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    How It Works
                  </h4>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.7, color: '#55635D' }}>{project.architecture}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#8A948F', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Key Details
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        style={{
                          padding: '10px 12px',
                          borderRadius: '10px',
                          background: project.accent,
                          border: `1px solid ${project.color}18`,
                        }}
                      >
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: project.color, fontFamily: 'var(--font-mono)', lineHeight: 1.2, marginBottom: '2px' }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.62rem', color: '#8A948F', fontWeight: 500 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stack + AI button */}
              <div
                style={{
                  padding: '20px 48px 24px',
                  borderTop: '1px solid rgba(15,90,71,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge"
                      style={{
                        padding: '4px 12px',
                        borderRadius: '6px',
                        background: 'rgba(15,90,71,0.05)',
                        border: '1px solid rgba(15,90,71,0.1)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#55635D',
                        fontFamily: 'var(--font-mono)',
                        cursor: 'default',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setExpandedAI(expandedAI === project.id ? null : project.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 18px',
                    borderRadius: '100px',
                    background: expandedAI === project.id ? '#0F5A47' : 'transparent',
                    color: expandedAI === project.id ? '#fff' : '#0F5A47',
                    border: '1.5px solid rgba(15,90,71,0.25)',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    letterSpacing: '0.02em',
                  }}
                >
                  <span>✦</span>
                  {expandedAI === project.id ? 'Hide AI Explanation' : 'AI Explanation'}
                </button>
              </div>

              {/* AI Explanation panel */}
              {expandedAI === project.id && (
                <div
                  style={{
                    padding: '24px 48px 32px',
                    background: 'rgba(15,90,71,0.03)',
                    borderTop: '1px solid rgba(15,90,71,0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '10px',
                        background: '#0F5A47',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '0.9rem',
                        color: '#fff',
                      }}
                    >
                      ✦
                    </div>
                    <div>
                      <p style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#0F5A47', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                        Technical Deep Dive
                      </p>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#55635D' }}>
                        {project.aiExplanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #projects > div > div:nth-child(2) > div { grid-template-columns: 1fr !important; }
        }
        
        @media (max-width: 768px) {
          #projects > div > div:nth-child(2) { gap: 24px !important; }
          #projects > div > div:nth-child(2) > div {
            border-radius: 16px !important;
          }
          #projects > div > div:nth-child(2) > div > div:nth-child(1) {
            padding: 32px 28px 28px !important;
          }
          #projects > div > div:nth-child(2) > div > div:nth-child(2) {
            padding: 24px 28px 32px !important;
          }
        }
        
        @media (max-width: 640px) {
          #projects > div > div:nth-child(2) > div > div:nth-child(1) {
            padding: 24px 20px 20px !important;
            gap: 24px !important;
          }
          #projects > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) {
            display: none;
          }
          #projects > div > div:nth-child(2) > div > div:nth-child(2) {
            padding: 20px 20px 24px !important;
            gap: 12px !important;
          }
          #projects > div > div:nth-child(2) > div > div:nth-child(2) h3 {
            font-size: 1.25rem !important;
          }
          #projects > div > div:nth-child(2) > div > div:nth-child(3) {
            padding: 12px 20px 16px !important;
            gap: 6px !important;
            flex-wrap: wrap !important;
          }
        }
      `}</style>
    </section>
  )
}
