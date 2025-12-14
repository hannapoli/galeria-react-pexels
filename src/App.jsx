import './App.css'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'

/**
 * El componente principal de la aplicación.
 * @returns {JSX.Element} El componente App que incluye el Header, Gallery y Footer.
 */
function App() {

  return (
    <>
      <Header />
      <main className='mainContainer flexContainer'>
        <h1>Galería de imágenes</h1>
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App
