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

export const mapCategoryToImage = (category: string): string => {
    let image: string;
    switch(category) {
        case "academics":
            image = `academics-${Math.floor(Math.random() * 3) + 1}`;
            break;
        case "artsAndCulture":
            image = `artsAndCulture-${Math.floor(Math.random() * 3) + 1}`;
            break;
        case "gaming":
            image = `gaming-${Math.floor(Math.random() * 3) + 1}`;
            break;
        case "music":
            image = `music-${Math.floor(Math.random() * 3) + 1}`;
            break;
        case "networking":
            image = `networking-${Math.floor(Math.random() * 3) + 1}`;
            break;
        case "outdoors":
            image = `outdoors-${Math.floor(Math.random() * 3) + 1}`;
            break;
        case "partiesAndGatherings":
            image = `partiesAndGatherings-${Math.floor(Math.random() * 3) + 1}`;
            break;
        case "sports":
            image = `sports-${Math.floor(Math.random() * 3) + 1}`;
            break;
        default:
            throw new Error(`Invalid category: ${category}`);
    }
    return image;
}