import React from 'react'

interface Heading1Props {
  text: string
  className?: string // Optional className
}

const Heading1: React.FC<Heading1Props> = ({ text, className }) => {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className || ''}`}>
      {text}
    </h1>
  )
}

export default Heading1
