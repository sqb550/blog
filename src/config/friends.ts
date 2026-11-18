/** A single site displayed on the friends page. */
export interface FriendLink {
  name: string;
  url: string;
  description: string;
  /** Optional avatar or logo URL. When omitted, the first character is shown. */
  avatar?: string;
}

/** Add, remove, or reorder friend links here. */
export const friendLinks: FriendLink[] = [
  {
    name: 'heavensdoor1.top',
    url: 'https://heavensdoor1.top',
    description: 'heavensdoor1.top',
  },
];
