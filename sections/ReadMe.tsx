import { FC } from "react";
import Link from "next/link";

import CardArticle from "@/components/CardArticle";
import TitleSection from "@/components/TitleSection";

import data from "db/articles.json";
const { articles, categories } = data.data;

type ReadMeProps = {
  title: string;
  summary: string;
};

const ReadMe: FC<ReadMeProps> = () => {
  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="pt-16 bg-secondary-default">
      <TitleSection
        isDark
        title="Léeme"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia commodo ullamcorper."
      />
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {articles.slice(0, 3).map((item) => (
            <CardArticle key={item.id} {...item} categories={categories} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/blog">
            <a className="text-primary-default text-base hover:text-secondary-lighter">Ver más</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadMe;
