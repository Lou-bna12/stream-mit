import React from 'react'
import { Link } from "react-router-dom"
import { Ucard } from './Ucard'


export const Upcomming = ({ items, title }) => {
  return(
     <>
  <section className='upcome'>
     <div className="container">
        <div className="heading flexSB">
            <h1>{title}</h1>
            <Link to='/'>Tout voir</Link>
         </div>
         <div className="content">
        {items.map((item) => (
                <Ucard  key={item.id} item={item} />
            ))}
            
         </div>
        </div>     
    </section>
 </>
  )
}
