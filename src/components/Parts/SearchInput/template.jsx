import React from 'react'
import S from "./style.module.scss"
import Search from '@/svgs/Search'

function SearchInput() {
  return (
    <div className={`${S.InputContainer} shadow`}>
    <Search />
    <input
        className=''
        placeholder='search'
        name="search"
        value=""
        onChange={() => {
        }} />
</div>
  )
}

export default SearchInput