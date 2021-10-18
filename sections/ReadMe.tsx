import { FC } from "react";
import Link from "next/link";

import CardArticle from "@/components/CardArticle";
import TitleSection from "@/components/TitleSection";

import data from "db/articles.json";
const { articles, categories } = data.data;

interface ReadMeProps {}

const ReadMe: FC<ReadMeProps> = () => {
  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="pt-16 bg-secondary-default">
      <div className="container mx-auto">
        <TitleSection isDark title="Léeme" />
        <div className="flex flex-wrap max-w-3xl m-auto">
          {articles.slice(0, 3).map((item) => (
            <CardArticle key={item.id} {...item} categories={categories} />
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

export default ReadMe;
