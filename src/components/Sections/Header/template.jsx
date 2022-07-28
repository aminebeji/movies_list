import { SearchInput } from '@/components/Parts/SearchInput'
import { FilterSelect } from '@/components/Parts/SelectFilter'
import React from 'react'
import S from "./style.module.scss"
function Header() {
    return (
        <>
            <div className={`flex justify-between items-center  p-4`}>
                <h1 > Movies Sections </h1>
                <div className={`flex justify-between gap-5`}>
                    <SearchInput />
                    <FilterSelect />
                </div>
            </div>
        </>
    )
}

export default Header