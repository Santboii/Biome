import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from "@mui/material"
import Image from "next/image"
import { Event } from "../../interfaces"
import { categoryIconMapper } from "../../utils"

interface EventCardProps {
  event: Event
}

const EventCard: React.FC<EventCardProps> = ({event}) => {
  return (
    <Card key={event.id}>
      <CardActionArea>
        <CardMedia sx={{maxHeight: 50}}>
          <Image width={200} height={80} src="/assets/images/gaming-2.jpg" alt={event.title} />
        </CardMedia>
        <CardContent>
          <Typography fontWeight={800} gutterBottom variant="h6">
            {event.title}
          </Typography>
          <Typography
            sx={{height:40, overflow: "hidden", textOverflow: "ellipsis"}}
            variant="body2"
            color="textSecondary"
            component="p">
              {event.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        { !!event.categories.length &&
        event.categories.map(
          (category) => categoryIconMapper(category)
        )}
      </CardActions>
    </Card>    
  )
}

export default EventCard