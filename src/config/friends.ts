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
    name: "phlin's blog",
    url: 'https://blog.phlin.cn',
    description: '一个后端开发的个人学习笔记',
    avatar: 'https://qiuniu.phlin.cn/bucket/favicon-32.png',
  },
 
];
