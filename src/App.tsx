import { useState, useCallback } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Research from './components/Research'
import Contact from './components/Contact'
import AIAssistant from './components/AIAssistant'
import VoiceMode from './components/VoiceMode'
import SelectionToolbar from './components/SelectionToolbar'
import InlineAIPopover from './components/InlineAIPopover'

export default function App() {
  const [assistantOpen, setAssistantOpen] = useState(false)
  const [voiceOpen, setVoiceOpen] = useState(false)

  // Selection AI state
  const [inlinePopover, setInlinePopover] = useState<{
    text: string
    pos: { x: number; y: number }
  } | null>(null)

  // Queue for pre-filled messages sent into the AI chat
  const [pendingMessage, setPendingMessage] = useState<{ question: string; context: string } | null>(null)

  const handleAskAIFromSelection = useCallback((text: string, pos: { x: number; y: number }) => {
    setInlinePopover({ text, pos })
  }, [])

  const handleInlineSend = useCallback((question: string, context: string) => {
    setInlinePopover(null)
    setPendingMessage({ question, context })
    setAssistantOpen(true)
  }, [])

  return (
    // Relative so absolute-positioned toolbar can anchor to page coords
    <div style={{ position: 'relative', minHeight: '100vh', background: '#F8F8F4', fontFamily: 'var(--font-sans)' }}>
      <Navigation onOpenAssistant={() => setAssistantOpen(true)} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Research />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: '48px 32px',
          borderTop: '1px solid rgba(15,90,71,0.08)',
          background: '#F8F8F4',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#0F5A47',
                marginBottom: '4px',
              }}
            >
              Emmanuel Cherutich.
            </div>
            <div style={{ fontSize: '0.75rem', color: '#8A948F' }}>
              AI Engineer · ML Developer · Technical Mentor · Mombasa, Kenya
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#8A948F', textAlign: 'right' }}>
            <div>© {new Date().getFullYear()} Emmanuel Cherutich. All rights reserved.</div>
            <div style={{ marginTop: '4px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
              Built with precision & intelligence.
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            footer {
              padding: 36px 24px !important;
            }
            footer > div {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 20px !important;
            }
            footer > div > div:last-child {
              text-align: left !important;
            }
            footer > div > div > div {
              font-size: 0.9rem !important;
            }
            footer > div > div > div:last-child {
              font-size: 0.7rem !important;
            }
          }
        `}</style>
      </footer>

      {/* Global selection toolbar — rendered in page flow so absolute pos = page coords */}
      <SelectionToolbar onAskAI={handleAskAIFromSelection} />

      {/* Inline AI popover */}
      {inlinePopover && (
        <InlineAIPopover
          selectedText={inlinePopover.text}
          anchorPos={inlinePopover.pos}
          onSend={handleInlineSend}
          onClose={() => setInlinePopover(null)}
        />
      )}

      {/* Floating AI Assistant button */}
      <button
        onClick={() => setAssistantOpen(!assistantOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: assistantOpen ? '#123F35' : '#0F5A47',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(15,90,71,0.4), 0 2px 8px rgba(15,90,71,0.2)',
          zIndex: 150,
          transition: 'all 0.3s ease',
          fontSize: '1.3rem',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.transform = 'scale(1.08)'
          el.style.boxShadow = '0 12px 40px rgba(15,90,71,0.5)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.transform = 'scale(1)'
          el.style.boxShadow = '0 8px 32px rgba(15,90,71,0.4), 0 2px 8px rgba(15,90,71,0.2)'
        }}
        aria-label="Open AI Assistant"
      >
        {assistantOpen ? (
          <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600 }}>×</span>
        ) : (
          <span style={{ fontSize: '1.2rem' }}>✦</span>
        )}
        {!assistantOpen && (
          <span
            style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '50%',
              border: '1.5px solid rgba(15,90,71,0.35)',
              animation: 'pulse-ring 2.5s ease-out infinite',
            }}
          />
        )}
      </button>

      {/* AI Chat — receives pending context message when triggered from selection */}
      <AIAssistant
        open={assistantOpen}
        onClose={() => setAssistantOpen(false)}
        onVoiceMode={() => {
          setAssistantOpen(false)
          setVoiceOpen(true)
        }}
        pendingMessage={pendingMessage}
        onPendingMessageConsumed={() => setPendingMessage(null)}
      />

      {/* Voice Mode */}
      <VoiceMode
        open={voiceOpen}
        onClose={() => setVoiceOpen(false)}
      />

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
