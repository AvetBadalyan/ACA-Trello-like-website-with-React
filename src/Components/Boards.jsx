import React from 'react'
import Board from '../Pages/Boards/Board'

export default function Boards({title}) {
  return (
      <div>{Boards.map((board) => {
        return <Board title={title} />
    } ) }</div>
  )
}
