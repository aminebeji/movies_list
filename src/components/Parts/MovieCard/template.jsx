import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteButton } from '../DeleteButton'
import { RateButtons } from '../RateButtons'
import S from "./style.module.scss"
function MovieCard({ movie }) {
  return (
    <Link  href={`/movie/${movie.id}`} >
      <div className={`${S.Container} movie-card shadow-xl shadow-gray rounded-lg mx-auto`}>
        <DeleteButton id={movie.id} />
        <Image
          src={"/images/" + movie.thumbnail}
          loader={({ src }) => {
            return src
          }}
          className={S.Thumbnail}
          width={90}
          height={110}
          layout="responsive" />
        <div  className='p-3 bottom-movie-container'>
          <div className='flex justify-between items-center title-container'>
            <h1 className='font-extrabold text-sm movie-title' > {movie.title} </h1>
            <RateButtons Initlikes={movie.likes} InitDislikes={movie.dislikes} videoId={movie.id} />
          </div>
          <span className='text-stone-500 text-sm movie-category'> {movie.category} </span>
        </div>
      </div>
      </Link>
  )
}

export default MovieCard