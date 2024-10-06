import React from 'react'

interface TypographyInlineCodeProps {
  text: string // The text to display as inline code
  className?: string // Optional className
}

const InlineCode: React.FC<TypographyInlineCodeProps> = ({
  text,
  className
}) => {
  return (
    <code
      className={`bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className || ''}`}>
      {text}
    </code>
  )
}

export default InlineCode
