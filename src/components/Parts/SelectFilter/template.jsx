import SearchHooks from '@/hooks/SearchHooks'
import React from 'react'
import S from "./style.module.scss"
function SelectFilter() {
    const { CategoryList, CATEGORY, ChangeCategory } = SearchHooks()
    return (
        <select value={CATEGORY} onChange={ChangeCategory} className={`${S.SelectFilter} shadow rounded p-4`}>
            <option value={""}>
                category
            </option>
            {CategoryList.map((category, index) => {
                return <option value={category} key={index} > {category} </option>
            })}
        </select>
    )
}

export default SelectFilter