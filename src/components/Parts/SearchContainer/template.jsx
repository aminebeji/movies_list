import SearchHooks from '@/hooks/SearchHooks'
import React from 'react'

function SearchContainer() {
    const { KEYWORD, emptySearch } = SearchHooks()
    return (
        <div>
            <h1 className='text-lg' >
                Result for your search : <span className='text-zinc-500   font-extrabold' > {KEYWORD} </span>
            </h1>
            {emptySearch && <h1 id="empty-search" className='text-2xl font-extrabold text-zinc-500  text-center mt-14'> Empty Search  </h1>}
        </div>
    )
}

export default SearchContainer