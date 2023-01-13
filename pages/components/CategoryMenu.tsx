import { Dispatch, SetStateAction } from "react"
import {
  CelebrationOutlined,
  HikingOutlined,
  MeetingRoomOutlined,
  PianoOutlined,
  SchoolOutlined,
  SportsBasketballOutlined,
  SportsEsportsOutlined,
  TheatersOutlined
} from "@mui/icons-material"
import { Chip, IconButton, Stack } from "@mui/material"
import styled from "@mui/styled-engine"
import { CategoryConfig } from "../events"

interface CategoryMenuProps {
  categoryConfig: CategoryConfig
  setCategoryConfig: Dispatch<SetStateAction<{
    academics: boolean
    artsAndCulture: boolean
    gaming: boolean
    music: boolean
    networking: boolean
    outdoors: boolean
    partiesAndGatherings: boolean
    sports: boolean
  }>> 
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categoryConfig, setCategoryConfig}) => {
  const CategoryChip = styled(Chip)({
    marginRight: 15,
    '& svg': {
      height: 25,
      width: 25,
    },
    '&.active': {
      color: '#00E0D4',
      backgroundColor: '#FFF',
      boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
      'svg': {
        fill: '#00E0D4'
      }
    }
  })
  const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: 35,
    padding: 10,
  })
  
  const handleCategoryToggle = (category: string) => {
    setCategoryConfig({
      ...categoryConfig,
      [category]: !categoryConfig[category as keyof CategoryConfig]
    })
  }

  const isActive = (category: string) => {
    return categoryConfig[category as keyof CategoryConfig] ? 'active' : ''
  }

  return (
    <Wrapper>
      {/* Academics */}
      <Stack direction="row" spacing={1}>
        <CategoryChip
          aria-label="Academics"
          className={isActive('academics')}
          icon={<SchoolOutlined sx={{fontSize: 10}}  />}
          label="Academics"
          onClick={() => handleCategoryToggle('academics')}
        />
      </Stack>
      {/* Arts & Culture */}
      <Stack direction="row" spacing={1}>
        <CategoryChip
          aria-label="Arts & Culture"
          className={isActive('artsAndCulture')}
          icon={<TheatersOutlined  />}
          label="Arts & Culture"
          onClick={() => handleCategoryToggle('artsAndCulture')}
        />
      </Stack>
      {/* Gaming */}
      <Stack direction="row" spacing={1}>
        <CategoryChip
          aria-label="Gaming"
          className={isActive('gaming')}
          icon={<SportsEsportsOutlined  />}
          label="Gaming"
          onClick={() => handleCategoryToggle('gaming')}
        />
      </Stack>
      {/* Music */}
      <Stack direction="row" spacing={1}>
        <CategoryChip
          aria-label="Music"
          className={isActive('music')}
          icon={<PianoOutlined  />}
          label="Music"
          onClick={() => handleCategoryToggle('music')}
        />
      </Stack>
      {/* Networking */}
      <Stack direction="row" spacing={1}>
        <CategoryChip
          aria-label="Networking"
          className={isActive('networking')}
          icon={<MeetingRoomOutlined />}
          label="Networking"
          onClick={() => handleCategoryToggle('networking')}
        />
      </Stack>
      {/* Outdoors */}
      <Stack direction="row" spacing={1}>
        <CategoryChip
          aria-label="Outdoors"
          className={isActive('outdoors')}
          icon={<HikingOutlined  />}
          label="Outdoors"
          onClick={() => handleCategoryToggle('outdoors')}
        />
      </Stack>
      {/* Parties & Gatherings */}
      <Stack direction="row" spacing={1}>
        <CategoryChip
          aria-label="Parties & Gatherings"
          className={isActive('partiesAndGatherings')}
          icon={<CelebrationOutlined  />}
          label="Parties & Gatherings"
          onClick={() => handleCategoryToggle('partiesAndGatherings')}
        />
      </Stack>
      {/* Sports */}
      <Stack direction="row" spacing={1}>
        <CategoryChip
          aria-label="Sports"
          className={isActive('sports')}
          icon={<SportsBasketballOutlined  />}
          label="Sports"
          onClick={() => handleCategoryToggle('sports')}
        />
      </Stack>
    </Wrapper>
  )
}

export default CategoryMenu