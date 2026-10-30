export type Difficulty = 'green' | 'blue' | 'black' | 'double' | 'lodge'

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  green: 'Easiest',
  blue: 'More difficult',
  black: 'Most difficult',
  double: 'Experts only',
  lodge: 'Base lodge',
}

// Ski-area trail rating symbols
export function TrailMark({ kind, size = 16 }: { kind: Difficulty; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 20 20', 'aria-hidden': true, className: `mark mark-${kind}` }
  switch (kind) {
    case 'green':
      return <svg {...common}><circle cx="10" cy="10" r="9" /></svg>
    case 'blue':
      return <svg {...common}><rect x="1.5" y="1.5" width="17" height="17" /></svg>
    case 'black':
      return <svg {...common}><path d="M10 0 L20 10 L10 20 L0 10Z" /></svg>
    case 'double':
      return (
        <svg {...common} width={size * 1.8} viewBox="0 0 36 20">
          <path d="M9 1 L17 10 L9 19 L1 10Z M27 1 L35 10 L27 19 L19 10Z" />
        </svg>
      )
    case 'lodge':
      return <svg {...common}><path d="M10 1 L19 9 H16.5 V19 H12 V13 H8 V19 H3.5 V9 H1Z" /></svg>
  }
}
