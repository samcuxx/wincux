import React from 'react'

interface Heading2Props {
  text: string
  className?: string
}

const Heading2: React.FC<Heading2Props> = ({ text, className }) => {
  return (
    <h2
      className={`mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors ${className || ''}`}>
      {text}
    </h2>
  )
}

export default Heading2
