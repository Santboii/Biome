import { collection, getDocs } from "firebase/firestore"
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const events: object[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'events'))
    querySnapshot.docs.forEach(doc => events.push(doc.data()))
    
    res.status(200).json(events)
  } catch (error) {
    res.status(500).send(error)
  }
};