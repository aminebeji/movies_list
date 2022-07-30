import { MovieCard } from '@/components/Parts/MovieCard'
import PaginationHooks from '@/hooks/PaginationHooks'
import React from 'react'

function MoviesLists() {
  const {movies} = PaginationHooks()
  return (
    <div className='flex justify-between items-center flex-wrap gap-x-15 gap-y-10 max-w-screen-lg mx-auto py-12 '>
      {movies.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />
      })}

    </div>
  )
}

export default MoviesLists