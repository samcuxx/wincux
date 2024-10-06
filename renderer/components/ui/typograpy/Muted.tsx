import React from 'react'

interface TypographyMutedProps {
  text: string // The text to display as muted
  className?: string // Optional className
}

const Muted: React.FC<TypographyMutedProps> = ({ text, className }) => {
  return (
    <p className={`text-muted-foreground text-sm ${className || ''}`}>{text}</p>
  )
}

export default Muted
