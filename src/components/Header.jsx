import './Header.css'
import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  /* me escuchas ? 
    NO,NO ME FUIONAN LAS MUSCULAS AQUÍ, NO SÉ POR QUE
    ....ahora sí, hay un lag, algo va leNto y  No se escribe todo
   */
  return (
    <header className="fullContainer">
      <nav>
        <a href="#" className="nav-logo">Galería Pexels</a>
        
        <div className="nav-hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'visible' : ''}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}
