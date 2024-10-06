import React from 'react'

interface ListProps {
  items: string[]
  className?: string
}

const List: React.FC<ListProps> = ({ items, className }) => {
  return (
    <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className || ''}`}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default List
