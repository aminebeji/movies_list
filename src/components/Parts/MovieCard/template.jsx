import Image from 'next/image'
import React from 'react'
import { RateButtons } from '../RateButtons'
import S from "./style.module.scss"
function MovieCard({ movie }) {
  const link = "https://i0.wp.com/www.printmag.com/wp-content/uploads/2020/10/da4aaf_7f6e9f0484e74fe28da9e4030da35274mv2-1.png?resize=630%2C940&ssl=1"
  return (
    <div className={`${S.Container} shadow-xl rounded-lg`}>
      <Image
        src={link}
        loader={({ src }) => {
          return src
        }}
        width={90}
        height={110}
        layout="responsive" />
      <div className='p-3 '>
        <div className='flex justify-between items-center'>
          <h1 className='font-extrabold text-sm'  > {movie.title} </h1>
          <RateButtons />
        </div>
        <span className='text-stone-500 text-sm'> {movie.category} </span>
      </div>
    </div>
  )
}

export default MovieCard