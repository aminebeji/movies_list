import Left from '@/svgs/Left'
import Right from '@/svgs/Right'
import React from 'react'
import S from "./style.module.scss"
function Pagination({ onChangePage, pages, Next, Previous }) {
  return (
    <div className='flex justify-center  items-center gap-5' >
      <button className={`${S.PaginationButton} flex justify-center items-center bg-zinc-500 rounded-full `} onClick={Previous} >
        <Left />
      </button>
      {[...Array(pages)].map((item, index) => {
        return <span className={`${S.PaginationButton} flex justify-center items-center bg-zinc-500 rounded-full `} onClick={() => {
          onChangePage(index + 1)
        }} key={index} > {index + 1} </span>
      })}
      <button className={`${S.PaginationButton} flex justify-center items-center bg-zinc-500 rounded-full `} onClick={Next} >
        <Right />
      </button>
    </div>
  )
}

export default Pagination
