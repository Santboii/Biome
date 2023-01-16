import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Chip } from "@mui/material"
import { Event } from "../../interfaces"
import { camelToReadable } from "../../utils"

interface EventCardProps {
  event: Event
}

const EventCard: React.FC<EventCardProps> = ({event}) => {
  return (
    <Card key={event.id}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 140 }}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          title={event.title}
        />
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
        event.categories.map((value) => (
          <Chip key={value} label={camelToReadable(value)} />
        ))}
      </CardActions>
    </Card>    
  )
}

export default EventCard