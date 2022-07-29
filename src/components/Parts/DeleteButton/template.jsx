import Trash from '@/svgs/Trash'
import React from 'react'
import S from "./style.module.scss"
import DeleteHooks from '@/hooks/DeleteHooks';
function DeleteButton({ id }) {
  const { DeleteMovie } = DeleteHooks()
  return (
    <div title="delete movie" onClick={() => { DeleteMovie(id) }} className={`absolute z-10  top-2 right-2 ${S.DeleteButton}`} >
      <Trash />
    </div>
  )
}

export default DeleteButton