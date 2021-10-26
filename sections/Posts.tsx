import { FC } from "react";

import CardPost from "@/components/CardPost";
import TitleSection from "@/components/TitleSection";
import LinkViewMore from "@/components/LinkViewMore";

import { posts } from "../constants";

interface PostsProps {}

const Posts: FC<PostsProps> = () => {
  return (
    <section className="pb-16">
      <TitleSection isDark title="Post" />
      <div className="flex flex-wrap">
        {posts.slice(0, 3).map((item) => (
          <CardPost key={item.id} {...item} />
        ))}
      </div>
      <LinkViewMore url="/posts" />
    </section>
  );
};

export default Posts;
