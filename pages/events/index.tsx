import { collection, getDocs } from "firebase/firestore"
import { useState } from "react"

import { db } from "../../firebase"
import { Event } from '../../interfaces'
import CategoryMenu from "../components/CategoryMenu"
import CreateEventDialog from "../components/CreateEventDialog"
import EventList from "../components/EventsList"

export interface CategoryConfig {
  academics: boolean
  artsAndCulture: boolean
  gaming: boolean
  music: boolean
  networking: boolean
  outdoors: boolean
  partiesAndGatherings: boolean
  sports: boolean
}

interface EventsProps { 
  events: Event[]
}

// NEXTJS server fetch
export async function getServerSideProps() {
  let events: Event[] = []
  try {
    const eventsSnapshot = await getDocs(collection(db, 'events'))
    eventsSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const event = {
        id: doc.id,
        ...doc.data()
      } as Event

      events.push(event)
    })
    console.log(events)

    return { props: { events } }
  } catch (error) {
    console.log(error)
  }
}


const Events: React.FC<EventsProps> = ({ events }) => {
  console.log(events)
  
  const [categoryConfig, setCategoryConfig] = useState<CategoryConfig>({
    academics: false,
    artsAndCulture: false,
    gaming: false,
    music: false,
    networking: false,
    outdoors: false,
    partiesAndGatherings: false,
    sports: false,
  } as CategoryConfig)


  const activeCategories = Object.keys(categoryConfig).filter((key) => categoryConfig[key as keyof CategoryConfig])
  const filteredEvents = activeCategories.length 
    ? events.filter((event) => event.categories.some((category) => activeCategories.includes(category)))
    : events

  return (
    <>
      <CategoryMenu categoryConfig={categoryConfig} setCategoryConfig={setCategoryConfig} />
      <EventList events={filteredEvents} />
      <CreateEventDialog />
    </>
  )
}

export default Events

