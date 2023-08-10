import React, { useState } from 'react'
import Homes from '../components/homes/Homes'
import { Upcomming } from '../components/Upcomming/Upcomming'
import { latest, recommended, upcome } from '../dummyData'
import Trending from '../components/trending/Trending'

export const HomePage = () => {
      const [items, setitems] = useState(upcome)
      const [item, setitem] = useState(latest)
      const [rec, setrec] = useState(recommended)
  return (
   <>
  <Homes />
  <Upcomming items={items} title='Films à Venir' />
  <Upcomming items={item} title='Les plus Récents' />
  <Trending  />
  <Upcomming items={rec} title='Films Recommandés' />
  </>
)  
}
export default HomePage