import { initPagination } from '@/utils/consts'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function PaginationHooks() {
    const movies = useSelector(state => state.Movies.movies)
    const [pagination, setPagination] = useState(initPagination)
    useEffect(() => {
        let currentMovie = movies.slice(0, 6)
        let moviesLength = movies.length
        setPagination({ ...pagination, movies: currentMovie, moviesLength })
        console.log(pagination)
    }, [movies])
    return { movies: pagination.movies }
}

export default PaginationHooks