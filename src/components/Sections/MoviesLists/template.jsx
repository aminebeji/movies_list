import { MovieCard } from '@/components/Parts/MovieCard'
import { Pagination } from '@/components/Parts/Pagination'
import PaginationHooks from '@/hooks/PaginationHooks'
import React from 'react'

function MoviesLists() {
  const { movies, onChangePage, pages, Next, Previous } = PaginationHooks()
  return (
    <React.Fragment>
      <div id="movie-list" className='flex justify-between items-center flex-wrap gap-x-15 gap-y-10 max-w-screen-lg mx-auto py-12 '>
        {movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />
        })}
      </div>
      {movies.length > 0 && <Pagination onChangePage={onChangePage} pages={pages} Next={Next} Previous={Previous} />}
    </React.Fragment>
  )
}

export default MoviesLists