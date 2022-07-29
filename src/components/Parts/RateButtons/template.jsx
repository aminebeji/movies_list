import Dislike from '@/svgs/Dislike'
import Like from '@/svgs/Like'
import React from 'react'
import S from "./style.module.scss"
function RateButtons({ likes, dislikes }) {
  return (
    <div className='flex justify-between gap-5 items-center'>
      <div className={`flex justify-between gap-1 items-center ${S.SvgButton}`}>
        <Dislike />
        <span> {dislikes} </span>
      </div>
      <div className={`flex justify-between gap-1 items-center ${S.SvgButton}`} >
        <Like />
        <span> {likes} </span>
      </div>


    </div>
  )
}

export default RateButtons