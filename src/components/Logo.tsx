interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <img 
      src="/logo.png" 
      alt="MensConcept Logo" 
      className={className}
      onError={(e) => {
        // Fallback se a logo não existir
        const target = e.target as HTMLImageElement
        target.style.display = 'none'
      }}
    />
  )
}

