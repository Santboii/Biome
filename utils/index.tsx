import { Category } from "../interfaces"
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

export type noop = () => Promise<void> | void
export function noop(): void {}

export const camelToReadable = (camelCase: string): string =>  {
  let result = camelCase.replace(/[A-Z]/g, (match) => ` ${match}`)
  return result.charAt(0).toUpperCase() + result.slice(1)
}

export const categoryIconMapper = (category: Category) => {
  switch (category as string) {
    case 'academics':
        return <SchoolOutlined sx={{color: '#009688', fontSize: 24}} />
    case 'artsAndCulture':
        return <TheatersOutlined sx={{color: '#009688', fontSize: 24}} />
    case 'gaming':
        return <SportsEsportsOutlined sx={{color: '#009688', fontSize: 24}} />
    case 'music':
        return <PianoOutlined sx={{color: '#009688', fontSize: 24}}  />
    case 'networking':
        return <MeetingRoomOutlined sx={{color: '#009688', fontSize: 24}} />
    case 'outdoors':
        return <HikingOutlined sx={{color: '#009688', fontSize: 24}}  />
    case 'partiesAndGatherings':
        return <CelebrationOutlined sx={{color: '#009688', fontSize: 24}} />
    case 'sports':
        return <SportsBasketballOutlined sx={{color: '#009688', fontSize: 24}} />
  }
}