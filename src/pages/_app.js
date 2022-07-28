import '../styles/globals.css'
import '../styles/_globals.scss'
import { wrapper } from '@/store'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
