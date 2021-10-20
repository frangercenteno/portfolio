import { FC } from "react";
import Link from "next/link";

import CardPost from "@/components/CardPost";
import TitleSection from "@/components/TitleSection";

import { posts } from "../constants";

interface PostsProps {}

const Posts: FC<PostsProps> = () => {
  return (
    <div className="pb-16 bg-secondary-default">
      <div className="container mx-auto">
        <TitleSection isDark title="Post" />
        <div className="flex flex-wrap max-w-3xl m-auto">
          {posts.slice(0, 3).map((item) => (
            <CardPost key={item.id} {...item} />
          ))}
        </div>
        <div className="mt-6 max-w-3xl m-auto">
          <Link href="/blog">
            <a
              href="/blog"
              className="text-secondary-lighter text-base hover:text-secondary-lighter"
            >
              Ver más {">"}
              {">"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Posts;
