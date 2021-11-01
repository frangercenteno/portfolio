import { FC } from "react";

import CardPost from "@/components/CardPost";
import TitleSection from "@/components/TitleSection";
import LinkViewMore from "@/components/LinkViewMore";

import Post from "@/interfaces/Post";

interface PostsProps {
  posts: Post[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <section className="pb-16">
      <TitleSection isDark title="Post" />
      <div className="flex flex-wrap">
        {posts?.slice(0, 3).map((item, i) => (
          <CardPost key={i.toString()} {...item} />
        ))}
      </div>
      <LinkViewMore url="/posts" />
    </section>
  );
};

export default Posts;
