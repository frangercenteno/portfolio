import { GetStaticProps } from "next";
import { FC } from "react";

import Layout from "@/components/Layout";
import CardPost from "@/components/CardPost";

import type IPost from "@/interfaces/Post";
import { getAllPosts } from "@/utils/mdxUtils";
interface PostsProps {
  posts: IPost[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <Layout>
      <div className="py-20">
        <h1 className="text-primary-default text-3xl md:text-4xl font-bold leading-none">
          Posts
        </h1>
        <h2 className="text-secondary-lighter text-1xl font-bold leading-none md:mt-2">
          Coming soon...
        </h2>
        {posts.map((item, i) => (
          <CardPost key={i.toString()} {...item} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = getAllPosts([
      "slug",
      "date",
      "thumbnail",
      "title",
      "description",
      "tags",
    ]);

    return {
      props: {
        posts,
      },
    };
  } catch (_) {
    return {
      notFound: true,
    };
  }
};

export default Posts;
