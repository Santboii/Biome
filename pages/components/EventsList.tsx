import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid
} from "@mui/material";
import { Event } from './../../interfaces'

interface EventListProps {
  events: Event[];
}


const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <Grid container spacing={2}>
      {events.map((event, i) => (
        <Grid key={`${event.id}-${i}`} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card key={event.id}>
            <CardActionArea>
              <CardMedia
                sx={{ height: 140 }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                title={event.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {event.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>)
      )}
    </Grid>
    
  );
};

export default EventList;
