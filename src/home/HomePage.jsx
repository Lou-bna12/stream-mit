import React, { useState } from 'react'
import Homes from '../components/homes/Homes'
import { Upcomming } from '../components/Upcomming/Upcomming'
import { latest, upcome } from '../dummyData'

export const HomePage = () => {
      const [items, setitems] = useState(upcome)
      const [item, setitem] = useState(latest)
  return (
   <>
  <Homes />
  <Upcomming items={items} title='Films à Venir' />
  <Upcomming items={item} title='Les plus récents' />
  </>
)  
}
export default HomePage