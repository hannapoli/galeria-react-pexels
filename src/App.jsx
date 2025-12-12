import './App.css'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'

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
