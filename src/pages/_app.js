import '../styles/globals.scss'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faDownload, faEllipsisV, faChevronLeft, faChevronRight, faAngleLeft, faTimes, faStar, faExpand, faUser, faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'swiper/swiper.min.css';

config.autoAddCss = false;

library.add(fab, faCheck, faDownload, faEllipsisV, faChevronLeft, faChevronRight, faAngleLeft, faTimes, faStar, faExpand, faUser, faAt, faEnvelope)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
