import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import { DeleteButton } from '../DeleteButton';
import { RateButtons } from '../RateButtons';
import S from "./style.module.scss"
export default function MainMovieCard() {
    const { current_movie } = useSelector(state => state.Movies)
    return (
        <div className={`${S.Container} mt-14 flex items-start gap-14 justify-start`}>
            <div className={`${S.ContainerImage} relative`}>
                <Image
                    src={"/images/" + current_movie.thumbnail}
                    loader={({ src }) => {
                        return src
                    }}
                    className={'rounded'}
                    width={90}
                    height={110}
                    layout="responsive" />
            </div>
            <div className='p-3 '>
                <h1 className='font-extrabold text-xl'  > {current_movie.title} </h1>
                <span className='text-stone-500 text-lg'> {current_movie.category} </span>
                <RateButtons Initlikes={current_movie.likes} InitDislikes={current_movie.dislikes} videoId={current_movie.id} />
            </div>
        </div>
    )
}
