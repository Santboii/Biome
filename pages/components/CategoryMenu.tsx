import { Dispatch, SetStateAction, useMemo } from "react"
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
import { Chip, Stack, Typography } from "@mui/material"
import styled from "@mui/styled-engine"
import { CategoryConfig } from "../events"
import { camelToReadable } from "../../utils"

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
const ActiveCategoryText = styled('div')({
  padding: '30px 0',
})

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
const IconsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
})



const CategoryMenu: React.FC<CategoryMenuProps> = ({ categoryConfig, setCategoryConfig}) => {

  const handleCategoryToggle = (category: string) => {
    setCategoryConfig({
      ...categoryConfig,
      [category]: !categoryConfig[category as keyof CategoryConfig]
    })
  }

  // Adds active category class as to apply active styling
  const isActiveCategory = (category: string) => {
    return categoryConfig[category as keyof CategoryConfig] ? 'active' : ''
  }

  const activeCategoriesText = useMemo(
    () => Object.keys(categoryConfig)
                .filter(category => categoryConfig[category as keyof CategoryConfig] === true)
                .map(category => camelToReadable(category))
                .join(', ')
    , [categoryConfig]
  )

  return (
    <>
      <IconsWrapper>
        {/* Academics */}
        <Stack direction="row" spacing={1}>
          <CategoryChip
            aria-label="Academics"
            className={isActiveCategory('academics')}
            icon={<SchoolOutlined sx={{fontSize: 10}}  />}
            label="Academics"
            onClick={() => handleCategoryToggle('academics')}
          />
        </Stack>
        {/* Arts & Culture */}
        <Stack direction="row" spacing={1}>
          <CategoryChip
            aria-label="Arts & Culture"
            className={isActiveCategory('artsAndCulture')}
            icon={<TheatersOutlined  />}
            label="Arts & Culture"
            onClick={() => handleCategoryToggle('artsAndCulture')}
          />
        </Stack>
        {/* Gaming */}
        <Stack direction="row" spacing={1}>
          <CategoryChip
            aria-label="Gaming"
            className={isActiveCategory('gaming')}
            icon={<SportsEsportsOutlined  />}
            label="Gaming"
            onClick={() => handleCategoryToggle('gaming')}
          />
        </Stack>
        {/* Music */}
        <Stack direction="row" spacing={1}>
          <CategoryChip
            aria-label="Music"
            className={isActiveCategory('music')}
            icon={<PianoOutlined  />}
            label="Music"
            onClick={() => handleCategoryToggle('music')}
          />
        </Stack>
        {/* Networking */}
        <Stack direction="row" spacing={1}>
          <CategoryChip
            aria-label="Networking"
            className={isActiveCategory('networking')}
            icon={<MeetingRoomOutlined />}
            label="Networking"
            onClick={() => handleCategoryToggle('networking')}
          />
        </Stack>
        {/* Outdoors */}
        <Stack direction="row" spacing={1}>
          <CategoryChip
            aria-label="Outdoors"
            className={isActiveCategory('outdoors')}
            icon={<HikingOutlined  />}
            label="Outdoors"
            onClick={() => handleCategoryToggle('outdoors')}
          />
        </Stack>
        {/* Parties & Gatherings */}
        <Stack direction="row" spacing={1}>
          <CategoryChip
            aria-label="Parties & Gatherings"
            className={isActiveCategory('partiesAndGatherings')}
            icon={<CelebrationOutlined  />}
            label="Parties & Gatherings"
            onClick={() => handleCategoryToggle('partiesAndGatherings')}
          />
        </Stack>
        {/* Sports */}
        <Stack direction="row" spacing={1}>
          <CategoryChip
            aria-label="Sports"
            className={isActiveCategory('sports')}
            icon={<SportsBasketballOutlined  />}
            label="Sports"
            onClick={() => handleCategoryToggle('sports')}
          />
        </Stack>
      </IconsWrapper>
      <ActiveCategoryText>
        <Typography>
          {
            activeCategoriesText.length
            ? <>Categories shown: { activeCategoriesText }</>
            : 'Showing all categories.'
          }
        </Typography>
      </ActiveCategoryText>
    </>
  )
}

export default CategoryMenu