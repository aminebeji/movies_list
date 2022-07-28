import React from 'react'
import S from "./style.module.scss"
function SelectFilter() {
    return (
        <select className={`${S.SelectFilter} shadow rounded p-4`}>
            <option>
                category
            </option>
        </select>
    )
}

export default SelectFilter