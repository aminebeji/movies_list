import React from 'react'
import S from "./style.module.scss"
import Search from '@/svgs/Search'
import { useSelector } from 'react-redux';
import SearchHooks from '@/hooks/SearchHooks';

function SearchInput() {
  const { onChangeKeyWord, KEYWORD, searchClcik } = SearchHooks()
  return (
    <div className={`${S.InputContainer} shadow bg-zinc-500`}>
      <div onClick={searchClcik}  >  <Search /></div>
      <input
        className="bg-zinc-500"
        placeholder='search'
        name="search"
        value={KEYWORD}
        onChange={onChangeKeyWord} />
    </div>
  )
}

export default SearchInput