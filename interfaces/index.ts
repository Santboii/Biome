export enum Category {
  Academics = 'Academics',
  ArtsAndCulture = 'Arts & Culture',
  Gaming = 'Gaming',
  Music = 'Music',
  Networking = 'Networking',
  Outdoors = 'Outdoors',
  PartiesAndGatherings = 'Parties & Gatherings',
  Sports = 'Sports'
}

export interface Location {
  city: string
  state: string
  display_name: string
}

export interface Event {
  id: string
  title: string
  description?: string
  categories: Category
  startTime: Date
  endTime: Date
  location: string
}