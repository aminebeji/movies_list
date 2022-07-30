import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RATE_STATUS } from '@/utils/consts';
import { ADD_RATE } from '@/store/modules/actions';

function RateHooks(videoId, VideoLikes, VideoDislikes) {
    const { Likes, Dislikes } = useSelector(state => state.Rates)
    const [status, setStatus] = useState(RATE_STATUS.NOT_RATED)
    const [mainLikes, setLikes] = useState(VideoLikes)
    const [mainDislike, setDislike] = useState(VideoDislikes)
    const dispatch = useDispatch()
    useEffect(() => {
        let isLiked = Likes.find(l => l === videoId)
        let isDiksliked = Dislikes.find(d => d === videoId)
        if (isLiked) {
            setLikes(VideoLikes + 1)
            setStatus(RATE_STATUS.LIKE)
        }
        if (isDiksliked) {
            setDislike(VideoDislikes + 1)
            setStatus(RATE_STATUS.DISLIKE)
        }
    }, [Likes , Dislikes])
    const ChangeStatus = (newStatus, id) => {
        let newLikes = Likes
        let newDislike = Dislikes

        if (newStatus === status) {
            if (status === RATE_STATUS.LIKE) {
                newLikes = Likes.filter(l => {
                    if (l != id) {
                        return l
                    }
                })
                console.log(newLikes)
                setLikes(mainLikes - 1)
            }
            if (status === RATE_STATUS.DISLIKE) {
                newDislike = Dislikes.filter(d => {
                    if (d != id) {
                        return d
                    }
                })
                console.log(newDislike)
                setDislike(mainDislike - 1)
            }
            setStatus(RATE_STATUS.NOT_RATED)

        } else {
            if (newStatus === RATE_STATUS.LIKE) {
                newLikes = [...newLikes, id]
                setLikes(mainLikes + 1)
                if (status != RATE_STATUS.NOT_RATED) {
                    newDislike = Dislikes.filter(d => {
                        if (d != id) {
                            return d
                        }
                    })
                    setDislike(mainDislike - 1)
                }
            }
            if (newStatus === RATE_STATUS.DISLIKE) {
                newDislike = [...newDislike, id]
                setDislike(mainDislike + 1)
                if (status != RATE_STATUS.NOT_RATED) {
                    newLikes = Likes.filter(d => {
                        if (d != id) {
                            return d
                        }
                    })
                    setLikes(mainLikes - 1)
                }
            }
            setStatus(newStatus)

        }
        dispatch(ADD_RATE(newLikes, newDislike))
    }
    return { status, mainDislike, mainLikes, ChangeStatus }
}

export default RateHooks