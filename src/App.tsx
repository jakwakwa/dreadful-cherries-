import {BrowserRouter as Router} from 'react-router-dom'
import {Header} from './ui/Header'
import {Footer} from './ui/Footer'
import {MovieGallery} from './application/MovieGallery'
import {MOVIE_INFO_URL} from './application/constants/MOVIE_INFO_URL'
import {AppStyle} from './AppStyles'

function App() {
  return (
    <Router>
      <AppStyle>
        <Header />
        <MovieGallery url={MOVIE_INFO_URL} />
      </AppStyle>
      <Footer />
    </Router>
  )
}

export default App
