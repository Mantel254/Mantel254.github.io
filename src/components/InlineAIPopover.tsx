import { useState, useEffect, useRef } from 'react'

interface Props {
  selectedText: string
  anchorPos: { x: number; y: number }
  onSend: (question: string, context: string) => void
  onClose: () => void
}

export default function InlineAIPopover({ selectedText, anchorPos, onSend, onClose }: Props) {
  const [input, setInput] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const [resolvedPos, setResolvedPos] = useState({ x: 0, y: 0, above: true })
  const popoverRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Resolve position once mounted so we know actual popover dimensions
  useEffect(() => {
    const W = 360
    const H_ESTIMATE = 220
    const MARGIN = 12
    const viewW = window.innerWidth
    const mobile = viewW < 640

    setIsMobile(mobile)

    if (mobile) {
      // On mobile: fixed, centered at bottom of screen
      setResolvedPos({ x: 0, y: 0, above: true })
    } else {
      let x = anchorPos.x
      x = Math.max(MARGIN, Math.min(x, viewW - W - MARGIN))

      const scrollY = window.scrollY
      const viewH = window.innerHeight
      const pageY = anchorPos.y
      const screenY = pageY - scrollY
      const above = screenY > H_ESTIMATE + 60

      const y = above
        ? pageY - H_ESTIMATE - 8
        : pageY + 52

      setResolvedPos({ x, y, above })
    }

    // Focus input after layout
    const t = setTimeout(() => inputRef.current?.focus(), 60)
    return () => clearTimeout(t)
  }, [anchorPos])

  // Close on Escape or outside click
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    const onPointer = (e: PointerEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [onClose])

  const handleSend = () => {
    if (!input.trim()) return
    onSend(input.trim(), selectedText)
    onClose()
  }

  const truncated = selectedText.length > 120
    ? selectedText.slice(0, 120) + '…'
    : selectedText

  const POPOVER_W = 360

  const containerStyle: React.CSSProperties = isMobile
    ? {
        position: 'fixed',
        left: '50%',
        bottom: '80px',
        transform: 'translateX(-50%)',
        width: `calc(100vw - 24px)`,
        maxWidth: '440px',
        zIndex: 9100,
      }
    : {
        position: 'absolute',
        left: `${resolvedPos.x}px`,
        top: `${resolvedPos.y}px`,
        width: `${POPOVER_W}px`,
        zIndex: 9100,
      }

  return (
    <div style={containerStyle}>
      <div
        ref={popoverRef}
        style={{
          borderRadius: '20px',
          background: '#FFFFFF',
          border: '1px solid rgba(15,90,71,0.12)',
          boxShadow: '0 20px 60px rgba(15,90,71,0.16), 0 4px 16px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          animation: 'popover-enter 0.2s cubic-bezier(0.34,1.4,0.64,1) both',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '14px 16px 12px',
            borderBottom: '1px solid rgba(15,90,71,0.07)',
            background: 'rgba(15,90,71,0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '8px',
                background: '#0F5A47',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '0.72rem',
                flexShrink: 0,
              }}
            >
              ✦
            </div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#15231E',
                letterSpacing: '0.01em',
              }}
            >
              Ask AI about selection
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '7px',
              border: 'none',
              background: 'transparent',
              color: '#8A948F',
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        {/* Selected text preview */}
        <div
          style={{
            margin: '12px 14px 0',
            padding: '10px 12px',
            borderRadius: '10px',
            background: 'rgba(15,90,71,0.05)',
            border: '1px solid rgba(15,90,71,0.1)',
            display: 'flex',
            gap: '8px',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              width: '2.5px',
              borderRadius: '2px',
              background: '#0F5A47',
              flexShrink: 0,
              alignSelf: 'stretch',
              minHeight: '16px',
            }}
          />
          <p
            style={{
              fontSize: '0.78rem',
              color: '#55635D',
              lineHeight: 1.55,
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            "{truncated}"
          </p>
        </div>

        {/* Suggested prompts */}
        <div style={{ padding: '10px 14px 6px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {['Explain this', 'Summarise', 'Give context'].map((s) => (
            <button
              key={s}
              onClick={() => {
                onSend(s, selectedText)
                onClose()
              }}
              style={{
                padding: '4px 10px',
                borderRadius: '100px',
                background: 'transparent',
                border: '1px solid rgba(15,90,71,0.15)',
                color: '#55635D',
                fontSize: '0.7rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                WebkitTapHighlightColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(15,90,71,0.06)'
                el.style.color = '#0F5A47'
                el.style.borderColor = 'rgba(15,90,71,0.3)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.color = '#55635D'
                el.style.borderColor = 'rgba(15,90,71,0.15)'
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input row */}
        <div
          style={{
            padding: '6px 12px 14px',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend()
              if (e.key === 'Escape') onClose()
            }}
            placeholder="Ask anything about this..."
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '10px',
              border: '1.5px solid rgba(15,90,71,0.15)',
              background: '#F8F8F4',
              fontSize: '0.84rem',
              color: '#15231E',
              fontFamily: 'var(--font-sans)',
              outline: 'none',
              minWidth: 0,
              transition: 'border-color 0.2s ease',
            }}
            onFocus={(e) => { e.target.style.borderColor = '#0F5A47' }}
            onBlur={(e) => { e.target.style.borderColor = 'rgba(15,90,71,0.15)' }}
          />
          <button
            onClick={handleSend}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: input.trim() ? '#0F5A47' : 'rgba(15,90,71,0.1)',
              border: 'none',
              color: input.trim() ? '#fff' : '#8A948F',
              fontSize: '1rem',
              cursor: input.trim() ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'all 0.2s ease',
              WebkitTapHighlightColor: 'transparent',
            }}
            onMouseEnter={(e) => { if (input.trim()) (e.currentTarget as HTMLElement).style.background = '#123F35' }}
            onMouseLeave={(e) => { if (input.trim()) (e.currentTarget as HTMLElement).style.background = '#0F5A47' }}
          >
            ↑
          </button>
        </div>
      </div>

      <style>{`
        @keyframes popover-enter {
          from { opacity: 0; transform: scale(0.93) translateY(6px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  )
}
