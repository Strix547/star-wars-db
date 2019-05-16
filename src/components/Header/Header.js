import React from 'react'
import './Header.scss'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Star Wars DB</Link>
      </div>
      <nav>
        <ul className="menu">
          <li><Link to="/people/">People</Link></li>
          <li><Link to="/planets/">Planets</Link></li>
          <li><Link to="/starships/">Starships</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
