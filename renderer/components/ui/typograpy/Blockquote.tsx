import React from 'react'

interface BlockquoteProps {
  text: string
  className?: string
}

const Blockquote: React.FC<BlockquoteProps> = ({ text, className }) => {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className || ''}`}>
      {text}
    </blockquote>
  )
}

export default Blockquote
