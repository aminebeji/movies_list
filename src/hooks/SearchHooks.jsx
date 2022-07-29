import { CHANGE_CATEGORY, CHANGE_MOVIES_CATEGORY, SEARCH_TYPYING } from '@/store/modules/actions'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function SearchHooks() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { KEYWORD, CategoryList, CATEGORY } = useSelector(state => state.Search)
  const { movies } = useSelector(state => state.Movies)
  const [emptySearch, setEmptySearch] = useState(true)
  useEffect(() => {
    if (movies.length) { setEmptySearch(false) }
  }, [movies])
  const onChangeKeyWord = (e) => {
    dispatch(SEARCH_TYPYING(e.target.value))
  }
  const searchClcik = () => {
    let link = `/search/${KEYWORD}`
    if (CATEGORY) link = `${link}?category=${CATEGORY}`
    if (KEYWORD) router.push(link)
  }
  const ChangeCategory = (e) => {
    dispatch(CHANGE_CATEGORY(e.target.value))
    dispatch(CHANGE_MOVIES_CATEGORY(e.target.value))
  }

  return { onChangeKeyWord, KEYWORD, searchClcik, emptySearch, CategoryList, CATEGORY, ChangeCategory }
}

export default SearchHooks