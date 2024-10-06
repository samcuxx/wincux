import React from 'react'

interface TypographyLeadProps {
  text: string // The text to display as lead
  className?: string // Optional className
}

const Lead: React.FC<TypographyLeadProps> = ({ text, className }) => {
  return (
    <p className={`text-muted-foreground text-xl ${className || ''}`}>{text}</p>
  )
}

export default Lead
