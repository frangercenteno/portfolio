import { FC } from "react";
import Link from "next/link";

import IPost from "@/interfaces/Post";

interface CardPostProps extends IPost {}

const CardPost: FC<CardPostProps> = ({
  title,
  description,
  date,
  tags,
  slug,
}) => {
  return (
    <Link
      href={`/posts/${slug}`}
      passHref
      className="block my-4 sm:my-1 px-1 w-full lg:my-6 lg:px-4 cursor-pointer hover:opacity-75 duration-100 text-secondary-lighter border-2 border-solid rounded border-primary-default"
    >
      <article className="overflow-hidden">
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <span className="font-bold">{title}</span>
          </h1>
          <p className="text-grey-darker text-sm">{date}</p>
        </header>

        <main className="px-2 md:px-4">
          <p className="font-normal  text-sm">{description}</p>
        </main>

        <footer className="flex items-center leading-none p-2 md:p-4">
          {tags.map((tag, i) => (
            <div
              className="p-1 text-primary-dark bg-secondary-dark mr-2 mb-1"
              key={i.toString()}
            >
              {tag}
            </div>
          ))}
        </footer>
      </article>
    </Link>
  );
};

export default CardPost;
