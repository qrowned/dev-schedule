export interface Stage {
  name: string;
  color: string;
  talks: Talk[];
}

export interface Talk {
  title: string;
  description: string;
  presenters: Presenter[];
  time: string;
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
  [name: string]: string;
}

export interface Day {
  id: number;
  date: Date;
}
