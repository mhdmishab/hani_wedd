export interface RSVPData {
  guestName: string;
  numberOfGuests: number;
  attending: 'yes' | 'no' | null;
}

export interface EventDetail {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  mapUrl: string;
  image: string;
}
