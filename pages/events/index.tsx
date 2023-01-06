import { collection, getDocs } from "firebase/firestore"
import { useEffect } from "react"
import { db } from "../../firebase"

const Events: React.FC = () => {
  useEffect(() => {
    const getEvents = async () => {
      console.log(db)
      console.log('WORK!!!!')
      const querySnapshot = await getDocs(collection(db, 'events'))
      querySnapshot.docs.map(doc => console.log(doc.data()))
    }
    getEvents()
  }, [])

  return <b>EVENTS PAGE!</b>
}

export default Events