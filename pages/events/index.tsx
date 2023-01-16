import { CircularProgress } from "@mui/material"
import { collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useCollectionOnce } from 'react-firebase-hooks/firestore'

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

const Events: React.FC = () => {
  const [events, setEvents] = useState([] as Event[])
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
  const [value, loading] = useCollectionOnce(
    collection(db, 'events')
  );

  useEffect(() => {
    if (value?.docs.length) {
      setEvents(value.docs.map(doc => doc.data() as Event))
    }

  }, [value])

  return (
    <>
      {loading && <CircularProgress />}
      {!!events.length && (
        <>
          <CategoryMenu categoryConfig={categoryConfig} setCategoryConfig={setCategoryConfig} />
          <EventList events={events} />
          <CreateEventDialog />
        </>
      )}
    </>
  )
}

export default Events

