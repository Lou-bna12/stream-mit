import React from 'react'

export const Ucard = ({ item: { id, cover, name, time } }) => {
  return(
     <>
  <div className="MovieBox">
   <div className='img'>
        <img src={cover} alt="" />
   </div>
  </div> 
 </>
  )  
}
