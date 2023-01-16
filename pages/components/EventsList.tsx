import { Grid } from "@mui/material";
import { Event } from './../../interfaces'
import EventCard from "./EventCard";

interface EventListProps {
  events: Event[];
}


const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <Grid container spacing={2}>
      {events.map((event, i) => (
        <Grid
          key={`${event.id}-${i}`}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3} xl={2}
        >
          <EventCard event={event} />
        </Grid>)
      )}
    </Grid>
    
  );
};

export default EventList;
