export interface Stage {
  name: string;
  color: string;
  talks: Talk[];
  size: number;
}

export interface Talk {
  title: string;
  description: string;
  presenters: Presenter[];
  startTime: string;
  endTime: string;
  day: number;
  tags: string[];
  webExLink: string;
}

export interface Presenter {
  name: string;
  email: string;
  bio: string;
  company: string;
  socialMedia: SocialMedia;
  picture?: string;
}

export interface SocialMedia {
  linkedin: string;
  twitter: string;
}

export interface Day {
  id: number;
  date: Date;
}

export enum Sector {
  START,
  END,
}
