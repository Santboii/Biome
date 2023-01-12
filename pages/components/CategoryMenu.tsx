import { Book, Celebration, Hiking, MeetingRoom, Piano, SportsBasketball, SportsEsports, TheaterComedy } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"
import { Category } from "../../interfaces"

interface CategoryMenuProps {}

const CategoryMenu: React.FC<CategoryMenuProps> = () => {

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'flex-start',
    }}>
      <IconButton size="large" aria-label="Arts & Culture">
        <TheaterComedy />
      </IconButton>
      <IconButton size="large" aria-label="Gaming">
        <SportsEsports />
      </IconButton>
      <IconButton size="large" aria-label="Music">
        <Piano />
      </IconButton>
      <IconButton size="large" aria-label="Networking">
        <MeetingRoom />
      </IconButton>
      <IconButton size="large" aria-label="Outdoors">
        <Hiking />
      </IconButton>
      <IconButton size="large" aria-label="Parties & Gatherings">
        <Celebration />
      </IconButton>
      <IconButton size="large" aria-label="Sports">
        <SportsBasketball />
      </IconButton>
    </Box>
  )
}

export default CategoryMenu