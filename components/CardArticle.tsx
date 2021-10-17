import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface CardArticleProps {
  categories: {
    id: number;
    name: string;
    image: string;
  }[];
  id: number;
  title: string;
  summary: string;
  image: string;
  date: string;
  id_category: number;
  path: string;
}

const CardArticle: FC<CardArticleProps> = ({
  categories,
  title,
  summary,
  image,
  date,
  id_category,
  path,
}) => {
  const category = categories.find((category) => category.id === id_category);

  return (
    <Link href={path} passHref>
      <a
        href={path}
        className="block my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 cursor-pointer hover:opacity-75 duration-100"
      >
        <article className="overflow-hidden rounded-lg shadow-lg bg-secondary-lighter">
          <img alt={title} className="block h-auto w-full" src={image} />

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <span className="text-black font-bold">{title}</span>
            </h1>
            <p className="text-grey-darker text-sm">{date}</p>
          </header>

          <main className="px-2 md:px-4">
            <p className="font-normal text-sm truncate">{summary}</p>
          </main>

          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <div className="flex items-center text-black">
              <Image
                alt={category?.name}
                className="block rounded-full w-10 h-10"
                src={category?.image || ""}
                layout="intrinsic"
                width={30}
                height={30}
              />
              <p className="ml-2 text-sm">{category?.name}</p>
            </div>
          </footer>
        </article>
      </a>
    </Link>
  );
};

export default CardArticle;
