import { useState, useRef, useEffect } from 'react'
import emmanuelPhoto from '@/imports/Gemini_Generated_Image_b5i3oeb5i3oeb5i3.png'

type Message = { role: 'assistant' | 'user'; text: string }

const SUGGESTED = [
  'Tell me about Emmanuel',
  'Explain a project',
  'What are his skills?',
  'How to contact him?',
  'Open to opportunities?',
]

const KNOWLEDGE: Record<string, string> = {
  default: "I'm Emmanuel Cherutich's AI assistant. Ask me anything about his projects, engineering experience, skills, or how to get in touch.",

  about: "Emmanuel Cherutich is a Computer Science student at the Technical University of Mombasa, Kenya. He specializes in AI, machine learning, software engineering, and automation — building systems that solve real problems for communities across Africa. He's also a technical mentor and trainer.",

  projects: "Emmanuel has built several production AI systems: an Ewe language speech transcription model for low-resource ASR, a PDF-powered RAG chatbot for organizational websites, an AI WhatsApp automation bot using Twilio, a full finance management system with M-Pesa STK Push integration, and a referral-based payment system. Each project solves a real problem in the Kenyan/African context.",

  ewe: "The Ewe Language Speech Transcription Model is Emmanuel's most research-oriented project. He built a custom ASR system for Ewe — a West African language with very few AI resources. The model uses MFCC audio features, deep learning with TensorFlow/Keras, and character-level NLP to transcribe speech. It directly addresses the severe underrepresentation of African languages in global AI systems.",

  rag: "Emmanuel built a RAG (Retrieval-Augmented Generation) chatbot for an organization's website. It ingests internal PDF documents, chunks them, embeds with sentence transformers, indexes them in a vector store, and uses LLM-generated answers grounded in retrieved content — providing accurate automated support without hallucination.",

  whatsapp: "The WhatsApp AI Bot uses the Twilio WhatsApp Business API with a Python/Flask backend. It handles NLP-powered intent detection to respond intelligently to user messages in 1-on-1 chats. It deliberately avoids group chats for safety. This enables Kenyan businesses to automate customer communication on their most-used messaging platform.",

  finance: "Emmanuel built a complete finance management system for an investment group — member accounts, monthly contributions, automated statements, withdrawal requests, admin analytics, and M-Pesa STK Push for direct phone payments. It also includes a referral system that rewards users after confirmed transactions. The system brings transparency and automation to Kenya's informal chama culture.",

  skills: "Emmanuel's technical stack: Python (primary), Flask, FastAPI, TensorFlow, Keras, Pandas, NLTK, Hugging Face Transformers, Kivy, JavaScript, SQL, HTML/CSS. Tools: Ubuntu Linux, Anaconda, Git, VS Code, MySQL. Integrations: WhatsApp Business API, Twilio, M-Pesa Daraja API, PayPal. AI methods: LSTM, ARIMA, TF-IDF, cosine similarity, RAG, speech transcription.",

  experience: "Emmanuel is currently a Technical Mentor at the Technical University of Mombasa (2024–Present), where he mentors students in AI, ML, Python, and Linux. In 2025 he interned at Swahilipot Hub Foundation as a Software Development Intern and also served as a Frontend Technical Trainer there, teaching HTML, CSS, JavaScript, and UI/UX to youth cohorts.",

  contact: "You can reach Emmanuel at: Email — cherutichemmanuel87@gmail.com | Phone — +254 727 683 579 | Location — Mombasa, Kenya (remote friendly). He's open to internships, junior AI/software engineering roles, freelance projects, and collaboration.",

  education: "Emmanuel is studying for a Bachelor of Science in Computer Science at the Technical University of Mombasa. Key coursework includes Machine Learning, Data Structures, Algorithms, Cybersecurity, Web Development, and Distributed Systems.",

  opportunities: "Yes! Emmanuel is actively open to internships, junior software/AI engineering roles, freelance AI projects, research collaborations, and community tech initiatives. He's based in Mombasa but is comfortable working remotely. Contact him at cherutichemmanuel87@gmail.com.",
}

function getResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes('ewe') || lower.includes('speech') || lower.includes('transcri') || lower.includes('language model')) return KNOWLEDGE.ewe
  if (lower.includes('rag') || lower.includes('pdf') || lower.includes('chatbot') || lower.includes('retrieval')) return KNOWLEDGE.rag
  if (lower.includes('whatsapp') || lower.includes('twilio') || lower.includes('automation bot')) return KNOWLEDGE.whatsapp
  if (lower.includes('finance') || lower.includes('mpesa') || lower.includes('m-pesa') || lower.includes('investment') || lower.includes('chama') || lower.includes('payment')) return KNOWLEDGE.finance
  if (lower.includes('project') || lower.includes('build') || lower.includes('work') || lower.includes('portfolio')) return KNOWLEDGE.projects
  if (lower.includes('skill') || lower.includes('tech') || lower.includes('python') || lower.includes('tensorflow') || lower.includes('stack')) return KNOWLEDGE.skills
  if (lower.includes('experience') || lower.includes('mentor') || lower.includes('swahili') || lower.includes('trainer') || lower.includes('intern')) return KNOWLEDGE.experience
  if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach')) return KNOWLEDGE.contact
  if (lower.includes('education') || lower.includes('university') || lower.includes('degree') || lower.includes('study') || lower.includes('course')) return KNOWLEDGE.education
  if (lower.includes('hire') || lower.includes('job') || lower.includes('role') || lower.includes('open') || lower.includes('opportunity') || lower.includes('available') || lower.includes('freelance')) return KNOWLEDGE.opportunities
  if (lower.includes('who') || lower.includes('about') || lower.includes('emmanuel') || lower.includes('background') || lower.includes('tell me')) return KNOWLEDGE.about
  return "That's a good question! For the most accurate answer, you can reach Emmanuel directly at cherutichemmanuel87@gmail.com or +254 727 683 579. He's always happy to discuss AI, his projects, or potential collaborations."
}

export default function AIAssistant({
  open,
  onClose,
  onVoiceMode,
  pendingMessage,
  onPendingMessageConsumed,
}: {
  open: boolean
  onClose: () => void
  onVoiceMode: () => void
  pendingMessage?: { question: string; context: string } | null
  onPendingMessageConsumed?: () => void
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: "Hello. I'm Emmanuel's AI Assistant. I can answer questions about his projects, engineering experience, technical skills, and how to get in touch with him.",
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)
  const consumedRef = useRef(false)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  // Inject pending message from selection toolbar when chat opens
  useEffect(() => {
    if (!open || !pendingMessage || consumedRef.current) return
    consumedRef.current = true
    const { question, context } = pendingMessage
    const preview = context.length > 80 ? context.slice(0, 80) + '…' : context
    const userText = `"${preview}" — ${question}`
    const userMsg: Message = { role: 'user', text: userText }
    setMessages((m) => [...m, userMsg])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      const fullPrompt = `${question} (about: "${context}")`
      setMessages((m) => [...m, { role: 'assistant', text: getResponse(fullPrompt) }])
      onPendingMessageConsumed?.()
    }, 900)
  }, [open, pendingMessage, onPendingMessageConsumed])

  // Reset consumed flag when a new pending message arrives
  useEffect(() => {
    if (pendingMessage) consumedRef.current = false
  }, [pendingMessage])

  const send = (text: string) => {
    if (!text.trim()) return
    const userMsg: Message = { role: 'user', text }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { role: 'assistant', text: getResponse(text) }])
    }, 900 + Math.random() * 500)
  }

  if (!open) return null

  return (
    <div
      className="ai-chat-panel"
      style={{
        position: 'fixed',
        bottom: '88px',
        right: '24px',
        width: '380px',
        maxHeight: '580px',
        borderRadius: '24px',
        background: '#FFFFFF',
        border: '1px solid rgba(15,90,71,0.1)',
        boxShadow: '0 24px 80px rgba(15,90,71,0.18), 0 8px 24px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 200,
        animation: 'fade-up 0.3s ease both',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '20px 20px 16px',
          borderBottom: '1px solid rgba(15,90,71,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'rgba(248,248,244,0.8)',
        }}
      >
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <img
            src={emmanuelPhoto}
            alt="Emmanuel Cherutich"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center top',
              border: '2px solid rgba(15,90,71,0.15)',
            }}
          />
          <span
            style={{
              position: 'absolute',
              bottom: '1px',
              right: '1px',
              width: '9px',
              height: '9px',
              borderRadius: '50%',
              background: '#2E8B57',
              border: '1.5px solid #fff',
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#15231E' }}>Emmanuel's AI</div>
          <div style={{ fontSize: '0.7rem', color: '#2E8B57', fontWeight: 500 }}>● Online · Typically instant</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={onVoiceMode}
            title="Voice Mode"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              border: '1px solid rgba(15,90,71,0.12)',
              background: 'rgba(15,90,71,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#0F5A47',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,90,71,0.1)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,90,71,0.05)' }}
          >
            🎙
          </button>
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              border: '1px solid rgba(15,90,71,0.12)',
              background: 'rgba(15,90,71,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#55635D',
              fontSize: '1rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,90,71,0.1)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,90,71,0.05)' }}
          >
            ×
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        className="chat-scroll"
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              alignItems: 'flex-end',
              gap: '8px',
            }}
          >
            {msg.role === 'assistant' && (
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#0F5A47',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  color: '#fff',
                  fontWeight: 700,
                }}
              >
                ✦
              </div>
            )}
            <div
              style={{
                maxWidth: '80%',
                padding: '12px 16px',
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '4px 16px 16px 16px',
                background: msg.role === 'user' ? '#0F5A47' : '#F8F8F4',
                color: msg.role === 'user' ? '#fff' : '#15231E',
                fontSize: '0.84rem',
                lineHeight: 1.65,
                border: msg.role === 'assistant' ? '1px solid rgba(15,90,71,0.08)' : 'none',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {typing && (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#0F5A47',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.65rem',
                color: '#fff',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              ✦
            </div>
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '4px 16px 16px 16px',
                background: '#F8F8F4',
                border: '1px solid rgba(15,90,71,0.08)',
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#8A948F',
                    animation: 'speak-wave 0.9s ease-in-out infinite',
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Suggested prompts */}
      {messages.length <= 1 && (
        <div style={{ padding: '0 12px 12px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {SUGGESTED.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              style={{
                padding: '5px 12px',
                borderRadius: '100px',
                background: 'rgba(15,90,71,0.06)',
                border: '1px solid rgba(15,90,71,0.12)',
                color: '#0F5A47',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,90,71,0.12)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,90,71,0.06)' }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div
        style={{
          padding: '12px 16px 16px',
          borderTop: '1px solid rgba(15,90,71,0.06)',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          placeholder="Ask anything about Emmanuel..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') send(input) }}
          style={{
            flex: 1,
            padding: '10px 14px',
            borderRadius: '10px',
            border: '1.5px solid rgba(15,90,71,0.12)',
            background: '#F8F8F4',
            fontSize: '0.84rem',
            color: '#15231E',
            fontFamily: 'var(--font-sans)',
            outline: 'none',
          }}
          onFocus={(e) => { e.target.style.borderColor = '#0F5A47' }}
          onBlur={(e) => { e.target.style.borderColor = 'rgba(15,90,71,0.12)' }}
        />
        <button
          onClick={() => send(input)}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: input.trim() ? '#0F5A47' : 'rgba(15,90,71,0.1)',
            border: 'none',
            cursor: input.trim() ? 'pointer' : 'default',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            color: input.trim() ? '#fff' : '#8A948F',
            fontSize: '0.9rem',
            flexShrink: 0,
          }}
        >
          ↑
        </button>
      </div>
    </div>
  )
}
