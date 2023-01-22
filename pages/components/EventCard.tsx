import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from "@mui/material"
import Link from "next/link"
import { Event } from "../../interfaces"
import { categoryIconMapper } from "../../utils"

interface EventCardProps {
  event: Event
}

const EventCard: React.FC<EventCardProps> = ({event}) => {
  return (
    <Link
      href={`/events/${event.id}`}
      key={event.id}
      style={{
        textDecoration: 'none'
      }}
    >
      <Card>
        <CardActionArea>
          <CardMedia sx={{maxHeight: 50}}>
          </CardMedia>
          <CardContent>
            {/* Event Card Title */}
            <Typography
              sx={{height:40, overflow: "hidden", textOverflow: "ellipsis"}}
              fontWeight={800}
              gutterBottom
              variant="body1"
              >
              {event.title}
            </Typography>
            {/* Event Card Description */}
            <Typography
              sx={{height:40, overflow: "hidden", textOverflow: "ellipsis"}}
              variant="body2"
              color="textSecondary"
              component="p">
                {event.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{paddingLeft: 2, paddingBottom: 2}}>
          {/* Event Card Category Icons */}
          { !!event.categories.length &&
          event.categories.map(
            (category) => categoryIconMapper(category)
          )}
        </CardActions>
      </Card>    
    </Link>
  )
}

export default EventCard