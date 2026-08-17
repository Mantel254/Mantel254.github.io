import { useState, useEffect, useRef } from 'react'
import emmanuelPhoto from '@/imports/Gemini_Generated_Image_b5i3oeb5i3oeb5i3.png'

const VOICE_RESPONSES = [
  "Hello! I'm Emmanuel Cherutich's AI assistant. How can I help you today?",
  "Emmanuel is a Computer Science student at the Technical University of Mombasa, Kenya. He specializes in AI, machine learning, automation, and software engineering — building systems that solve real problems for communities across Africa.",
  "Emmanuel has built several production AI systems: a speech transcription model for the Ewe language, a PDF-powered RAG chatbot, an AI WhatsApp automation bot using Twilio, and a full financial management system with M-Pesa STK Push integration.",
  "He's also a technical mentor and trainer — he mentors students in AI and Python at his university, and runs frontend development training sessions at Swahilipot Hub in Mombasa for youth learners.",
  "Emmanuel is currently open to internships, junior engineering roles, freelance AI projects, and research collaborations. You can reach him at cherutichemmanuel87 at gmail dot com, or call plus two five four seven two seven six eight three five seven nine.",
]

export default function VoiceMode({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [state, setState] = useState<'idle' | 'listening' | 'speaking'>('idle')
  const [subtitle, setSubtitle] = useState('Tap the microphone to start speaking')
  const [responseIdx, setResponseIdx] = useState(0)
  const [breatheScale, setBreatheScale] = useState(1)
  const breatheRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!open) return
    breatheRef.current = setInterval(() => {
      setBreatheScale((s) => (s === 1 ? 1.03 : 1))
    }, 2000)
    return () => { if (breatheRef.current) clearInterval(breatheRef.current) }
  }, [open])

  const handleMic = () => {
    if (state === 'idle') {
      setState('listening')
      setSubtitle('Listening...')
      setTimeout(() => {
        setState('speaking')
        const response = VOICE_RESPONSES[responseIdx % VOICE_RESPONSES.length]
        setResponseIdx((i) => i + 1)
        setSubtitle(response)
        const words = response.split(' ').length
        const duration = (words / 2.5) * 1000
        setTimeout(() => {
          setState('idle')
          setSubtitle('Tap the microphone to start speaking')
        }, duration)
      }, 1800)
    } else if (state === 'listening') {
      setState('idle')
      setSubtitle('Tap the microphone to start speaking')
    }
  }

  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(21, 35, 30, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        animation: 'fade-in 0.3s ease both',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          padding: '40px 32px 44px',
          borderRadius: '32px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0',
          position: 'relative',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '100px',
              background: 'rgba(110,231,183,0.1)',
              border: '1px solid rgba(110,231,183,0.2)',
              marginBottom: '12px',
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#6EE7B7', display: 'inline-block' }} />
            <span style={{ fontSize: '0.65rem', color: '#6EE7B7', fontWeight: 600, letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              Voice Mode
            </span>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>
            Emmanuel's AI · Conversational Interface
          </div>
        </div>

        {/* Avatar */}
        <div style={{ position: 'relative', marginBottom: '36px' }}>
          {/* Outer glow rings */}
          {state === 'speaking' && (
            <>
              <div
                style={{
                  position: 'absolute',
                  inset: '-20px',
                  borderRadius: '50%',
                  border: '1px solid rgba(15,90,71,0.3)',
                  animation: 'pulse-ring 2s ease-out infinite',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '-36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(15,90,71,0.15)',
                  animation: 'pulse-ring 2s ease-out infinite 0.4s',
                }}
              />
            </>
          )}
          {state === 'listening' && (
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '50%',
                border: '2px solid rgba(197,154,90,0.4)',
                animation: 'pulse-ring 1.2s ease-out infinite',
              }}
            />
          )}

          {/* Avatar image */}
          <div
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: `3px solid ${state === 'speaking' ? 'rgba(15,90,71,0.6)' : state === 'listening' ? 'rgba(197,154,90,0.6)' : 'rgba(255,255,255,0.15)'}`,
              transition: 'border-color 0.4s ease',
              transform: `scale(${breatheScale})`,
              transitionProperty: 'transform, border-color',
              transitionDuration: '2s, 0.4s',
            }}
          >
            <img
              src={emmanuelPhoto}
              alt="Emmanuel AI Avatar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                filter: state === 'idle' ? 'grayscale(20%)' : 'grayscale(0%)',
                transition: 'filter 0.4s ease',
              }}
            />
            {/* Speaking overlay shimmer */}
            {state === 'speaking' && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(15,90,71,0.15) 0%, transparent 60%)',
                  animation: 'fade-in 0.3s ease',
                }}
              />
            )}
          </div>

          {/* Status indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '6px',
              right: '6px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: state === 'speaking' ? '#0F5A47' : state === 'listening' ? '#C59A5A' : '#2E8B57',
              border: '2.5px solid rgba(21,35,30,0.9)',
              transition: 'background 0.3s ease',
            }}
          />
        </div>

        {/* Waveform */}
        <div style={{ height: '48px', display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '24px' }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: '3px',
                borderRadius: '2px',
                background: state === 'speaking'
                  ? `rgba(15,90,71,${0.4 + Math.random() * 0.5})`
                  : state === 'listening'
                  ? `rgba(197,154,90,${0.3 + Math.random() * 0.4})`
                  : 'rgba(255,255,255,0.12)',
                height: state !== 'idle'
                  ? `${12 + Math.abs(Math.sin(i * 0.8)) * 28 + Math.random() * 10}px`
                  : `${4 + Math.sin(i * 0.5) * 4}px`,
                transition: 'height 0.15s ease, background 0.3s ease',
                animation: state !== 'idle' ? `speak-wave ${0.4 + (i % 5) * 0.08}s ease-in-out infinite alternate` : 'none',
                animationDelay: `${i * 0.04}s`,
              }}
            />
          ))}
        </div>

        {/* Subtitle */}
        <div
          style={{
            minHeight: '60px',
            textAlign: 'center',
            padding: '0 16px',
            marginBottom: '36px',
          }}
        >
          <p
            style={{
              fontSize: '0.9rem',
              color: state === 'idle' ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.85)',
              lineHeight: 1.7,
              transition: 'color 0.4s ease',
              fontStyle: state === 'speaking' ? 'normal' : 'normal',
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Microphone button */}
        <button
          onClick={handleMic}
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: state === 'listening'
              ? 'rgba(197,154,90,0.9)'
              : state === 'speaking'
              ? 'rgba(15,90,71,0.9)'
              : 'rgba(255,255,255,0.1)',
            border: `2px solid ${state === 'listening' ? 'rgba(197,154,90,0.5)' : state === 'speaking' ? 'rgba(15,90,71,0.4)' : 'rgba(255,255,255,0.15)'}`,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.6rem',
            transition: 'all 0.3s ease',
            boxShadow: state !== 'idle' ? `0 0 0 8px ${state === 'listening' ? 'rgba(197,154,90,0.1)' : 'rgba(15,90,71,0.1)'}` : 'none',
          }}
          onMouseEnter={(e) => {
            if (state === 'idle') (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.18)'
          }}
          onMouseLeave={(e) => {
            if (state === 'idle') (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'
          }}
        >
          {state === 'speaking' ? '⊕' : '🎙'}
        </button>

        <div style={{ marginTop: '12px', fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
          {state === 'idle' ? 'TAP TO SPEAK' : state === 'listening' ? 'LISTENING · TAP TO CANCEL' : 'SPEAKING'}
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
