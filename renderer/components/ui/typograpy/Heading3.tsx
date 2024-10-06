import React from 'react'

interface Heading3Props {
  text: string
  className?: string
}

const Heading3: React.FC<Heading3Props> = ({ text, className }) => {
  return (
    <h3
      className={`mt-8 scroll-m-20 text-2xl font-semibold tracking-tight ${className || ''}`}>
      {text}
    </h3>
  )
}

export default Heading3
