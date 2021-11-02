import { GetStaticProps, GetStaticPaths } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { getPost, getAllPosts } from "@/utils/mdxUtils";

import Layout from "../../components/Layout";
import Thumbnail from "../../components/Thumbnail";
import IPost from "@/interfaces/Post";
import { SITE_URL } from "../../constants";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
};

const components = {
  SyntaxHighlighter: dynamic(() => import("react-syntax-highlighter")),
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  const ogImage = SITE_URL + frontMatter.thumbnailUrl;

  return (
    <Layout pageTitle={frontMatter.title}>
      <Head>
        <meta
          name="description"
          content={frontMatter.description}
          key="description"
        />
        <meta
          property="og:description"
          content={frontMatter.description}
          key="ogDescription"
        />
        <meta property="og:image" content={ogImage} key="ogImage" />
      </Head>

      <article className="prose prose-green pt-16">
        <div className="mb-16">
          <Thumbnail title={frontMatter.title} src={frontMatter.thumbnailUrl} />
        </div>

        <h1 className="font-bold text-4xl md:text-6xl my-3">
          {frontMatter.title}
        </h1>

        <p className="font-bold text-1xl md:text-2xl mb-16">
          {frontMatter.description}
        </p>

        <MDXRemote {...source} components={components} />
      </article>
    </Layout>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
