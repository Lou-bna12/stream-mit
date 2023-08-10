import React, { useState } from 'react'
import { homeData } from '../../dummyData'

export const Homes = () => {
  const [items, setItems] = useState(homeData)
  return(
    <>
    <section className='home'>
      <Homes items={items} />
    </section>
    <div className='margin'>

    </div>
    </>
  )

}

