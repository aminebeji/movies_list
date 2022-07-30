import { initPagination } from '@/utils/consts'
import { ChangePagination } from '@/utils/tools'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function PaginationHooks() {
    const movies = useSelector(state => state.Movies.movies)
    const [pagination, setPagination] = useState(initPagination)
    useEffect(() => {
        let newPagination = ChangePagination(pagination, movies)
        setPagination(newPagination)
    }, [movies])
    const onChangePage = (page) => {
        let newPagination = ChangePagination({ ...pagination, currentPage: page }, movies)
        setPagination(newPagination)
    }
    const Next = () => {
        if (pagination.currentPage < pagination.pages) {
            let newPagination = ChangePagination({ ...pagination, currentPage: pagination.currentPage + 1 }, movies)
            setPagination(newPagination)
        }
    }
    const Previous = () => {
        if (pagination.currentPage > 1) {
            let newPagination = ChangePagination({ ...pagination, currentPage: pagination.currentPage - 1 }, movies)
            setPagination(newPagination)
        }
    }
    return { ...pagination, onChangePage, Next, Previous }

}

export default PaginationHooks