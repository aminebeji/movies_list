import { Layout } from '@/components/Layout'
import { SearchContainer } from '@/components/Parts/SearchContainer'
import { MoviesLists } from '@/components/Sections/MoviesLists'
import React from 'react'

function SearchPage() {
  return (
    <Layout>
      <SearchContainer />
      <MoviesLists />
    </Layout>
  )
}

export default SearchPage
