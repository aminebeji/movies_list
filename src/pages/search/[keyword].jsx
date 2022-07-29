import { SearchPage } from '@/components/pages/Search'
import { wrapper } from '@/store'
import { INIT_CATEGORYLIST, INIT_MOIVES_SEARCH_ACTIONS, SEARCH_INIT_ACTION } from '@/store/modules/actions'
import React from 'react'

function Search() {
    return (
        <SearchPage />
    )
}

export default Search

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params, query }) => {
    let keyword = params.keyword
    let category = query.category ? query.category : ""
    const data = { keyword, category }
    await store.dispatch(SEARCH_INIT_ACTION(data))
    await store.dispatch(INIT_MOIVES_SEARCH_ACTIONS(data))
    await store.dispatch(INIT_CATEGORYLIST(false))

})