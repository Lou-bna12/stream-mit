import React, { useState } from "react"
import Homes from "../components/homes/Homes"
import Trending from "../components/trending/Trending"
import Upcomming from "../components/Upcoming/Upcomming"
import { latest, recommended, upcome } from "../dummyData"

 export const HomePage = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
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