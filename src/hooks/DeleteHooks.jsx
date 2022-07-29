import { DELETE_MOVIE, INIT_CATEGORYLIST } from '@/store/modules/actions';
import { useDispatch } from 'react-redux';

function DeleteHooks() {
    const dispatch = useDispatch()
    const DeleteMovie = (id) => {
        dispatch(DELETE_MOVIE(id))
        dispatch(INIT_CATEGORYLIST(true))
    }
    return { DeleteMovie }
}

export default DeleteHooks
