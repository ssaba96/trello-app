import * as React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

type BoardItemProps = {
  index: number
  item: any
}

type BoardItemStylesProps = {
  isDragging: boolean
}

const BoardItemEl = styled.div<BoardItemStylesProps>`
  padding: 8px;
  background-color: ${(props) => props.isDragging ? 'lightgrey' : '#fff'};
  border-radius: 4px;
  transition: background-color .25s ease-out;

  &:hover {
    background-color: lightgrey
;
  }

  & + & {
    margin-top: 4px;
  }
`

export const BoardItem = (props: BoardItemProps) => {
  return <Draggable draggableId={props.item.id} index={props.index}>
    {(provided, snapshot) => (
      <BoardItemEl
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
      >
        {/* The content of the BoardItem */}
        {props.item.content}
      </BoardItemEl>
    )}
  </Draggable>
}