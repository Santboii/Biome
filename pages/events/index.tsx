import { CircularProgress } from "@mui/material";
import { getFirestore, collection } from "firebase/firestore"
import { useEffect, useState } from "react";
import { useCollectionOnce } from 'react-firebase-hooks/firestore';

import { app } from "../../firebase"
import { Category, Event } from '../../interfaces'
import CategoryMenu from "../components/CategoryMenu";
import EventList from "../components/EventsList";

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
  const [value, loading, error] = useCollectionOnce(
    collection(getFirestore(app), 'events')
  );

  useEffect(() => {
    if (value) {
      const foo = value.docs.map(doc => doc.data() as Event)
      setEvents(foo)
    }
    
  }, [value])
    
  return (
  <>
    {loading && <CircularProgress />}
    <CategoryMenu categoryConfig={categoryConfig} setCategoryConfig={setCategoryConfig} />
    {events && <EventList events={events}/>}
  </>
  )
}

export default Events

