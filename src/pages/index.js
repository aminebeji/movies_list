import { MoviesPage } from '@/components/pages/Movies'
import { wrapper } from '@/store'
import { INIT_MOIVES_ACTIONS } from '@/store/modules/movies/action'
export default function Index() {
  return (
    <MoviesPage />
  )
}


export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ }) => { 
     await store.dispatch(INIT_MOIVES_ACTIONS())
})