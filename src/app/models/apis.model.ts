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
  type: string;
  title: string;
  tags: string[];
  summary: string;
  userData: UserData;
  eventData: EventData;
}

export interface ImageTypeList {
  [key: string]: string[];
}
