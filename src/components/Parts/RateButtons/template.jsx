import RateHooks from '@/hooks/RateHooks'
import Dislike from '@/svgs/Dislike'
import Like from '@/svgs/Like'
import React from 'react'
import S from "./style.module.scss"
import { RATE_STATUS } from '@/utils/consts';
function RateButtons({ Initlikes, InitDislikes, videoId }) {
  const { status, mainLikes, mainDislike, ChangeStatus } = RateHooks(videoId, Initlikes, InitDislikes)
  return (
    <div key={videoId} className='flex justify-between gap-5 items-center'>
      <div className={`flex justify-between gap-1 items-center ${S.SvgButton}`}>
        <div onClick={() => {
          ChangeStatus(RATE_STATUS.DISLIKE, videoId)
        }}
          className={status === RATE_STATUS.DISLIKE ? S.IsDisliked : ""} >
          <Dislike />
        </div>
        <span> {mainDislike} </span>
      </div>
      <div className={`flex justify-between gap-1 items-center ${S.SvgButton}`} >
        <div
          onClick={() => {
            ChangeStatus(RATE_STATUS.LIKE, videoId)
          }}
          className={status === RATE_STATUS.LIKE ? S.IsLiked : ""} >
          <Like />
        </div>
        <span> {mainLikes} </span>
      </div>


    </div>
  )
}

export default RateButtons