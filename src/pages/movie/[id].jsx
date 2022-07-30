import { MoviePage } from "@/components/pages/Movie";
import { wrapper } from "@/store";
import { INIT_CATEGORYLIST, INIT_MOIVES_ACTIONS, SET_CURRENT_MOVIE } from "@/store/modules/actions";
export default function Index() {
    return <MoviePage />;
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ params }) => {
            await store.dispatch(INIT_MOIVES_ACTIONS());
            await store.dispatch(INIT_CATEGORYLIST(false));
            let result = await store.dispatch(SET_CURRENT_MOVIE(params.id))
            if (result === 404) {
                return { notFound: true }
            }
        }
);
