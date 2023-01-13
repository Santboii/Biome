export enum Category {
  academics = 'Academics',
  artsAndCulture = 'Arts & Culture',
  gaming = 'Gaming',
  music = 'Music',
  networking = 'Networking',
  outdoors = 'Outdoors',
  partiesAndGatherings = 'Parties & Gatherings',
  sports = 'Sports'
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

export interface User {
  id: string
  displayName: string
  email: string
}