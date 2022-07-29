import SearchHooks from '@/hooks/SearchHooks'
import React from 'react'

function SearchContainer() {
    const { KEYWORD, emptySearch } = SearchHooks()
    return (
        <div>
            <h1> Result for your search : <span> {KEYWORD} </span>  </h1>
            {emptySearch && <h1> Empty Search  </h1>}
        </div>
    )
}

export default SearchContainer