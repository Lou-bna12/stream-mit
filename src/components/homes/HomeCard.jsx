import React from 'react'

export const HomeCard = ({item:{id, cover, name, rating, time, desc, starring, genres, tags, video } } ) => {
  return(
    <>

    <div className='box'>
      <div className='coverImage'>
        <img src={cover} alt='' />
      </div>

      <div className="content flex">
        <div className='details row '>
        <h1>{name}</h1>
        <div className="rating flex">
          <i className='fa fa-start'></i>
          <i className='fa fa-start'></i>
          <i className='fa fa-start'></i>
          <i className='fa fa-start'></i>
          <i className='fa fa-start-half'></i>
        </div>
        <label>{rating}</label>
        <span>Classement</span>
        <label>{time}</label>
      </div>
      </div>
      <p>{desc}</p>
      <div className="cast">
      <h4>
        <span>Vedettes</span>
        {starring}
        </h4> 
        <h4>
        <span>Genres</span>
        {genres}
        </h4> 
        <h4>
        <span>Tags</span>
        {tags}
        </h4> 
      </div>
      <button className='primary-btn'>
        <i className='fas fa-play'></i>Jouez maintenant
      </button>
    </div>
    </>
  )
}