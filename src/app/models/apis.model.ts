export interface UserData {
  firstName: string;
  age: string;
  profileImg?: string;
  surname?: string;
}

export interface EventData {
  city: string;
  date: string;
}

export interface Post {
  id: string;
  type: string;
  title: string;
  tags: string[];
  summary: string;
  userData: UserData;
  eventData: EventData;
  isHelping?: boolean;
}

export interface HelpingPost {
  postId: string;
}

export interface ImageTypeList {
  [key: string]: string[];
}
