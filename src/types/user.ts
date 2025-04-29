
export type UserRole = 'client' | 'band' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
}

export interface BandProfile {
  id: string;
  userId: string;
  name: string;
  bio: string;
  genre: string[];
  members: number;
  areasServed: string[];
  setList: string[];
  sampleSongs: {
    title: string;
    url: string;
  }[];
  coverPhoto: string;
  approved: boolean;
  pricing?: {
    hourlyRate?: number;
    fullEventRate?: number;
  };
}

export interface ClientProfile {
  id: string;
  userId: string;
  preferredGenres: string[];
  location: string;
}

export interface Event {
  id: string;
  clientId: string;
  bandId?: string;
  title: string;
  date: string;
  duration: number;
  location: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}
