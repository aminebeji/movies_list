import { MovieCard } from '@/components/Parts/MovieCard'
import React from 'react'
import { useSelector } from 'react-redux'

function MoviesLists() {
  const movies = useSelector(state => state.Movies.movies)
  return (
    <div className='flex justify-between  flex-wrap gap-x-15 gap-y-10'>
      {movies.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />
      })}

    </div>
  )
}

export default MoviesLists