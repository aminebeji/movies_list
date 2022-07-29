import { SearchInput } from '@/components/Parts/SearchInput'
import { FilterSelect } from '@/components/Parts/SelectFilter'
import Link from 'next/link'
import React from 'react'
import S from "./style.module.scss"
function Header() {
    return (
        <>
            <div className={`flex justify-between items-center flex-col p-4 gap-7 md:flex-row `}>
                <Link href="/" ><h1  className={S.Title} > Movies Sections </h1></Link>
                <div className={`flex justify-between gap-5 flex-col md:flex-row`}>
                    <SearchInput />
                    <FilterSelect />
                </div>
            </div>
        </>
    )
}

export default Header