import Dislike from '@/svgs/Dislike'
import Like from '@/svgs/Like'
import React from 'react'

function RateButtons() {
  return (
    <div className='flex justify-between gap-5 items-center'>
      <Dislike />
      <Like />
    </div>
  )
}

export default RateButtons