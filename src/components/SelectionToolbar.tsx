import { useEffect, useState, useCallback, useRef } from 'react'

interface ToolbarPos {
  x: number
  y: number
  above: boolean
}

interface Props {
  onAskAI: (text: string, pos: { x: number; y: number }) => void
}

export default function SelectionToolbar({ onAskAI }: Props) {
  const [visible, setVisible] = useState(false)
  const [selectedText, setSelectedText] = useState('')
  const [pos, setPos] = useState<ToolbarPos>({ x: 0, y: 0, above: true })
  const toolbarRef = useRef<HTMLDivElement>(null)
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const getSelectionInfo = useCallback(() => {
    const sel = window.getSelection()
    if (!sel || sel.isCollapsed || !sel.toString().trim()) return null
    const text = sel.toString().trim()
    if (text.length < 2) return null

    const range = sel.getRangeAt(0)
    const rect = range.getBoundingClientRect()

    const TOOLBAR_H = 44
    const MARGIN = 10
    const viewW = window.innerWidth
    const scrollY = window.scrollY

    const centerX = rect.left + rect.width / 2
    const toolbarW = 140
    let x = centerX - toolbarW / 2
    x = Math.max(MARGIN, Math.min(x, viewW - toolbarW - MARGIN))

    const spaceAbove = rect.top
    const above = spaceAbove > TOOLBAR_H + MARGIN
    const y = above
      ? rect.top + scrollY - TOOLBAR_H - MARGIN
      : rect.bottom + scrollY + MARGIN

    return { text, x, y, above }
  }, [])

  const handleSelectionChange = useCallback(() => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current)
    const info = getSelectionInfo()
    if (info) {
      setSelectedText(info.text)
      setPos({ x: info.x, y: info.y, above: info.above })
      setVisible(true)
    } else {
      hideTimeout.current = setTimeout(() => setVisible(false), 120)
    }
  }, [getSelectionInfo])

  useEffect(() => {
    const onMouseUp = () => setTimeout(handleSelectionChange, 10)
    const onTouchEnd = () => setTimeout(handleSelectionChange, 80)

    const onPointerDown = (e: PointerEvent) => {
      if (toolbarRef.current?.contains(e.target as Node)) return
      const sel = window.getSelection()
      if (!sel || sel.isCollapsed) {
        hideTimeout.current = setTimeout(() => setVisible(false), 150)
      }
    }

    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('touchend', onTouchEnd)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('selectionchange', handleSelectionChange)

    return () => {
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('touchend', onTouchEnd)
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('selectionchange', handleSelectionChange)
      if (hideTimeout.current) clearTimeout(hideTimeout.current)
    }
  }, [handleSelectionChange])

  const handleAskAI = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setVisible(false)
    onAskAI(selectedText, { x: pos.x, y: pos.y })
    window.getSelection()?.removeAllRanges()
  }

  if (!visible) return null

  return (
    <div
      ref={toolbarRef}
      style={{
        position: 'absolute',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        zIndex: 9000,
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '5px 6px',
        borderRadius: '12px',
        background: '#15231E',
        boxShadow: '0 8px 32px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.12)',
        border: '1px solid rgba(255,255,255,0.08)',
        animation: 'toolbar-pop 0.15s cubic-bezier(0.34,1.56,0.64,1) both',
        pointerEvents: 'auto',
        userSelect: 'none',
        touchAction: 'none',
        // Anchor arrow
        ['--arrow-above' as string]: pos.above ? 'flex' : 'none',
        ['--arrow-below' as string]: pos.above ? 'none' : 'flex',
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      {/* Arrow indicator pointing at selection */}
      {pos.above && (
        <div style={{
          position: 'absolute',
          bottom: '-6px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
          borderTop: '6px solid #15231E',
        }} />
      )}
      {!pos.above && (
        <div style={{
          position: 'absolute',
          top: '-6px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
          borderBottom: '6px solid #15231E',
        }} />
      )}

      {/* Ask AI button */}
      <button
        onMouseDown={(e) => e.preventDefault()}
        onClick={handleAskAI}
        onTouchEnd={handleAskAI}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 12px',
          borderRadius: '8px',
          background: '#0F5A47',
          border: 'none',
          color: '#fff',
          fontSize: '0.75rem',
          fontWeight: 700,
          cursor: 'pointer',
          letterSpacing: '0.02em',
          fontFamily: 'var(--font-sans)',
          whiteSpace: 'nowrap',
          transition: 'background 0.15s ease',
          minHeight: '32px',
          WebkitTapHighlightColor: 'transparent',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#123F35' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0F5A47' }}
      >
        <span style={{ fontSize: '0.8rem' }}>✦</span>
        Ask AI
      </button>

      {/* Copy button */}
      <button
        onMouseDown={(e) => e.preventDefault()}
        onClick={(e) => {
          e.preventDefault()
          navigator.clipboard?.writeText(selectedText).catch(() => {})
          setVisible(false)
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '7px',
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.12)',
          color: 'rgba(255,255,255,0.65)',
          fontSize: '0.75rem',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          WebkitTapHighlightColor: 'transparent',
        }}
        title="Copy"
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'rgba(255,255,255,0.1)'
          el.style.color = '#fff'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'transparent'
          el.style.color = 'rgba(255,255,255,0.65)'
        }}
      >
        ⎘
      </button>

      <style>{`
        @keyframes toolbar-pop {
          from { opacity: 0; transform: scale(0.88) translateY(4px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  )
}
