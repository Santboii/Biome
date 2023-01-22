import { ArrowBackIos } from "@mui/icons-material"
import { Box, Button, Container, Typography } from "@mui/material"
import { getDoc, collection, doc } from "firebase/firestore"
import Link from "next/link"
import { db } from "../../firebase"
import { Event } from "../../interfaces"
import { categoryIconMapper } from "../../utils"

// NEXTJS server fetch
export async function getServerSideProps(context: any) {
  try {
    const docRef = doc(db, 'events', context.params?.id)
    const docSnap = await getDoc(docRef)
    const event = docSnap.data() as Event
    console.log(event)

    return { props: { event } }
  } catch (error) {
    console.log(error)
  }
}

interface EventDetails {
  event: Event
}

const EventDetails: React.FC<EventDetails> = ({event}) => {
  return (
    <Container maxWidth={"md"}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        <Button
          color="info"
          sx={{textDecoration: 'none', marginY: 2}}
          startIcon={<ArrowBackIos />}
        >
          <Link href="/events">
            <Typography color="#1A2027">Back</Typography>
          </Link>
        </Button>
        <Button variant="contained" color="primary">Request to Join</Button>
      </Box>
      <Box mt={2} sx={{width: '100%'}}>
        <Typography variant="h3">{event.title}</Typography>
        <Box my={2}>
          { !!event.categories.length &&
          event.categories.map(
            (category) => categoryIconMapper(category)
          )}
        </Box>
        <Typography variant="body1">{event.description}</Typography>
      </Box>
    </Container>
  )
}

export default EventDetails  