import { CircularProgress } from "@mui/material";
import { getFirestore, collection } from "firebase/firestore"
import { useEffect, useState } from "react";
import { useCollectionOnce } from 'react-firebase-hooks/firestore';

import { app } from "../../firebase"
import { Event } from '../../interfaces'
import CategoryMenu from "../components/CategoryMenu";
import EventList from "../components/EventsList";



const Events: React.FC = () => {
  const [events, setEvents] = useState([] as Event[])
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
    <CategoryMenu />
    {events && <EventList events={events}/>}
  </>
  )
}

export default Events

