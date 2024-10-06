import React from 'react'

interface ParagraphProps {
  text: string
  className?: string
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className }) => {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className || ''}`}>
      {text}
    </p>
  )
}

export default Paragraph
