import React from 'react'
import './Header.scss'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/star-wars-db">Star Wars DB</Link>
      </div>
      <nav>
        <ul className="menu">
          <li><Link to="/star-wars-db/people/">People</Link></li>
          <li><Link to="/star-wars-db/planets/">Planets</Link></li>
          <li><Link to="/star-wars-db/starships/">Starships</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
