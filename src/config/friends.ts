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
    name: '黑蚊子多',
    url: 'https://heavensdoor1.top',
    description: 'heavensdoor1.top',
    avatar: '/image/friends/heavensdoor1.jpg',
  },
];
