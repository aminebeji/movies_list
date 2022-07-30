import React from 'react'
import S from "./style.module.scss"
import Search from '@/svgs/Search'
import { useSelector } from 'react-redux';
import SearchHooks from '@/hooks/SearchHooks';

function SearchInput() {
  const { onChangeKeyWord, KEYWORD, searchClick } = SearchHooks()
  return (
    <div className={`${S.InputContainer} shadow bg-zinc-500`}>
      <div onClick={searchClick}  >  <Search /></div>
      <input
        id="search-input"
        className="bg-zinc-500"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchClick()
          }
        }}
        placeholder='search'
        name="search"
        value={KEYWORD}
        onChange={onChangeKeyWord} />
    </div>
  )
}

export default SearchInput