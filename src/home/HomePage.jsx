import React, { useState } from 'react'
import Homes from '../components/homes/Homes'
import { Upcomming } from '../components/Upcomming/Upcomming'
import { upcome } from '../dummyData'

export const HomePage = () => {
      const [items, setitems] = useState(upcome)
  return (
   <>
  <Homes />
  <Upcomming items={items} title='Films à Venir' />
  </>
)  
}
export default HomePage