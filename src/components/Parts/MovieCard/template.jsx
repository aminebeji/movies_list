import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteButton } from '../DeleteButton'
import { RateButtons } from '../RateButtons'
import S from "./style.module.scss"
function MovieCard({ movie }) {
  return (
    <div className={`${S.Container} movie-card shadow-xl shadow-gray rounded-lg mx-auto`}>
      <DeleteButton id={movie.id} />
      <Link href={`/movie/${movie.id}`} >
        <Image
          src={"/images/" + movie.thumbnail}
          loader={({ src }) => {
            return src
          }}
          alt={movie.title}
          className={S.Thumbnail}
          width={90}
          height={110}
          layout="responsive" />
      </Link>
      <div className='p-3 bottom-movie-container'>
        <div className='flex justify-between items-center title-container'>
          <h1 className='font-extrabold text-sm movie-title' > {movie.title} </h1>
          <RateButtons Initlikes={movie.likes} InitDislikes={movie.dislikes} videoId={movie.id} />
        </div>
        <span className='text-stone-500 text-sm movie-category'> {movie.category} </span>
      </div>
    </div>
  )
}

export default MovieCard