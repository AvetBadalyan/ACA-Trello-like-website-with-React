import React from 'react'
import Like from './Like'

export default function SingleNewsItem({title, id}) {
  return (
      <div>
          {title}
          <Like id={id} />

    </div>
  )
}
