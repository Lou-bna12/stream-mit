import React, { useState } from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

export const Header = () => {
    const [Mobile, setMobile] = useState(false)
  return (
     <>
  <header>
    <div className="container flexSB">
        <nav className='flexSB'>
            <div className="logo">
         <img src="./images/logo.png" alt="" /> 

            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
                <Link  to="/">Accueil</Link>
                <Link  to="/séries">Séries</Link>
                <Link  to="/films">Films</Link>
                <Link  to="/pages">Pages</Link>
                <Link  to="/tarifs">Tarifs</Link>
                <Link  to="/contacte">Contacte</Link>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ?<i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
        </nav>
        <div className="account flexSB">
            <i className='fa fa-search'></i>
            <i className='fa fa-bell'></i>
            <i className='fa fa-user'></i>
            <button>Inscrivez-vous</button>
        </div>
    </div>
    </header> 
    </>
    )
}
