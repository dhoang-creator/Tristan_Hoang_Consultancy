interface LogoMarkProps {
  size?: number
  color?: string
}

export default function LogoMark({ size = 32, color = 'var(--navy)' }: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <path
        fill={color}
        fillRule="evenodd"
        d="M5 0 H95 A5 5 0 0 1 100 5 V95 A5 5 0 0 1 95 100 H5 A5 5 0 0 1 0 95 V5 A5 5 0 0 1 5 0 Z M24 25 L76 25 L76 35 L56 35 L56 76 L44 76 L44 35 L24 35 Z"
      />
    </svg>
  )
}