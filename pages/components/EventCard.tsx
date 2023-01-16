import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from "@mui/material"
import { Event } from "../../interfaces"
import { categoryIconMapper } from "../../utils"

interface EventCardProps {
  event: Event
}

const EventCard: React.FC<EventCardProps> = ({event}) => {
  return (
    <Card key={event.id}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 120 }}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          title={event.title}
        />
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
  )
}

export default EventCard