declare interface Post {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  tags: Array<string>;
  slug: string;
}

export default Post;
