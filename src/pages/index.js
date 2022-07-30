import { MoviesPage } from "@/components/pages/Movies";
import { wrapper } from "@/store";
import { INIT_CATEGORYLIST ,INIT_MOIVES_ACTIONS } from "@/store/modules/actions";
export default function Index() {
  return <MoviesPage />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({}) => {
      await store.dispatch(INIT_MOIVES_ACTIONS());
      await store.dispatch(INIT_CATEGORYLIST(false));
    }
);
